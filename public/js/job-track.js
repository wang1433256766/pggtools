$(function(){
	//获取url参数
	/*
	encodeURI()是Javascript中真正用来对URL编码的函数
	eg:
		编码：	Javascript:encodeURI("春节");
		解码:	Javascript:decodeURI("%E6%98%A5%E8%8A%82");
	*/
	(function ($) {
        $.getUrlParam = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]); return null;
        }
    })(jQuery);

    var jobid = $.getUrlParam('jobid');
    var from = $.getUrlParam('from');

    var $li = $(".steps li");
    $.ajax({
        async:false, //同步
        type: 'GET',
        url: '/getAllJob',
        data: {id: jobid,from:from},
        dataType: 'json',
        success: function(res){
            var data = JSON.parse(res.content);
            //console.log(data);
            if(res.status == 0){
                $('#jobidmodel').text(data[0].id);
                $('#jobnamemodel').text(data[0].name);
                $('#jobpipelinemodel').text(data[0].pipeline);
                $('#jobcommandmodel').text(data[0].command);
                //$('#jobstatusmodel').text(data[0].state);
                $('#jobsubtimemodel').text(timestamp2date(data[0].submit_datetime));
                $('#jobstatetimemodel').text(timestamp2date(data[0].state_datetime));
                $("#fileModelTable").empty();
                //console.log(data[0].files.length);
                if(data[0].files && data[0].files.length>0){
                    $.each(data[0].files,function(i,v){
                        if(v!=null){
                            var typeStr = "生成的文件";
                            if(v.type==0){
                                typeStr = "上传的文件";
                            }
                            $("#fileModelTable").append("<tr>"+
                            	"<td>"+v.id+"</td>"+
                            	"<td><a target='_blank' href='/fileDownload?id="+v.id+"'>"+v.name+"</a></td>"+
                            	"<td>"+v.path+"</td><td>"+v.size+"</td>"+
                            	"<td>"+v.md5+"</td><td>"+v.datetime+"</td>"+
                            	"<td>"+typeStr+"</td>"+
                            	"</tr>");
                        }
                    })
                }
                $(".steps li").removeClass('active');
                if(data[0].state == 'waitting'){   //queue   running    finished
                	$($li[0]).addClass('active');
                } else if(data[0].state == 'queue'){
                    $($li[0]).addClass('active');
                    $($li[1]).addClass('active');
                } else if(data[0].state == 'running'){
                    $($li[0]).addClass('active');
                    $($li[1]).addClass('active');
                    $($li[2]).addClass('active');
                }else{
                    $li.addClass('active');
                }
            }
        }
    });

    //获取Detail表中的数据
    $.ajax({
        type: 'GET',
        url: '/getDetail',
        dataType: 'json',
        data: {jobId: jobid},
        success: function(res){
            if(res.status == 0){
                var detailContent = eval('('+res.content+')');
                if(detailContent && detailContent.length>0){
                    $($li[3]).removeClass('active');
                    $($li[4]).removeClass('active');
                    $($li[5]).removeClass('active');
                    if(detailContent.length==1){
                        $($li[3]).addClass('active');
                    }else if(detailContent.length==2){
                        $($li[3]).addClass('active');
                        $($li[4]).addClass('active');
                    }else{
                        $($li[3]).addClass('active');
                        $($li[4]).addClass('active');
                        $($li[5]).addClass('active');
                    }
                }
            }
        }
    })
})

function timestamp2date(timestamp) {
	var newDate = new Date();
	newDate.setTime(timestamp);
	return newDate.toLocaleString();
}