$(function(){
    var rightContent = '<a href="/login">login</a> | <a href="/register">register</a>';
    var rightContent1 = '<li><a href="/login">login</a></li><li><a href="/register">register</a></li>';
                
    //var username = getCookie("email");
    $.get('/isLogin',function(res){
        //console.log(res);
        if(res.status == 0){
            var data = eval('(' + res.content + ')');
            $("#email").html(data.username);
            $("#email1").html(data.username);
            if(data.role==2){
                $("#userManager").removeClass('hide');
            }else{
                $("#userManager").addClass('hide');
            }
        }else{
            $(".login").html('');
            $(".login").html(rightContent);
            $(".sed-nav ul").html('');
            $(".sed-nav ul").html(rightContent1);
        }
    })

    $("#navuserinfo").hover(function(){
        $(".sed-nav").css('display','block');
    })
    $("#navuserinfo").mouseleave(function(){
        $(".sed-nav").css('display','none');
    })

    //个人中心
    $("#email,#email1").click(function(event) {
    	/* Act on the event */
    	window.location.href = './myAccount';
    });

    //登出
    $("#logout,#logout1").click(function(){
         $.get('/logout',function (data) {
            //delCookie("email");
            window.location.href = './login';
         })
    })
    
    var urlName = window.location.pathname;
    //console.log(urlName);
    if(urlName.indexOf('pggtool')>0){
        $("#pggtool").addClass("active");
    }else if(urlName.indexOf('imputation')>0){
        $("#imputation").addClass("active");
    }else if(urlName.indexOf('gwas')>0){
        $("#gwas").addClass("active");
    }else if(urlName.indexOf('conversion')>0){
        $("#conversion").addClass("active");
    }else if(urlName.indexOf('illustration')>0){
        $("#illustration").addClass("active");
    }else if(urlName.indexOf('aggregation')>0){
        $("#aggregation").addClass("active");
    }else if(urlName.indexOf('userMgn')>0){
        $("#userManager").addClass('active');
    }

    // tabActive("pggtool");
    // tabActive("imputation");
    // tabActive("gwas");
    // tabActive("conversion");
    // tabActive("illustration");
    // tabActive("aggregation");
});

// function tabActive(id){
//     $("#"+id).click(function(){
//         $("navName").find('li').removeClass('active');
//         $("#"+id).addClass('active');
//     })
// }

//读取cookie
function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]); 
    else 
        return null; 
}

//删除cookies 
function delCookie(name) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
}