var urlPath = window.location.pathname;
var fromTool = urlPath.indexOf('gwas')>0?'1':'0';
$(function(){

    jQuery("#job-list").jqGrid({
        //url : '../public/js/JSONData.json',//组件创建完成之后请求数据的url
        url : '/getJobOfTable', 
        datatype : "json",//请求数据返回的类型。可选json,xml,txt
        postData: {from:urlPath.indexOf('gwas')>0?'1':'0'},
        jsonReader : {
            root: function(str){ 
                    return JSON.parse(str.rows);
                }
        },
        colNames : [ 'Job ID', 'Name', 'Type', 'Submit', 'State','Update time'],//jqGrid的列显示名字
        colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
                     {name:'id', index:'id', width:'10%', align:'center', formatter:formatId}, 
                     {name:'name', index:'name', width:'20%', align:'center'}, 
                     {name:'pipeline', index:'pipeline', width:'15%', align:'center'}, 
                     {name:'submit_datetime', index:'submit_datetime', width:'20%', align:'center', formatter:formatSubTime}, 
                     {name:'state', index:'state', width:'15%', align:'center'}, 
                     {name:'state_datetime', index:'state_datetime', width:'20%', align:'center', formatter:formatStateTime}
                   ],
        rowNum : 10,//一页显示多少条
        rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
        pager : '#job-pager',//表格页脚的占位符(一般是div)的id
        sortname : 'id',//初始化的时候排序的字段
        sortorder : "desc",//排序方式,可选desc,asc
        mtype : "get",//向后台请求数据的ajax的类型。可选post,get
        viewrecords : true,
        caption : 'Your jobs',//表格的标题名字
        autowidth : true,
        multiselect : true,
        height : "auto"
    });

        // function(){
        //     return '<img src="../public/images/9-4-News-Manager_01.png">';
        // }()  caption显示图标

    // jQuery.extend(jQuery("#job-list").jqGrid,{  
    //     parse:function(jsstring) {  
    //         console.log(jsstring);
    //         return JSON.parse(jsstring);  
    //     }  
    // });

    /*创建jqGrid的操作按钮容器*/
    /*可以控制界面上增删改查的按钮是否显示*/
    jQuery("#job-list")
    .jqGrid('navGrid', '#job-pager', {edit:false, add:false, del:false, view:false, search:false})
    .jqGrid('navButtonAdd','#job-pager', {
       caption:"Del", 
       buttonicon:"ui-icon-trash", 
       onClickButton: delModal, 
       position:"first",
       title:"删除记录",
       cursor:"pointer"
    })
    // .jqGrid('navButtonAdd','#job-pager', {
    //    caption:"Edit", 
    //    buttonicon:"ui-icon-pencil", 
    //    onClickButton: editModal, 
    //    position:"first",
    //    title:"编辑记录",
    //    cursor:"pointer"
    // })
    // .jqGrid('navButtonAdd','#job-pager', {
    //    caption:"Add", 
    //    buttonicon:"ui-icon-plus", 
    //    onClickButton: addModal, 
    //    position:"first",
    //    title:"添加记录",
    //    cursor:"pointer"
    // });
    

    // jQuery("#file-list").jqGrid({
    //     jsonReader : {
    //         root: function(str){ 
    //                 return JSON.parse(str.rows);
    //             }
    //     },
    //     //url : '../public/js/JSONData.json',//组件创建完成之后请求数据的url
    //     url : '/getFileOfTable',
    //     datatype : "json",//请求数据返回的类型。可选json,xml,txt
    //     colNames : [ 'File ID', 'Name', 'size', 'Submit time', 'State','md5'],//jqGrid的列显示名字
    //     colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
    //                  {name:'id', index:'id', width:'5%', align:'center', align:'center'}, 
    //                  {name:'name', index:'name', width:'20%', align:'center' ,sortable: true}, 
    //                  {name:'size', index:'size', width:'10%', align:'center' ,sortable: true}, 
    //                  {name:'datetime', index:'datetime', width:'15%', align:'center' ,sortable: true}, 
    //                  {name:'status', index:'status', width:'5%', align:'center' ,sortable: true}, 
    //                  {name:'md5', index:'md5', width:'20%', align:'center' ,sortable: false} 
    //                ],
    //     rowNum : 10,//一页显示多少条
    //     rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
    //     pager : '#file-pager',//表格页脚的占位符(一般是div)的id
    //     sortname : 'id',//初始化的时候排序的字段
    //     sortorder : "desc",//排序方式,可选desc,asc
    //     mtype : "get",//向后台请求数据的ajax的类型。可选post,get
    //     viewrecords : true,
    //     caption : "Your uploaded files",//表格的标题名字
    //     autowidth : true,
    //     multiselect : true,
    //     height : "auto"
    // });
    // /*创建jqGrid的操作按钮容器*/
    // /*可以控制界面上增删改查的按钮是否显示*/
    // jQuery("#file-list")
    // .jqGrid('navGrid', '#file-pager', {edit:false, add:false, del:false, view:false, search:false})
    // .jqGrid('navButtonAdd','#file-pager', {
    //    caption:"Del", 
    //    buttonicon:"ui-icon-trash", 
    //    onClickButton: delFileModal, 
    //    position:"first",
    //    title:"删除记录",
    //    cursor:"pointer"
    // })
    // .jqGrid('navSeparatorAdd', '#file-pager',{
    //     sepclass : "#eeeeee",//分隔符的CSS样式；
    //     sepcontent : "|"//分隔符中的内容；
    // })
    // .jqGrid('navButtonAdd','#file-pager', {
    //    caption:"Edit", 
    //    buttonicon:"ui-icon-pencil", 
    //    onClickButton: editFileModal, 
    //    position:"first",
    //    title:"编辑记录",
    //    cursor:"pointer"
    // })
    // .jqGrid('navButtonAdd','#file-pager', {
    //    caption:"Add", 
    //    buttonicon:"ui-icon-plus", 
    //    onClickButton: addFileModal, 
    //    position:"first",
    //    title:"添加记录",
    //    cursor:"pointer"
    // });

    $("#job-list").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" });
    //$("#file-list").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" });

    // 调整 jgGrid的宽度
    $(window).on('resize.jqGrid', function() {
        // $(grid_selector).jqGrid('setGridWidth', $(".page-content").width());
        // // 适应page-content的宽度
        $("#job-list").jqGrid('setGridWidth', $(".wrap").width()); // 适应父节点的宽度
        //$("#file-list").jqGrid('setGridWidth', $(".wrap").width()); // 适应父节点的宽度
    })


    // var memPieChart = echarts.init(document.getElementById('memPie'));
    // var diskPieChart = echarts.init(document.getElementById('diskPie'));
    // var cpuPieChart = echarts.init(document.getElementById('cpuPie'));
    // var option = {
    //     title : {
    //         text: '',
    //         //subtext: '纯属虚构',
    //         x:'center',
    //         top:'bottom',
    //         textStyle: {
    //             color: '#24A9DE',
    //             fontSize: 16,
    //             fontWeight: 'normal'
    //         }
    //     },
    //     tooltip : {
    //         trigger: 'item',
    //         //position: ['50%', '50%'],
    //         formatter: "{a} <br/>{b} : {d}%" //"{a} <br/>{b} : {c} ({d}%)"
    //     },
    //     // legend: {
    //     //     orient: 'horizontal',
    //     //     left: 'right',
    //     //     data: ['mem_use','mem_free']
    //     // },
    //     series : [
    //         {
    //             name: 'mem使用情况',
    //             type: 'pie',
    //             color: ['#FD9707','#11A3DE'],
    //             radius : '50%', //半径
    //             center: ['50%', '50%'],
    //             data:[],
    //             itemStyle: {
    //                 emphasis: {
    //                     shadowBlur: 10,
    //                     shadowOffsetX: 0, //阴影水平偏离位置
    //                     shadowColor: 'rgba(0, 0, 0, 0.5)'
    //                 }
    //             }
    //         }
    //     ]
    // };
    // memPieChart.setOption(option);
    // diskPieChart.setOption(option);
    // cpuPieChart.setOption(option);

    // $.get('/metrics').done(function (data) {
    //     var res = JSON.parse(data.content);
    //     var data = {};
    //     $.each(res,function(i,v){
    //        data[v.name] = v.val;
    //     })
    //     var memData = [{name:'mem_use',value:data.mem_total-data.mem_free},{name:'mem_free',value:data.mem_free}];
    //     var diskData = [{name:'disk_use',value:data.disk_total-data.disk_free},{name:'disk_free',value:data.disk_free}];
    //     var cpuData = [{name:'cpu_use',value:data.cpu_system},{name:'cpu_free',value:100-data.cpu_system}];
    //     memPieChart.setOption({
    //         title : {
    //             text: 'mem use',
    //         },
    //         series: [{
    //             // 根据名字对应到相应的系列
    //             name: 'mem use',
    //             data: memData
    //         }]
    //     });
    //     diskPieChart.setOption({
    //         title : {
    //             text: 'disk use',
    //         },
    //         series: [{
    //             // 根据名字对应到相应的系列
    //             name: 'disk use',
    //             data: diskData
    //         }]
    //     });
    //     cpuPieChart.setOption({
    //         title : {
    //             text: 'cpu use',
    //         },
    //         series: [{
    //             // 根据名字对应到相应的系列
    //             name: 'cpu use',
    //             data: cpuData
    //         }]
    //     });
    // })

    // setInterval(function () {
    //     $.get('/metrics').done(function (data) {
    //         var res = JSON.parse(data.content);
    //         var data = {};
    //         $.each(res,function(i,v){
    //            data[v.name] = v.val;
    //         })
    //         var memData = [{name:'mem_use',value:data.mem_total-data.mem_free},{name:'mem_free',value:data.mem_free}];
    //         var diskData = [{name:'disk_use',value:data.disk_total-data.disk_free},{name:'disk_free',value:data.disk_free}];
    //         var cpuData = [{name:'cpu_use',value:data.cpu_system},{name:'cpu_free',value:100-data.cpu_system}];
    //         memPieChart.setOption({
    //             title : {
    //                 text: 'mem使用情况:',
    //             },
    //             series: [{
    //                 // 根据名字对应到相应的系列
    //                 name: 'mem使用情况',
    //                 data: memData
    //             }]
    //         });
    //         diskPieChart.setOption({
    //             title : {
    //                 text: 'disk使用情况:',
    //             },
    //             series: [{
    //                 // 根据名字对应到相应的系列
    //                 name: 'disk使用情况',
    //                 data: diskData
    //             }]
    //         });
    //         cpuPieChart.setOption({
    //             title : {
    //                 text: 'cpu使用情况:',
    //             },
    //             series: [{
    //                 // 根据名字对应到相应的系列
    //                 name: 'cpu使用情况',
    //                 data: cpuData
    //             }]
    //         });
    //     })
    // },60000);


});

