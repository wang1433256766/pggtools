<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="中国科学院 中科院 上海 生命 科学 研究院 群体 基因 组学 计算 平台 渺图 软件 科技">
    <!--<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">-->
    <title>Upload</title>

    <!--Logo in tab and bookmark-->
    <link rel="shortcut icon" href="Public/image/favicon.ico"/>
    <link rel="bookmark" href="Public/image/favicon.ico"/>

    <!--Style of third party：Bootstrap-->
    <link rel="stylesheet" href="/ThirdParty/css/bootstrap-3.3.7-dist/css/bootstrap.min.css">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!--WebUploader-->
    <link rel="stylesheet" href="/ThirdParty/js/webuploader-0.1.5/webuploader.css">

    <link rel="stylesheet" href="Public/css/common.css">
    <link rel="stylesheet" href="Public/css/header.css">
    <link rel="stylesheet" href="Public/css/upload.css">
    <link rel="stylesheet" href="Public/css/footer.css">
<body>

<!--Navigation-->
<div id="header" class="container-0">
    <div class="container container-1">
        <div class="row">
            <div class="col-xs-8 text-left" id="navigation-left">
                <a id="logo" href="index.html"><img src="Public/image/logo.png"></a>
                <a href="index.html">Home</a>
                <a href="imputation.html">Imputation</a>
                <a href="gwas.html">GWAS</a>
                <a href="">Format conversion</a>
                <a href="">Figure illustration</a>
            </div>
            <div class="col-xs-4 text-right" id="navigation-right">
                <a id="tag-sign-container" href="login.html">Sign up/Sign in</a>
                <a id="tag-username-container" href="user.html"><span id="tag-username">Username</span></a>
            </div>
        </div>
    </div>
</div>

<!--Main content-->
<div id="middle-0" class="middle container-0">
    <div class="container container-1">
        <div class="row">
            <div class="col-xs-12 sub-container sub-container-file">
                <div class="col-xs-6 text-left">
                    <div id="picker" class="file-upload-control-button">添加文件</div>
                </div>
                <div class="col-xs-6 text-right">
                    <button id="UploadBtn" class="btn btn-default btn-right file-upload-control-button">开始上传</button>
                    <button id="StopBtn" class="btn btn-default btn-right file-upload-control-button">暂停上传</button>
                </div>
                <div class="height25px"></div>
                <div class="height25px"></div>
                <div class="height25px"></div>
            </div>
            <div id="thelist" class="col-xs-12 sub-container sub-container-file-selected uploader-list"></div>
        </div>
    </div>
</div>

<!--Copy rights area-->
<div id="footer" class="container-0">
    <div class="container container-1">
        <div class="row footer-row footer-row-0">
            <div class="col-xs-4">
                <h3>AAAAAA</h3>
                <p>aaaaaaaaaaaaaaaaaaaa</p>
                <p>aaaaaaaaaaaaaaaaaaaa</p>
                <p>aaaaaaaaaaaaaaaaaaaa</p>
            </div>
            <div class="col-xs-4">
                <h3>BBBBBB</h3>
                <p>bbbbbbbbbbbbbbbbbbbb</p>
                <p>bbbbbbbbbbbbbbbbbbbb</p>
                <p>bbbbbbbbbbbbbbbbbbbb</p>
            </div>
            <div class="col-xs-4">
                <h3>CCCCCC</h3>
                <p>cccccccccccccccccccc</p>
                <p>cccccccccccccccccccc</p>
                <p>cccccccccccccccccccc</p>
            </div>
        </div>

        <div class="height25px"></div>
        <div class="divide-line"></div>
        <div class="height25px"></div>

        <div class="row footer-row footer-row-1">
            <div class="col-xs-10 col-xs-offset-1 text-center">
                <p>Copy rights copy rights copy rights copy rights copy rights copy rights copy rights copy rights copy rights copy rights copy rights copy rights copy rights copy rights copy rights copy rights copy rights copy rights copy rights</p>
            </div>
            <div class="col-xs-10 col-xs-offset-1 text-center">
                <div class="height25px"></div>
            </div>
            <div class="col-xs-10 col-xs-offset-1 text-center">
                <img src="Public/image/logo.png">
            </div>
            <div class="col-xs-10 col-xs-offset-1 text-center">
                <div class="height25px"></div>
            </div>
        </div>
    </div>
</div>

<!--弹窗-->
<div id="popup">
    <div>
        <span id="popup-close" class="glyphicon glyphicon-remove"></span>
        <p id="popup-content">这里是提示信息</p>
    </div>
