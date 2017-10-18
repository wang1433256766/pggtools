//var BASE_URL='/ThirdParty/js/webuploader-0.1.5/';
var md5QueProgress=new Object();
var temp;
$list=$('#thelist');

var urlPath = window.location.pathname;

var uploader = WebUploader.create({

    //设置选完文件后是否自动上传
    auto: false,

    //swf文件路径
    swf: '../public/image/Uploader.swf',

    // 文件接收服务端。
    server: '/bigFileUp',

    // 选择文件的按钮。可选。
    // 内部根据当前运行时创建，可能是input元素，也可能是flash.
    pick: '#picker',

    formData: {from:urlPath.indexOf('gwas')>0?'1':'0'}, //文件上传请求的参数表，每次发送都会发送此对象中的参数。

    chunked: true, //是否要分片处理大文件上传
    chunkSize: 10 * 1024 * 1024,  //分多大一片 （10M一片）
    chunkRetry: 3, //某个分片由于网络问题，可以自动重传3次
    threads: 5, //允许同时最大上传进程数
    fileSizeLimit: 10 * 1024 * 1024 * 1024, //验证文件总大小是否超出限制, 超出则不允许加入队列 （10个G）
    fileSingleSizeLimit: 10 * 1024 * 1024 * 1024, //验证单个文件大小是否超出限制, 超出则不允许加入队列 （10个G）
    accept: {
        title: 'gwasLimitFile',
        extensions: urlPath.indexOf('gwas')>0?'ped,map,covariates':'*',
        mimeTypes: '*'
    }
});

uploader.on('error', function(type){
    if (type=="Q_TYPE_DENIED"){
        alert("Please upload .ped or .map or .covariates file");
        return false;
    }
})

// 当有文件被添加进队列的时候
uploader.on('fileQueued', function (file) {
    //console.log(file);
    $list.append('' +
        '<div id="' + file.id + '" class="selected-file-item">' +
            '<h4 class="info">' + file.name +
                '<span fileId="' + file.id + '" class="btn-delete glyphicon glyphicon-trash" title="Delete"></span>' +
            '</h4>' +
            '<p class="state">MD5 verifying...</p>' +
        '</div>');

    //删除要上传的文件，每次添加文件都给btn-delete绑定删除方法
    $(".btn-delete").click(function () {
        uploader.removeFile(uploader.getFile($(this).attr("fileId"), true));
        //uploader.reset();
        $(this).parent().parent().fadeOut();//视觉上消失了
        $(this).parent().parent().remove();//DOM上删除了
    });

    //每个文件都附带一个guid，以在服务端确定哪些文件块属于一个文件
    file.guid = WebUploader.Base.guid();
    //uploader.options.formData.guid = WebUploader.Base.guid(); //WebUploader.guid();
    //uploader.options.formData.size = file.size;

    uploader.md5File(file)
        .progress(function(percentage) {
            //console.log(percentage);
            temp=file.id;
            $('#' + file.id).find('p.state').text('Md5 progress: '+ Math.round(percentage*100) +'%');
            md5QueProgress[file.id]={
                name:file.name,
                progress:percentage
            };
        })
        .then(function (fileMd5) {
            //console.log(fileMd5);
            //获取到了md5
            //每个文件都附带一个md5，便于实现秒传
            file.wholeMd5 = fileMd5;
            //uploader.options.formData.md5value = file.wholeMd5;

            $('#' + file.id).find('p.state').text('Waiting to upload...');

            // $.ajax({
            //     cache: false,
            //     type: "post",
            //     url: "http://192.168.1.103:8080/PGGDB/BigFileUpload/IsMD5Exist",
            //     data: {
            //         fileMd5: fileMd5,
            //         fileName: file.name,
            //         fileID: file.id
            //     },
            //     success: function (result) {
            //         console.log(result);
            //         if (result == "this file is exist") {
            //             console.log("服务器上已经有同样的文件了，开始秒传！");

            //             uploader.removeFile(file, true);

            //             $('#' + file.id).find('p.state').text('已上传');
            //             $('#' + file.id).find(".progress").find(".progress-bar").attr("class", "progress-bar progress-bar-success");
            //             //上传完后删除"删除"按钮
            //             $('#' + file.id).find(".info").find('.btn').fadeOut('slow');
            //             $("#StopBtn").fadeOut('slow');
            //         } else {
            //             console.log("服务器上没有同样的文件，秒传失败！");
            //         }
            //     }
            // });
        });
    //console.log(uploader.options.formData);
});

