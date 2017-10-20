$(function(){

    //tab切换
    window.onload = function()
    {
        var $li = $('#tab li');
        var $ul = $('#content ul');
                    
        $li.click(function(){
            var $this = $(this);
            var $t = $this.index();
            $li.removeClass();
            $this.addClass('current');
            $ul.css('display','none');
            $ul.eq($t).css('display','block');
            //console.log($ul.eq($t).find('table')[0].id);
            if($ul.eq($t).find('table')[0].id == 'nodes-table'){
            	//获得所有节点
            	getNodes();
            	//全选
            	$(".allcheck").change(function(){
            		if($(".allcheck").is(':checked')){
            			$(".singlecheckbox").prop('checked',true);
            		}else{
            			$(".singlecheckbox").prop('checked',false);
            		}
            	})
            	//添加节点
            	$("#addNode").click(function(){
            		$("#addNodesModal").modal('show');
            	})
            	$("#addNotesBtn").click(function(){
            		var nodeName = $("#nodesName").val();
            		var ip = $("#nodesIP").val();
            		if(!nodeName || !ip){
            			bootbox.alert("请填写节点名和ip"); return false;
            		}
            		$.ajax({
	            		type: 'POST',
	            		url: '/addNode',
	            		dataType: 'json',
	            		data: {nodeName:nodeName,ip:ip,status:0},
	            		success: function(res){
	            			bootbox.alert(res.msg);
	            			if(res.status == 0){
	            				$("#addNodesModal").modal('hide');
	            				getNodes();
	            			}
	            		}
	            	})
            	})
            	//修改节点状态
            	$("#updateNode").click(function(){
            		$("#updateNodesModal").modal('show');
            	})
            	$("#updateNotesBtn").click(function(){
            		var nodeIds = "";
            		var status = $("#nodesStatus").val();
            		//获得选中的节点
            		$.each($(".singlecheckbox"),function(i,v){
            			if($(v).is(':checked')){
            				nodeIds += v.id.substring(9) +',';
            			}
            		})
            		nodeIds = nodeIds.substring(0,nodeIds.length-1);
            		$.ajax({
            			type: 'POST',
            			url: '/updateNode',
            			dataType: 'json',
            			data: {nodeIds:nodeIds,status:status},
            			success: function(res){
            				bootbox.alert(res.msg);
            				if(res.status == 0){
            					$("#updateNodesModal").modal('hide');
            					getNodes();
            				}
            			}
            		})
            	})
            	//删除节点
            	$("#delNode").click(function(){
            		var nodeIds = "";
            		//获得选中的节点
            		$.each($(".singlecheckbox"),function(i,v){
            			if($(v).is(':checked')){
            				nodeIds += v.id.substring(9) +',';
            			}
            		})
            		nodeIds = nodeIds.substring(0,nodeIds.length-1);
            		$.ajax({
            			type: 'POST',
            			url: '/delNode',
            			dataType: 'json',
            			data: {nodeIds:nodeIds},
            			success: function(res){
            				bootbox.alert(res.msg);
            				if(res.status == 0){
            					getNodes();
            				}
            			}
            		})
            	})
            }
            if($ul.eq($t).find('table')[0].id == 'job-grid-table'){
                //jobManager
                jQuery("#job-grid-table").jqGrid({
                    jsonReader : {
                        root: function(str){ 
                                return JSON.parse(str.rows);
                            }
                    },
                    //url : '../public/js/JSONData.json',//组件创建完成之后请求数据的url
                    url : '/adminGetJob', 
                    datatype : "json",//请求数据返回的类型。可选json,xml,txt
                    colNames : [ 'Job ID', 'Name', 'Type', 'Submit', 'State','Update time'],//jqGrid的列显示名字
                    colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
                                 {name:'id', index:'id', width:'10%', align:'center', formatter:formatJobId, searchoptions:{sopt:['eq','ne','le','lt','gt','ge']}}, 
                                 {name:'name', index:'name', width:'20%', align:'center', searchoptions:{sopt:['eq','ne','le','lt','gt','ge']}}, 
                                 {name:'pipeline', index:'pipeline', width:'20%', align:'center', searchoptions:{sopt:['eq','ne','le','lt','gt','ge']}}, 
                                 {name:'submit_datetime', index:'submit_datetime', width:'40%', align:'center', formatter:formatSubTime, searchoptions:{sopt:['eq','ne','le','lt','gt','ge']}}, 
                                 {name:'state', index:'state', width:'20%', align:'center', searchoptions:{sopt:['eq','ne','le','lt','gt','ge']}}, 
                                 {name:'state_datetime', index:'state_datetime', width:'40%', align:'center', formatter:formatStateTime, searchoptions:{sopt:['eq','ne','le','lt','gt','ge']}}
                               ],
                    rowNum : 10,//一页显示多少条
                    rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
                    pager : '#job-grid-pager',//表格页脚的占位符(一般是div)的id
                    sortname : 'id',//初始化的时候排序的字段
                    sortorder : "desc",//排序方式,可选desc,asc
                    mtype : "get",//向后台请求数据的ajax的类型。可选post,get
                    viewrecords : true,
                    caption : "jobManager",//表格的标题名字
                    autowidth : true,
                    multiselect : true,
                    height : "auto"
                });
                /*创建jqGrid的操作按钮容器*/
                /*可以控制界面上增删改查的按钮是否显示*/
                jQuery("#job-grid-table")
                .jqGrid('filterToolbar',{searchOperators : true})
                .jqGrid('navGrid', '#job-grid-pager', {edit:false, add:false, del:false, view:false, search:false})
                .jqGrid('navButtonAdd','#job-grid-pager', {
                   caption:"Del", 
                   buttonicon:"ui-icon-trash", 
                   onClickButton: delJobModal, 
                   position:"first",
                   title:"删除记录",
                   cursor:"pointer"
                })
                // .jqGrid('navButtonAdd','#job-grid-pager', {
                //    caption:"Edit", 
                //    buttonicon:"ui-icon-pencil", 
                //    onClickButton: editJobModal, 
                //    position:"first",
                //    title:"编辑记录",
                //    cursor:"pointer"
                // })
                // .jqGrid('navButtonAdd','#job-grid-pager', {
                //    caption:"Add", 
                //    buttonicon:"ui-icon-plus", 
                //    onClickButton: addJobModal, 
                //    position:"first",
                //    title:"添加记录",
                //    cursor:"pointer"
                // });
                $("#job-grid-table").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" }); //清除横向滚动条
                $("#job-grid-table").jqGrid('setGridWidth', $("#content ul").width()); // 适应父节点的宽度
            }

            if($ul.eq($t).find('table')[0].id == 'files-grid-table'){
                //filesManager
                jQuery("#files-grid-table").jqGrid({
                    jsonReader : {
                        root: function(str){ 
                                return JSON.parse(str.rows);
                            }
                    },
                    //url : '../public/js/JSONData.json',//组件创建完成之后请求数据的url
                    url : '/adminGetFile', 
                    datatype : "json",//请求数据返回的类型。可选json,xml,txt
                    colNames : [ 'File ID', 'Name', 'size', 'Submit time', 'State','md5'],//jqGrid的列显示名字
                    colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
                                 {name:'id', index:'id', width:'10%', align:'center', align:'center', searchoptions:{sopt:['eq','ne','le','lt','gt','ge']}}, 
                                 {name:'name', index:'name', width:'60%', align:'center', searchoptions:{sopt:['eq','ne','le','lt','gt','ge']}}, 
                                 {name:'size', index:'size', width:'20%', align:'center', searchoptions:{sopt:['eq','ne','le','lt','gt','ge']}}, 
                                 {name:'datetime', index:'datetime', width:'40%', align:'center', searchoptions:{sopt:['eq','ne','le','lt','gt','ge']}}, 
                                 {name:'status', index:'status', width:'10%', align:'center', searchoptions:{sopt:['eq','ne','le','lt','gt','ge']}}, 
                                 {name:'md5', index:'md5', width:'60%', align:'center', sortable: false, searchoptions:{sopt:['eq','ne','le','lt','gt','ge']}}
                               ],
                    rowNum : 10,//一页显示多少条
                    rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
                    pager : '#files-grid-pager',//表格页脚的占位符(一般是div)的id
                    sortname : 'id',//初始化的时候排序的字段
                    sortorder : "desc",//排序方式,可选desc,asc
                    mtype : "get",//向后台请求数据的ajax的类型。可选post,get
                    viewrecords : true,
                    caption : "fileManager",//表格的标题名字
                    autowidth : true,
                    multiselect : true,
                    height : "auto"
                });
                /*创建jqGrid的操作按钮容器*/
                /*可以控制界面上增删改查的按钮是否显示*/
                jQuery("#files-grid-table")
                .jqGrid('filterToolbar',{searchOperators : true})  //设置表内搜索框
                .jqGrid('navGrid', '#files-grid-pager', {edit:false, add:false, del:false, view:false, search:false})
                .jqGrid('navButtonAdd','#files-grid-pager', {
                   caption:"Del", 
                   buttonicon:"ui-icon-trash", 
                   onClickButton: delFileModal, 
                   position:"first",
                   title:"删除记录",
                   cursor:"pointer"
                })
                // .jqGrid('navButtonAdd','#files-grid-pager', {
                //    caption:"Edit", 
                //    buttonicon:"ui-icon-pencil", 
                //    onClickButton: editFileModal, 
                //    position:"first",
                //    title:"编辑记录",
                //    cursor:"pointer"
                // })
                // .jqGrid('navButtonAdd','#files-grid-pager', {
                //    caption:"Add", 
                //    buttonicon:"ui-icon-plus", 
                //    onClickButton: addFileModal, 
                //    position:"first",
                //    title:"添加记录",
                //    cursor:"pointer"
                // });
                $("#files-grid-table").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" }); //清除横向滚动条
                $("#files-grid-table").jqGrid('setGridWidth', $("#content ul").width()); // 适应父节点的宽度
            }

            if($ul.eq($t).find('table')[0].id == 'news-grid-table'){
                //newsManager
                jQuery("#news-grid-table").jqGrid({
                    jsonReader : {
                        root: function(str){ 
                                return JSON.parse(str.rows);
                            }
                    },
                    //url : '../public/js/JSONData.json',//组件创建完成之后请求数据的url
                    url : '/getAllNewsTable', 
                    datatype : "json",//请求数据返回的类型。可选json,xml,txt
                    colNames : [ 'NewsID', 'Title', 'Content', 'Username', 'CreateTime','UpdateTime'],//jqGrid的列显示名字
                    colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
                                 {name:'id', index:'id', width:'10%', align:'center', align:'center', formatter:formatNewsId}, 
                                 {name:'title', index:'title', width:'30%', align:'center' ,sortable: false}, 
                                 {name:'content', index:'content', width:'50%', align:'center' ,sortable: false}, 
                                 {name:'username', index:'username', width:'40%', align:'center' ,sortable: false}, 
                                 {name:'createTime', index:'createTime', width:'40%', align:'center' ,sortable: false, formatter:formatNewsCTime}, 
                                 {name:'updateTime', index:'updateTime', width:'40%', align:'center' ,sortable: false, formatter:formatNewsUTime}
                               ],
                    rowNum : 10,//一页显示多少条
                    rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
                    pager : '#news-grid-pager',//表格页脚的占位符(一般是div)的id
                    sortname : 'id',//初始化的时候排序的字段
                    sortorder : "desc",//排序方式,可选desc,asc
                    mtype : "get",//向后台请求数据的ajax的类型。可选post,get
                    viewrecords : true,
                    caption : "newsManager",//表格的标题名字
                    autowidth : true,
                    multiselect : true,
                    height : "auto"
                });
                /*创建jqGrid的操作按钮容器*/
                /*可以控制界面上增删改查的按钮是否显示*/
                jQuery("#news-grid-table")
                .jqGrid('navGrid', '#news-grid-pager', {edit:false, add:false, del:false, view:false, search:false})
                .jqGrid('navButtonAdd','#news-grid-pager', {
                   caption:"Del", 
                   buttonicon:"ui-icon-trash", 
                   onClickButton: delNewsModal, 
                   position:"first",
                   title:"删除记录",
                   cursor:"pointer"
                })
                // .jqGrid('navButtonAdd','#news-grid-pager', {
                //    caption:"Edit", 
                //    buttonicon:"ui-icon-pencil", 
                //    onClickButton: editNewsModal, 
                //    position:"first",
                //    title:"编辑记录",
                //    cursor:"pointer"
                // })
                .jqGrid('navButtonAdd','#news-grid-pager', {
                   caption:"Add", 
                   buttonicon:"ui-icon-plus", 
                   onClickButton: addNewsModal, 
                   position:"first",
                   title:"添加记录",
                   cursor:"pointer"
                });
                $("#news-grid-table").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" }); //清除横向滚动条
                $("#news-grid-table").jqGrid('setGridWidth', $("#content ul").width()); // 适应父节点的宽度
            }
        })
    }

	//userManager
	jQuery("#grid-table").jqGrid({
		jsonReader : {
            root: function(str){ 
                    return JSON.parse(str.rows);
                }
        },
        //url : '../public/js/JSONData.json',//组件创建完成之后请求数据的url
        url : '/adminGetUser', 
        datatype : "json",//请求数据返回的类型。可选json,xml,txt
        colNames : [ 'UserID','Institution', 'Email', 'UserName', 'Birthday', 'Sex', 'Phone','status'],//jqGrid的列显示名字
        colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
                     {name:'id', index:'id', align:'center', formatter:formatId, width:'10%'}, 
                     {name:'group', index:'group', align:'center', width:'40%'},
                     {name:'email', index:'email', align:'center', width:'40%'},
                     {name:'uname', index:'uname', align:'center', width:'20%'}, 
                     {name:'birthday', index:'birthday', align:'center', width:'40%'}, 
                     {name:'sex', index:'sex', align:'center', width:'10%'}, 
                     {name:'phone', index:'phone', align:'center', width:'40%'}, 
                     {name:'status', index:'status', align:'center', formatter:formatUserStatus, width:'20%'},
                   ],
        rowNum : 9999,//一页显示多少条
        rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
        pager : '#grid-pager',//表格页脚的占位符(一般是div)的id
        sortname : 'id',//初始化的时候排序的字段
        sortorder : "desc",//排序方式,可选desc,asc
        mtype : "get",//向后台请求数据的ajax的类型。可选post,get
        viewrecords : true,
        caption : "userManager",//表格的标题名字
        autowidth : true,
        multiselect : true,
        height : "260"
    });
    /*创建jqGrid的操作按钮容器*/
    /*可以控制界面上增删改查的按钮是否显示*/
    jQuery("#grid-table")
    .jqGrid('navGrid', '#grid-pager', {edit:false, add:false, del:false, view:false, search:false})
    .jqGrid('navButtonAdd','#grid-pager', {
       caption:"Del", 
       buttonicon:"ui-icon-trash", 
       onClickButton: delModal, 
       position:"first",
       title:"删除记录",
       cursor:"pointer"
    })
    .jqGrid('navButtonAdd','#grid-pager', {
       caption:"Send", 
       buttonicon:"ui-icon-mail-closed", 
       onClickButton: sendUserEmail, 
       position:"first",
       title:"发送邮件",
       cursor:"pointer"
    })
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
    
    $("#grid-pager_center").addClass('hide'); //隐藏分页内容
    $("#grid-table").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" }); //清除横向滚动条

    // 调整 jgGrid的宽度
    $(window).on('resize.jqGrid', function() {
        // $(grid_selector).jqGrid('setGridWidth', $(".page-content").width());
        // // 适应page-content的宽度
        $("#grid-table").jqGrid('setGridWidth', $("#content ul").width()); // 适应父节点的宽度
    })

    //发送系统监控邮件
    $("#sendSysEmail").click(function(){
        $.ajax({
            type: 'POST',
            url: '/resSendMail',
            dataType: 'json',
            success: function(res){
                bootbox.alert(res.msg);
            }
        })
    })
    //jquery 日期控件
    $("#cu-birthday").datepicker({
      changeMonth: true,
      changeYear: true
    });
    $("#cu-birthday").datepicker( "option", "dateFormat", "yy-mm-dd");

    //echarts 特效图
    var sourceVal = $("#sourceId option:selected").val();
    var xname = $("#sourceId option:selected").text();
    var legendData = sourceVal.split(',');
    var serverBarChart = echarts.init(document.getElementById('serverBar'));

    $.get('/metrics').done(function(data) {
        if (data.status == 0) {
            var metrics_data = eval('(' + data.content + ')');
            console.log(metrics_data);
            var nodeName = []; //节点数组,代表y轴
            var series_data = [];
            if (metrics_data && metrics_data.length > 0) {
                for (var i = 0; i < metrics_data.length; i++) {
                    nodeName.push(metrics_data[i].nodeName);
                    series_data.push(metrics_data[i].mdetricList);
                }
            }

            loadEchartsImg(serverBarChart,legendData,nodeName,series_data,xname);

            $("#sourceId").change(function(){
                sourceVal = $("#sourceId option:selected").val();
                xname = $("#sourceId option:selected").text();
                legendData = sourceVal.split(',');
                loadEchartsImg(serverBarChart,legendData,nodeName,series_data,xname);

            })
        }
    })

    setInterval(function () {
        $.get('/metrics').done(function(data) {
            if (data.status == 0) {
                var metrics_data = eval('(' + data.content + ')');
                var nodeName = []; //节点数组,代表y轴
                var series_data = [];
                if (metrics_data && metrics_data.length > 0) {
                    for (var i = 0; i < metrics_data.length; i++) {
                        nodeName.push(metrics_data[i].nodeName);
                        series_data.push(metrics_data[i].mdetricList);
                    }
                }

                loadEchartsImg(serverBarChart,legendData,nodeName,series_data,xname);

                $("#sourceId").change(function(){
                    sourceVal = $("#sourceId option:selected").val();
                    xname = $("#sourceId option:selected").text();
                    legendData = sourceVal.split(',');
                    loadEchartsImg(serverBarChart,legendData,nodeName,series_data,xname);

                })
            }
        })
    },60000);

    //echarts 特效图
    // var serverBarChart = echarts.init(document.getElementById('serverBar'));
    // var option = {
    //     tooltip: {
    //         trigger: 'axis',
    //         axisPointer: { // 坐标轴指示器，坐标轴触发有效
    //             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    //         }
    //     },
    //     legend: {
    //         data: []
    //     },
    //     grid: {
    //         left: '3%',
    //         right: '4%',
    //         bottom: '3%',
    //         containLabel: true
    //     },
    //     xAxis: [{
    //         type: 'value'
    //     }],
    //     yAxis: [{
    //         type: 'category',
    //         data: []
    //     }],
    //     series: []
    // };
    // serverBarChart.setOption(option);

    // $.get('/metrics').done(function(data) {
    //     if (data.status == 0) {
    //         var metrics_data = eval('(' + data.content + ')');
    //         //console.log(metrics_data);
    //         var nodeName = []; //节点数组,代表x轴
    //         var legend_data = ['mem_use', 'mem_free', 'disk_use', 'disk_free', 'cpu_use', 'cpu_free']; //legend数组
    //         var series_data = [];
    //         if (metrics_data && metrics_data.length > 0) {
    //             for (var i = 0; i < metrics_data.length; i++) {
    //                 nodeName.push(metrics_data[i].nodeName);
    //                 series_data.push(metrics_data[i].mdetricList);
    //             }
    //         }

    //         serverBarChart.setOption({
    //             legend: {
    //                 data: legend_data
    //             },
    //             yAxis: [{
    //                 type: 'category',
    //                 data: nodeName
    //             }],
    //             series: function() {
    //                 var seriesArr = [];
    //                 for (var k = 0; k < legend_data.length; k++) {
    //                     var seriesObj = {};
    //                     seriesObj.type = 'bar';
    //                     seriesObj.name = legend_data[k];
    //                     if (legend_data[k] == 'mem_use' || legend_data[k] == 'mem_free') {
    //                         seriesObj.stack = 'mem';
    //                     }
    //                     if (legend_data[k] == 'disk_use' || legend_data[k] == 'disk_free') {
    //                         seriesObj.stack = 'disk';
    //                     }
    //                     if (legend_data[k] == 'cpu_use' || legend_data[k] == 'cpu_free') {
    //                         seriesObj.stack = 'cpu';
    //                     }
    //                     seriesObj.data = [];
    //                     for (var j = 0; j < series_data.length; j++) {
    //                         var data = {};
    //                         $.each(series_data[j], function(i, v) {
    //                             data[v.name] = v.val;
    //                         })
    //                         if (legend_data[k] == 'mem_use') {
    //                             seriesObj.data.push((data.mem_total - data.mem_free) / data.mem_total);
    //                         } else if (legend_data[k] == 'mem_free') {
    //                             seriesObj.data.push(data.mem_free / data.mem_total);
    //                         } else if (legend_data[k] == 'disk_use') {
    //                             seriesObj.data.push((data.disk_total - data.disk_free) / data.disk_total);
    //                         } else if (legend_data[k] == 'disk_free') {
    //                             seriesObj.data.push(data.disk_free / data.disk_total);
    //                         } else if (legend_data[k] == 'cpu_use') {
    //                             seriesObj.data.push(data.cpu_system / 100);
    //                         } else {
    //                             seriesObj.data.push((100 - data.cpu_system) / 100);
    //                         }
    //                     }
    //                     seriesArr.push(seriesObj);
    //                 }
    //                 return seriesArr;
    //             }()
    //         });
    //     }
    // })
    
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
    //             name: 'mem use',
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
    //     console.log(data);
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
    //                 text: 'mem use:',
    //             },
    //             series: [{
    //                 // 根据名字对应到相应的系列
    //                 name: 'mem use',
    //                 data: memData
    //             }]
    //         });
    //         diskPieChart.setOption({
    //             title : {
    //                 text: 'disk use:',
    //             },
    //             series: [{
    //                 // 根据名字对应到相应的系列
    //                 name: 'disk use',
    //                 data: diskData
    //             }]
    //         });
    //         cpuPieChart.setOption({
    //             title : {
    //                 text: 'cpu use:',
    //             },
    //             series: [{
    //                 // 根据名字对应到相应的系列
    //                 name: 'cpu use',
    //                 data: cpuData
    //             }]
    //         });
    //     })
    // },60000);
})

