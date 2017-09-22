// $(function(){
// 	$("#submit").click(function() {
// 		$.ajax({
// 			async: true,
// 			type: 'POST',
// 	        url: 'http://172.16.9.131/dologin',
// 	        dataType: 'json',
// 	        data:{email : $("#email").val(),password : $("#password").val()},
// 	        success: function(XMLHttpRequest){
// 	        	if(XMLHttpRequest.status == '200') {
// 	        		if(JSON.parse(XMLHttpRequest.responseText).status == '0') {
// 	        			window.location.href ="/pggtool.html";
// 	        		} else {
// 	        			console.error("3");
// 	        		}
// 	        	} else {
// 	        		console.error("1");
// 	        	}
// 	    	},
// 	    	error: function(XMLHttpRequest){
// 	    		console.error("2");
// 	    	}
// 		});
// 	});
// })

$(document).ready(function(){

	var user = $("#email");

	var pwd  = $("#password");

	var checkEmail = $("#checkEmail");

	var checkPwd = $("#checkPwd");

	var myreg = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;  //邮箱正则

	//console.log(pwd.val());
	// if(pwd.val().trim().length>5){
	// 	checkPwd.html('');
	// }
	
	//邮箱校验
	user.bind('blur', function(){
		if(user.val().trim().length>0){
			if(!myreg.test(user.val())){
				checkEmail.html('Please enter a valid email！'); 
			}else{
				checkEmail.html('');
			}
		}
	})

	//密码校验
	pwd.bind('blur', function(){
		if(pwd.val().trim().length>5){
			checkPwd.html('');
		}
	})
	
	//$("#submit").attr('disabled', false);
	

	// var from = $.getUrlParam('from');

	$("#submit").click(function(){
		var flag = true;
		//邮箱校验
		//user.bind('input propertychange', function(){
			if(user.val().trim().length>0){
				if(!myreg.test(user.val())){
					checkEmail.html('Please enter a valid email！'); 
					flag = false;
				}else{
					checkEmail.html('');
				}
			}else{
				checkEmail.html('Please fill in the login email'); 
				flag = false;
			}
		//})

		//密码校验
		//pwd.bind('input propertychange', function(){
			if(pwd.val().trim().length>5){
				checkPwd.html('');
			}else{
				checkPwd.html('Please fill out six or more passwords'); 
				flag = false;
			}
		//})
		if(flag == false){
			return false;
		}

		$.ajax({
			type:"POST",
			url:"/dologin",
			dataType:'json',
			data:{email:user.val(),password:pwd.val()},
			//beforeSend:function(){$(".msg").html("正在登录中...");},
			success:function(data){
				//console.log(data);
				//$("#submit").button('reset');
				if(data.status==0){//success relocation
					//bootbox.alert(data.msg);
					//setCookie("email",user.val()); 
					window.location.href="/pggtools";
			    }else{
			    	bootbox.alert(data.msg);
			    }
			}
		});
	});

	$("#forgetPwd").click(function(){
		window.location.href="/forgetPwd"
	})
});

// 获得url param
// (function($){
// 	$.getUrlParam
// 	= function(name)
// 	{
// 		var reg
// 		= new RegExp("(^|&)"+
// 				name +"=([^&]*)(&|$)");
// 		var r
// 		= window.location.search.substr(1).match(reg);
// 		if (r!=null) return unescape(r[2]); return null;
// 	}
// })(jQuery);

//写cookie
// function setCookie(name,value) 
// { 
//     var Days = 30; 
//     var exp = new Date(); 
//     exp.setTime(exp.getTime() + Days*24*60*60*1000); 
//     document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
// }