// 文件上传过程中创建进度条实时显示。
uploader.on('uploadProgress', function (file, percentage) {
    var $li = $('#' + file.id),
        $percent = $li.find('.progress .progress-bar');

    // 避免重复创建
    if (!$percent.length) {
        $percent = $('<div class="progress progress-striped active">' +
            '<div class="progress-bar" role="progressbar" style="width: 0%">' +
            '</div>' +
            '</div>').appendTo($li).find('.progress-bar');
    }
    $li.find('p.state').text('Uploading...');
    $percent.css('width', percentage * 100 + '%');
});

uploader.on('uploadSuccess', function (file) {
    $('#' + file.id).find('p.state').text('Uploaded.');
    $('#' + file.id).find(".progress").find(".progress-bar").attr("class", "progress-bar progress-bar-success");
    $('#' + file.id).find(".info").find('.btn-delete').fadeOut('slow');//上传完后删除"删除"按钮
    $('#StopBtn').fadeOut('slow');
    uploader.removeFile(uploader.getFile(file.id),true);//将上传完毕后的文件移除队列
});

uploader.on('uploadError', function (file,reason) {
    $('#' + file.id).find('p.state').text('Error: '+reason);
    //上传出错后进度条爆红
    $('#' + file.id).find(".progress").find(".progress-bar").attr("class", "progress-bar progress-bar-danger");
    //添加重试按钮
    //为了防止重复添加重试按钮，做一个判断
    //var retrybutton = $('#' + file.id).find(".btn-retry");
    //$('#' + file.id)
    if ($('#' + file.id).find(".btn-retry").length < 1) {
        var btn = $('<span fileid="' + file.id + '" class="btn-retry glyphicon glyphicon-refresh" title="Retry"></span>');
        $('#' + file.id).find(".info").append(btn);
    }

    $(".btn-retry").click(function () {
        console.log($(this).attr("fileId"));
        uploader.retry(uploader.getFile($(this).attr("fileId")));
    });
});

uploader.on('uploadComplete', function (file) {
    //上传完成后回调
    //$('#' + file.id).find('.progress').fadeOut();//上传完删除进度条
});

uploader.on('uploadFinished', function () {
    //重置(清空)队列
    //uploader.reset();
     $("#grid-table").trigger("reloadGrid");//表格局部刷新
    //上传完后的回调方法
    //alert("所有文件上传完毕");
    //提交表单
});

//上传
$("#UploadBtn").click(function () {
    var temp=uploader.getFiles('inited'); //初始状态
    //console.log(temp); return false;
    //var popMsg='<strong>Md5 operation still running:</strong> ';
    var flag=false;
    if(temp.length<=0){
        alert("请先选择要上传的文件！");return false;
    }

    //睡一秒再进行下一次循环
    for(i=0;i<temp.length;i++){
        var fileobj = temp[i];
        $.ajax({
            async: false,
            type: 'POST',
            url: '/isFileNameExist',
            dataType: 'json',
            data: {fileName:fileobj.name},
            success: function(res){
                if(res.status == 0){
                    (function(fileobj) {
                        setTimeout(function() {
                    　　　　 if(md5QueProgress[fileobj.id].progress.toString()=='1'){
                                $('#' + fileobj.id).find('p.state').text('entered download queue');
                                uploader.options.formData.guid = fileobj.guid;
                                uploader.options.formData.md5value = fileobj.wholeMd5;
                                uploader.upload(fileobj.id);
                            }
                        }, i * 500);
                    })(fileobj);
                }else{
                    alert("The file of the same name has been automatically filtered");
                }
            }
        })
        
    }
});