function formatId(params){
    console.log(fromTool);
    //return "<a href='#' style='color:#11a3de;' onclick='openDetailModal("+params+")'>"+params+"</a>";
    return "<a href='/job-track?jobid="+params+"&from="+fromTool+"' style='color:#11a3de;'>"+params+"</a>";
}

function formatSubTime(params){
    return timestamp2date(params);
}

function formatStateTime(params){
    return timestamp2date(params);
}
/*
    取消所有选中的行：
    $("jqgridtableid").trigger("reloadGrid")；
    获得某单元格的数据：
    var celldata = $("jqgridtableid").jqGrid('getCell',id,colnum);
    var selid = $("#job-list").jqGrid('getGridParam', 'selrow');//获取单行ID
    var row = $("#job-list").jqGrid('getRowData', selid);//获取行数据
    获得所有行的ID数组：
    var ids =  $("jqgridtableid").jqGrid('getDataIDs');
*/

//新增job模态框
function addModal(){
    $('#addJobModal').modal('show');
}
//新增file模态框
function addFileModal(){
    
}

//编辑job模态框
function editModal(){

}
//编辑file模态框
function editFileModal(){

}

//删除job模态框
function delModal(){
    // var selid = $("#job-list").jqGrid('getGridParam', 'selrow');//获取单行ID
    // var row = $("#job-list").jqGrid('getRowData', selid);//获取行数据
    // console.log(row); return false;
    var ids = $("#job-list").jqGrid('getGridParam', 'selarrrow'); //获取多行ID
    if (ids.length>0) {
        ids = ids.join(',');
        console.log(ids);
        $.ajax({
            type: 'POST',
            url: '/deleteJob',
            xhrFields: {
               withCredentials: true
            },
            data: {id:ids},
            dataType: 'json',
            success: function(res){
                if(res.status == 0){
                    bootbox.alert("删除成功");
                    $("#job-list").trigger("reloadGrid");//局部刷新
                }
            }
        })
    } else {
        bootbox.alert("请选择要删除的行");
    }
}
//删除file模态框
function delFileModal(){
    var ids = $("#file-list").jqGrid('getGridParam', 'selarrrow'); //获取多行ID
    if (ids.length>0) {
        ids = ids.join(',');
        console.log(ids);
        $.ajax({
            type: 'POST',
            url: '/deleteFile',
            xhrFields: {
               withCredentials: true
            },
            data: {id:ids},
            dataType: 'json',
            success: function(res){
                if(res.status == 0){
                    bootbox.alert("删除成功");
                    $("#file-list").trigger("reloadGrid");//局部刷新
                }
            }
        })
    } else {
        bootbox.alert("请选择要删除的行");
    }
}