function loadEchartsImg(serverBarChart,legendData,nodeName,series_data,xname){
    serverBarChart.setOption({
        title: {
            text: 'Source View',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            left: 'right',
            data: legendData
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            name: xname,
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            name: 'Server node',
            data: nodeName
        },
        series: function(){
            var seriesArr = [];
            for(var k=0; k<legendData.length; k++){
                var seriesObj = {};
                seriesObj.name = legendData[k];
                seriesObj.type = 'bar';
                seriesObj.data = [];
                for (var j = 0; j < series_data.length; j++) {
                    var data = {};
                    $.each(series_data[j], function(i, v) {
                        data[v.name] = v.val;
                    })
                    if (legendData[k] == 'mem_use') {
                        seriesObj.data.push((data.mem_total*1000 - data.mem_free*1000)/1000);
                    } else if (legendData[k] == 'mem_free') {
                        seriesObj.data.push(data.mem_free);
                    } else if (legendData[k] == 'disk_use') {
                        seriesObj.data.push((data.disk_total*1000 - data.disk_free*1000)/1000);
                    } else if (legendData[k] == 'disk_free') {
                        seriesObj.data.push(data.disk_free);
                    } else if (legendData[k] == 'cpu_use') {
                        seriesObj.data.push(data.cpu_system / 100);
                    } else {
                        seriesObj.data.push((100 - data.cpu_system) / 100);
                    }
                }
                seriesArr.push(seriesObj);
            }
            return seriesArr;
        }()
    });
}
//时间戳转日期格式
function timestamp2date(timestamp) {
    var newDate = new Date();
    newDate.setTime(timestamp);
    return newDate.toLocaleString();
}
function formatId(params){
    return "<a href='#' style='color:#0000ff;' onclick='openDetailModal("+params+")'>"+params+"</a>";
}
function formatUserStatus(params){
    if(params == 0){ //有效
        return '<label class="label label-xs label-success">normal</label>';
    }else if(params == 1){ //禁用
        return '<label class="label label-xs label-danger">forbid</label>';
    }else{
        return 'errorData';
    }
}
function formatJobId(params){
    return "<a href='#' style='color:#0000ff;' onclick='openJobDetailModal("+params+")'>"+params+"</a>";
}
function formatNewsId(params){
    return "<a href='#' style='color:#0000ff;' onclick='openNewsDetailModal("+params+")'>"+params+"</a>";
}
function formatSubTime(params){
    return timestamp2date(params);
}
function formatStateTime(params){
    return timestamp2date(params);
}
function formatNewsCTime(params){
     return timestamp2date(params);
}
function formatNewsUTime(params){
     return timestamp2date(params);
}
//删除用户模态框(0为有效，1为无效)
function delModal(){
    delCommon("#grid-table",'/changeUserStatus',1);
}
//删除job
function delJobModal(){
    delCommon("#job-grid-table",'/deleteJob',1);
}
//删除file
function delFileModal(){
    delCommon("#files-grid-table",'/deleteFileAdmin',1);
}
//删除新闻
function delNewsModal(){
    delCommon("#news-grid-table",'/deleteNews',1);
}
//新增新闻信息
function addNewsModal(){
    $("#addNewsModal").modal('show');
}
$("#addNewsBtn").click(function(){
    var addNewsTitle = $("#addNewsTitle").val();
    var addNewsContent = $("#addNewsContent").val();
    $.ajax({
        type: 'POST',
        url: '/addNews',
        dataType: 'json',
        data: {title:addNewsTitle,content:addNewsContent},
        success: function(res){
            if(res.status == 0){
                $("#addNewsModal").modal('hide');
                $("#news-grid-table").trigger("reloadGrid");//局部刷新表格
            }else{
                bootbox.alert(res.msg);
            }
        }
    })
})