//停止
$("#StopBtn").click(function () {
    console.log($('#StopBtn').attr("status"));
    var status = $('#StopBtn').attr("status");
    if (status == "suspend") {
        console.log("当前按钮是暂停，即将变为继续");
        $("#StopBtn").html("Continue");
        $("#StopBtn").attr("status", "continuous");

        console.log("__________________当前所有的文件_______________________");
        console.log(uploader.getFiles());
        console.log("__________________暂停上传_____________________________");
        uploader.stop(true);
        console.log("__________________所有当前暂停的文件___________________");
        console.log(uploader.getFiles("interrupt"));
    } else {
        console.log("当前按钮是继续，即将变为暂停");
        $("#StopBtn").html("Stop");
        $("#StopBtn").attr("status", "suspend");

        console.log("__________________所有当前暂停的文件___________________");
        console.log(uploader.getFiles("interrupt"));
        uploader.upload(uploader.getFiles("interrupt"));
    }
});

uploader.on('uploadAccept', function (file, response) {
    if (response._raw === '{"error":true}') {
        return false;
    }
});

$(function(){
    jQuery("#grid-table").jqGrid({
        jsonReader : {
            root: function(str){ 
                    return JSON.parse(str.rows);
                }
        },
        url : '/getFileOfTable',//组件创建完成之后请求数据的url
        postData: {from:urlPath.indexOf('gwas')>0?'1':'0'},
        datatype : "json",//请求数据返回的类型。可选json,xml,txt
        colNames : [ 'File ID', 'Name', 'Size', 'UploadTime', 'Status','MD5'],//jqGrid的列显示名字
        colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
                     {name:'id', index:'id', width:'5%', align:'center', align:'center'}, 
                     {name:'name', index:'name', width:'20%', align:'center' ,sortable: true}, 
                     {name:'size', index:'size', width:'10%', align:'center' ,sortable: true}, 
                     {name:'datetime', index:'datetime', width:'15%', align:'center' ,sortable: true}, 
                     {name:'status', index:'status', width:'5%', align:'center' ,sortable: true}, 
                     {name:'md5', index:'md5', width:'20%', align:'center' ,sortable: true}
                   ],
        rowNum : 10,//一页显示多少条
        rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
        pager : '#grid-pager',//表格页脚的占位符(一般是div)的id
        sortname : 'id',//初始化的时候排序的字段
        sortorder : "desc",//排序方式,可选desc,asc
        mtype : "get",//向后台请求数据的ajax的类型。可选post,get
        viewrecords : true,
        caption : "Uploaded List",//表格的标题名字
        autowidth : true,
        multiselect : false,
        height : "auto"
    });
    /*创建jqGrid的操作按钮容器*/
    /*可以控制界面上增删改查的按钮是否显示*/
    jQuery("#grid-table")
    .jqGrid('navGrid', '#grid-pager', {edit:false, add:false, del:false, view:false, search:false})
    // .jqGrid('navButtonAdd','#grid-pager', {
    //    caption:"Del", 
    //    buttonicon:"ui-icon-trash", 
    //    onClickButton: delModal, 
    //    position:"first",
    //    title:"删除记录",
    //    cursor:"pointer"
    // })
    // .jqGrid('navButtonAdd','#grid-pager', {
    //    caption:"Edit", 
    //    buttonicon:"ui-icon-pencil", 
    //    onClickButton: editModal, 
    //    position:"first",
    //    title:"编辑记录",
    //    cursor:"pointer"
    // })
    // .jqGrid('navButtonAdd','#grid-pager', {
    //    caption:"Add", 
    //    buttonicon:"ui-icon-plus", 
    //    onClickButton: addModal, 
    //    position:"first",
    //    title:"添加记录",
    //    cursor:"pointer"
    // });

    $("#grid-table").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" });

    // 调整 jgGrid的宽度
    $(window).on('resize.jqGrid', function() {
        // $(grid_selector).jqGrid('setGridWidth', $(".page-content").width());
        // // 适应page-content的宽度
        $("#grid-table").jqGrid('setGridWidth', $(".wrap").width()); // 适应父节点的宽度
    })
});