function timestamp2date(timestamp) {
	var newDate = new Date();
	newDate.setTime(timestamp);
	return newDate.toLocaleString();
}

function openDetailModal(jobid){
    $.ajax({
        //async:false, //同步
        //type: 'post',
        url: '/getAllJob',
        data: {id: jobid},
        dataType: 'json',
        success: function(res){
            var data = JSON.parse(res.content);
            if(res.status == 0){
                $('#jobModal').modal('show');
                $('#jobidmodel').text(data[0].id);
                $('#jobnamemodel').text(data[0].name);
                $('#jobpipelinemodel').text(data[0].pipeline);
                $('#jobcommandmodel').text(data[0].command);
                $('#jobstatusmodel').text(data[0].state);
                $('#jobsubtimemodel').text(timestamp2date(data[0].submit_datetime));
                $('#jobstatetimemodel').text(timestamp2date(data[0].state_datetime));
                $("#fileModelTable").empty();
                //console.log(data[0].files.length);
                if(data[0].files.length>0){
                    $.each(data[0].files,function(i,v){
                        if(v!=null){
                            $("#fileModelTable").append("<tr><td>"+v.id+"</td><td><a target='_blank' href='/fileDownload?id="+v.id+"'>"+v.name+"</a></td><td>"+v.path+"</td><td>"+v.size+"</td><td>"+v.md5+"</td><td>"+v.datetime+"</td><td>"+v.status+"</td></tr>");
                        }
                    })
                }
            }
        }
    });
}