//获取nes详情并编辑
function openNewsDetailModal(newsid){
    $("#editNewsModal").modal('show');
    $.ajax({
        type: 'GET',
        url: '/getNews',
        dataType: 'json',
        data: {id:newsid},
        success: function(res){
            var data = eval('(' + res.content + ')');
            $("#editNewsId").val(newsid);
            if(res.status == 0){
                $("#editNewsTitle").val(data.title);
                $("#editNewsContent").val(data.content);
            }
        }
    })
}
$("#editNewsBtn").click(function(){
    var id = $("#editNewsId").val();
    var title = $("#editNewsTitle").val();
    var content = $("#editNewsContent").val();
    $.ajax({
        type: 'POST',
        url: '/editNews',
        dataType: 'json',
        data: {id:id, title:title, content:content},
        success: function(res){
            if(res.status == 0){
                $("#editNewsModal").modal('hide');
                $("#news-grid-table").trigger("reloadGrid");//局部刷新表格
            }else{
                bootbox.alert(res.msg);
            }
        }
    })
})

//获取job详情
function openJobDetailModal(jobid){
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
                if(data[0].files){
                    if(data[0].files.length>0){
                        $.each(data[0].files,function(i,v){
                            if(v!=null){
                                $("#fileModelTable").append("<tr><td>"+v.id+"</td><td><a target='_blank' href='/fileDownload?id="+v.id+"'>"+v.name+"</a></td><td>"+v.path+"</td><td>"+v.size+"</td><td>"+v.md5+"</td><td>"+v.datetime+"</td><td>"+v.status+"</td></tr>");
                            }
                        })
                    }
                }
            }
        }
    });
}

