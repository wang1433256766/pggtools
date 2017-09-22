$(function(){
	var myreg = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;  //邮箱正则
	var email = "";
	//忘记密码
	$("#submit").click(function(){
		email = $("#email-email").val();
		var verification_code = $("#email-verificationCode").val();
		var password= $("#email-pwd").val();
		var repwd = $("#email-repwd").val();
		if(email.trim().length>0){
			if(!myreg.test(email)){
				alert('请输入有效的邮箱格式！');
				return false;
			}
		}else{
			alert('请填写邮箱');
			return false;
		}
		if(password.length < 6){
			alert('密码必须大于六位');
			return false;
		}
		if(password != repwd){
			alert('两次必须相同');
			return false;
		}
		$.ajax({
			url: '/changePwd',
			type: 'POST',
			dataType: 'json',
			data: {email: email,verificationCode:verification_code,password:password}
		})
		.done(function(res) {
			if(res.status == 0){
				//setCookie("email",$("$email-email").val()); 
				window.location.href="./login";
			}
			alert(res.msg);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	})

	//修改密码发送验证码
	$("#email-getCode").click(function(){
		email = $("#email-email").val();
		if(email.trim().length>0){
			if(!myreg.test(email)){
				alert('请输入有效的邮箱格式！');
				return false;
			}
		}else{
			alert('请填写邮箱');
			return false;
		}
		$.ajax({
			type: 'POST',
			url: '/preChangePwd',
			dataType: 'json',
			data: {email:email},
			success: function(res){
				$.toaster({ priority : 'success', title : 'Notice', message : 'have send!'});
			}
		})
	})

})