function downloadFile(id){
    window.location.href="/fileDownload?id="+id;
}

// function changeStatus(url){
//     var data = "";
//     if($(".single-checkbox").length>0){
//         for(var i=0; i<$(".single-checkbox").length; i++){
//             if($(".single-checkbox")[i].checked){
//                 data += $(".single-checkbox")[i].id.substring(9)+',';
//             }
//         }
//     }
//     if(data == ""){
//         alert("请选择要操作的行！"); return false;
//     }
//     data = data.substring(0,data.length-1);
//     //console.log(data);
//     $.ajax({
//         type: 'POST',
//         url: url,
//         data: {id:data,status:'Pending'},
//         dataType: 'json',
//         success: function(res){
//             alert(res.msg);
//             if(res.status == 0){
//                 jobtable(1);
//             }
//         }
//     })
// }

// function deleteFiles(url){
//     var data = "";
//     if($(".file-single-checkbox").length>0){
//         for(var i=0; i<$(".file-single-checkbox").length; i++){
//             if($(".file-single-checkbox")[i].checked){
//                 data += $(".file-single-checkbox")[i].id.substring(14)+',';
//             }
//         }
//     }
//     if(data == ""){
//         alert("请选择要操作的行！"); return false;
//     }
//     data = data.substring(0,data.length-1);
//     //console.log(data);
//     $.ajax({
//         type: 'POST',
//         url: url,
//         xhrFields: {
//            withCredentials: true
//         },
//         data: {id:data},
//         dataType: 'json',
//         success: function(res){
//             alert(res.msg);
//             if(res.status == 0){
//                 filetable(1);
//             }
//         }
//     })
// }