//获取用户详情及修改用户信息
function openDetailModal(userid){
    $("#getUserInfo").modal('show');
    $.ajax({
        type: 'GET',
        url: '/adminGetUserInfo',
        dataType: 'json',
        data: {id: userid},
        success: function(res){
            //console.log(res);
            $("#cu-email").val(res.email);
            $("#cu-uname").val(res.uname);
            $("#cu-birthday").val(res.birthday);
            $("#cu-group").val(res.group);
            $("#cu-sex").val(res.sex);
            $("#cu-phone").val(res.phone);
            $("#cu-location").val(res.location);
            $("#cu-role").val(res.role);
            $("#cu-firstName").val(res.firstName);
            $("#cu-lastName").val(res.lastName);
            $("#cu-status").val(res.status);
        }
    })
}
$("#changeSubmit").click(function(){
    var uname = $("#cu-uname").val();
    var sex = $("#cu-sex").val();
    var birthday = $("#cu-birthday").val();
    var phone = $("#cu-phone").val();
    var group = $("#cu-group").val();
    var location = $("#cu-location").val();
    var role = $("#cu-role").val();
    var firstName = $("#cu-firstName").val();
    var lastName = $("#cu-lastName").val();
    var status = $("#cu-status").val();
    var email = $("#cu-email").val();
    $.ajax({
        type: 'POST',
        url: '/adminUpdateUser',
        dataType: 'json',
        data: {uname:uname,sex:sex,birthday:birthday,phone:phone,group:group,location:location,role:role,firstName:firstName,lastName:lastName,status:status,email:email},
        success: function(res){
            if(res.status == 0){
                $("#getUserInfo").modal('hide');
                $("#grid-table").trigger("reloadGrid");//局部刷新表格
            }else{
                bootbox.alert(res.msg);
            }
        }
    })
})

