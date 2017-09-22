$(function(){
	var performencehtml="",genomeshtml="",tablehtml="",newshtml="";
    var totalSum = 0;
	$.ajax({
        url: '/metrics',
        type: 'GET',
        data: '',
        dataType: 'json',
    	success: function(res){
    		//console.log(res.content);
            var contentData = eval("(" + res.content + ")"); //string to json
            //console.log(typeof contentData);
    		//console.log(contentData);
            if(contentData && contentData.length>0){
        		for(var i=0;i<contentData.length;i++){
        			if(contentData[i].name == 'mem_total' || contentData[i].name == 'disk_total' || contentData[i].name == 'cpu_num'){
        				performencehtml += "<p>"+contentData[i].name+":"+contentData[i].val+contentData[i].units+"</p>";
        			}
        		}
            }
            // $.each(contentData, function(i, v){
            //     console.log(v);
            // })
    		$("#performence").html(performencehtml);
    	}
	});

    $.ajax({
        url: '/getimputRefPanel',
        type: 'GET',
        data: '',
        dataType: 'json',
        success: function(res){
            var contentData = eval("(" + res.content + ")"); //string to json
            $.each(contentData, function(i, v){
                //console.log(v.sample_nu);
                totalSum += v.sample_nu;
                genomeshtml += "<p>"+v.sample_nu+" "+v.name+"</p>";
                tablehtml += "<tr><td>"+v.name+"</td><td>"+v.population_nu+"</td><td>"+v.sample_nu+"</td><td>"+v.desc+"</td></tr>";
            });
            genomeshtml = "<p>"+totalSum+" in total</p>"+genomeshtml;
            $("#genomes").html(genomeshtml);
            $("#panel table tbody").html(tablehtml);
        }
    });
    $.ajax({
        url: '/getAllNews',
        //type: 'GET',
        data: '',
        dataType: 'json',
        success: function(res){
            var contentData = eval("(" + res.content + ")"); //string to json
            $.each(contentData, function(i, v){
                //console.log(v.sample_nu);
                newshtml += "<p>"+v.title+"</p >";
            });
            $("#news").html(newshtml);
        }
    });

    //当滚动屏幕的高度超过500时显示锚链接
    $(window).bind("scroll",function() {
        var scrTop =  $(window).scrollTop() //滚动条距离顶端值 
        var $a = $('.mao-part a');
        for(var i=0; i<$a.length;i++){
            //console.log($($a[i].href.substring($a[i].href.indexOf('#'))).offset().top);
            if( $($a[i].href.substring($a[i].href.indexOf('#'))).offset().top <= scrTop){
                $('.mao-part li').attr('id',"");
                $($('.mao-part li')[i]).attr('id',"mao-style");
            }
        }
        //决定什么时候出现悬浮锚
        if ($(document).scrollTop() >= $('#format').offset().top) {  
            $(".mao-part").css('display','block');
        }else{
            $(".mao-part").css('display','none');
        }
    })

    //点击锚时设置被点击锚点的样式
    $('.mao-part li').click(function(){
        $('.mao-part li').attr('id',"");
        $(this).attr('id',"mao-style");
    });

    // var $backToTopTxt = "返回顶部", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body"))
    //     .text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
    //         $("html, body").animate({ scrollTop: 0 }, 120);
    // }), $backToTopFun = function() {
    //     var st = $(document).scrollTop(), winh = $(window).height();
    //     (st > 0)? $backToTopEle.show(): $backToTopEle.hide();    
    //     //IE6下的定位
    //     if (!window.XMLHttpRequest) {
    //         $backToTopEle.css("top", st + winh - 166);    
    //     }
    // };
    // $(window).bind("scroll", $backToTopFun);
    // $(function() { $backToTopFun(); });
	
});