// function jobtable(page){
//     $("#jobbody").empty();
//     $.ajax({
//         async: true, //异步
//         url: 'http://192.168.1.101/getAllJob',
//         xhrFields: {
//            withCredentials: true
//         },
//         data:{page:page},
//         dataType: 'json',
//         success: function(res){
//             //console.log(res);
//             var data = JSON.parse(res.content);
            
//             $.each(data, function(key, val) {  
//                 $("#jobbody").append("<tr><td><a href='#' onclick='openModal("+val.id+")'>" + val.id + "</a></td><td>" + val.name + "</td><td>" + val.pipeline + "</td><td>" + timestamp2date(val.submit_datetime) + "</td><td>" + val.state + "</td><td>" + timestamp2date(val.state_datetime) + "</td><td class='select-all-check hide'><input type='checkbox' class='single-checkbox' id='checkbox_"+val.id+"'/></td></tr>");
//             });
//             $("#jobdiv1").removeClass('col-md-3').addClass('col-md-1');
//             $("#jobdiv2").removeClass('col-md-9').addClass('col-md-11');
//             $(".select-all-check").addClass('hide');
//             $("#job-update").addClass('hide');
//             $("#job-delete").addClass('hide');
//             $("#job-return").addClass('hide');
//             $("#job-setting").removeClass('hide');
//         },
//         error: function(msg){
//             //console.log(msg);
//         }
//     });
// }

// function filetable(page){
//     $("#filebody").empty();
//     $.ajax({
//         async: true,
//         url: 'http://192.168.1.101/getAllFile',
//         xhrFields: {
//            withCredentials: true
//         },
//         data:{page:page},
//         dataType: 'json',
//         success: function(res){
//             var data = JSON.parse(res.content);
//             //console.log(data);
//             $.each(data, function(key, val) {  
//                 $("#filebody").append("<tr><td>" + val.id + "</td><td>" + val.name + "</td><td>" + val.size + "</td><td>" + val.datetime.substring(0,19) + "</td><td>" + val.status + "</td><td>" + val.md5 + "</td><td class='file-select-all-check hide'><input type='checkbox' class='file-single-checkbox' id='file_checkbox_"+val.id+"'/></td></tr>");
//             });
//             $("#filediv1").removeClass('col-md-2').addClass('col-md-1');
//             $("#filediv2").removeClass('col-md-10').addClass('col-md-11');
//             $(".file-select-all-check").addClass('hide');
//             $("#file-delete").addClass('hide');
//             $("#file-return").addClass('hide');
//             $("#file-setting").removeClass('hide');
//         },
//         error: function(msg){
//             //console.log(msg);
//         }
//     });
// }