//给用户发送邮件
function sendUserEmail(){
    var ids = $("#grid-table").jqGrid('getGridParam', 'selarrrow'); //获取多行ID
    if (ids.length>0) {
        $('#sendModal').modal('show');
    }else{
        bootbox.alert("请选择要发送邮件的用户");
    }
}
$("#sendEmailToUser").click(function(){
    var ids = $("#grid-table").jqGrid('getGridParam', 'selarrrow');
    var uids = ids.join(',');
    var title = $("#userTitle").val();
    var content = $("#userContent").val();
    $.ajax({
        type: 'POST',
        url: '/bulkSendMail',
        xhrFields: {
           withCredentials: true
        },
        dataType: 'json',
        data: {uids:uids,title:title,content:content,isAll:false},
        success: function(res){
            if(res.status == 0){
                $('#sendModal').modal('hide');
                $("#grid-table").trigger("reloadGrid");//局部刷新表格
            }
            bootbox.alert(res.msg);
        }
    })
})


//删除方法封装
function delCommon(grid_table,url,status){
    var ids = $(grid_table).jqGrid('getGridParam', 'selarrrow'); //获取多行ID
    if (ids.length>0) {
        ids = ids.join(',');
        //console.log(ids);
        $.ajax({
            type: 'POST',
            url: url,
            xhrFields: {
               withCredentials: true
            },
            data: {id:ids,status:status},
            dataType: 'json',
            success: function(res){
                if(res.status == 0){
                    bootbox.alert("删除成功");
                    $(grid_table).trigger("reloadGrid");//局部刷新
                }else{
                    bootbox.alert(res.msg);
                }
            }
        })
    } else {
        bootbox.alert("请选择要删除的行");
    }
}
//后去所有节点
function getNodes(){
	$.ajax({
		type: 'POST',
		url: '/getNode',
		dataType: 'json',
		data: {},
		success: function(res){
			if(res.status == 0 && res.content){
				var content = eval('('+res.content+')');
				if(content.length>0){
					var nodeHtml = "";
					$("#nodeContent").empty();
					$.each(content,function(i,v){
						//console.log(v);
						var statusStr = "有效";
						if(v.status == 1){
							statusStr = "无效";
						}
						nodeHtml += '<tr>'+
				                        '<td><input type="checkbox" id="checkbox_'+v.id+'" class="singlecheckbox"></td>'+
				                        '<td>'+v.nodeName+'</td>'+
				                        '<td>'+v.ip+'</td>'+
				                        '<td>'+statusStr+'</td>'+
				                    '</tr>';
					})
					$("#nodeContent").append(nodeHtml);
				}
			}
		}
	})
}