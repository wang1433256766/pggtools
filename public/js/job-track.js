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

    $.ajax({
        //async:false, //同步
        //type: 'post',
        url: '/getAllJob',
        data: {id: jobid,from:from},
        dataType: 'json',
        success: function(res){
            var data = JSON.parse(res.content);
            console.log(data);
            if(res.status == 0){
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
                            $("#fileModelTable").append("<tr>"+
                            	"<td>"+v.id+"</td>"+
                            	"<td><a target='_blank' href='/fileDownload?id="+v.id+"'>"+v.name+"</a></td>"+
                            	"<td>"+v.path+"</td><td>"+v.size+"</td>"+
                            	"<td>"+v.md5+"</td><td>"+v.datetime+"</td>"+
                            	"<td>"+v.status+"</td>"+
                            	"</tr>");
                        }
                    })
                }
            }
        }
    });
})

function timestamp2date(timestamp) {
	var newDate = new Date();
	newDate.setTime(timestamp);
	return newDate.toLocaleString();
}