</div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins), for prior version of IE9 and IE9 support use version 1.12+ of jQuery -->
<script src="/ThirdParty/js/jquery-1.12.4.min.js"></script>
<!-- Include JavaScript of bootstrap -->
<script src="/ThirdParty/css/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<!--WebUploader-->
<script src="/ThirdParty/js/webuploader-0.1.5/webuploader.js"></script>

<script src="Public/js/common.js"></script>

<script>
    var BASE_URL='/ThirdParty/js/webuploader-0.1.5/';
    var md5QueProgress=new Object();
    var temp;
    $list=$('#thelist');

    var uploader = WebUploader.create({

        //设置选完文件后是否自动上传
        auto: false,

        //swf文件路径
        swf: BASE_URL + '/js/Uploader.swf',

        // 文件接收服务端。
        server: '/bigFileUp',

        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: '#picker',

        chunked: true,
        chunkSize: 10 * 1024 * 1024,
        chunkRetry: 3,
        threads: 5,
        fileSizeLimit: 10000 * 1024 * 1024,
        fileSingleSizeLimit: 10000 * 1024 * 1024
    });

    // 当有文件被添加进队列的时候
    uploader.on('fileQueued', function (file) {
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
            $(this).parent().parent().fadeOut();//视觉上消失了
            $(this).parent().parent().remove();//DOM上删除了
        });

        //每个文件都附带一个guid，以在服务端确定哪些文件块属于一个文件
        uploader.options.formData.guid = WebUploader.guid();
        uploader.options.formData.size = file.size;

        uploader.md5File(file)
            .progress(function(percentage) {
                temp=file.id;
                $('#' + file.id).find('p.state').text('Md5 progress: '+ Math.round(percentage*100) +'%');
                md5QueProgress[file.id]={
                    name:file.name,
                    progress:percentage
                };
            })
            .then(function (fileMd5) {
                //获取到了md5
                //每个文件都附带一个md5，便于实现秒传
                file.wholeMd5 = fileMd5;
                uploader.options.formData.md5value = file.wholeMd5;

                $('#' + file.id).find('p.state').text('Waiting to upload...');

                $.ajax({
                    cache: false,
                    type: "post",
                    url: "/IsMD5Exist",
                    data: {
                        fileMd5: fileMd5,
                        fileName: file.name,
                        fileID: file.id
                    },
                    success: function (result) {
                        console.log(result);
                        if (result == "this file is exist") {
                            console.log("服务器上已经有同样的文件了，开始秒传！");

                            uploader.removeFile(file, true);

                            $('#' + file.id).find('p.state').text('已上传');
                            $('#' + file.id).find(".progress").find(".progress-bar").attr("class", "progress-bar progress-bar-success");
                            //上传完后删除"删除"按钮
                            $('#' + file.id).find(".info").find('.btn').fadeOut('slow');
                            $("#StopBtn").fadeOut('slow');
                        } else {
                            console.log("服务器上没有同样的文件，秒传失败！");
                        }
                    }
                });
            });
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
        $('#' + file.id).find(".info").find('.btn').fadeOut('slow');//上传完后删除"删除"按钮
        $('#StopBtn').fadeOut('slow');
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
        //$('#' + file.id + 'btn').fadeOut('slow')//上传完后删除"删除"按钮
    });

    uploader.on('uploadFinished', function () {
        //上传完后的回调方法
        //alert("所有文件上传完毕");
        //提交表单
    });

    //上传
    $("#UploadBtn").click(function () {
        var temp=uploader.getFiles();
        var popMsg='<strong>Md5 operation still running:</strong> ';
        var flag=false;
        for(i=0;i<temp.length;i++){
            if(md5QueProgress[temp[i].id].progress.toString()=='1'){
                uploader.upload(temp[i].id);
            }
            else{
                flag=true;
                popMsg+='<br/>';
                popMsg+=md5QueProgress[temp[i].id].name;
            }
        }
        if(flag){
            popupMessage(popMsg,5000);
        }
    });

    //停止
    $("#StopBtn").click(function () {
        console.log($('#StopBtn').attr("status"));
        var status = $('#StopBtn').attr("status");
        if (status == "suspend") {
            console.log("当前按钮是暂停，即将变为继续");
            $("#StopBtn").html("继续上传");
            $("#StopBtn").attr("status", "continuous");

            console.log("__________________当前所有的文件_______________________");
            console.log(uploader.getFiles());
            console.log("__________________暂停上传_____________________________");
            uploader.stop(true);
            console.log("__________________所有当前暂停的文件___________________");
            console.log(uploader.getFiles("interrupt"));
        } else {
            console.log("当前按钮是继续，即将变为暂停");
            $("#StopBtn").html("暂停上传");
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
</script>
</body>
</html>