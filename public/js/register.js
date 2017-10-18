$(function(){

	var checkFname = $("#checkFname");
	var checkLname = $("#checkLname");
	var checkUname = $("#checkUname");
	var checkEmail = $("#checkEmail");
	var checkIns = $("#checkIns");
	var checkAddr = $("#checkAddr");
	var checkPwd = $("#checkPwd");
	var checkReped = $("#checkReped");

	var myreg = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,4}$/;  //严格的邮箱正则

	$("#fname").bind('blur', function(){
		if($("#fname").val().trim().length>0){
			checkFname.html('');
		}
	})
	$("#lname").bind('blur', function(){
		if($("#lname").val().trim().length>0){
			checkLname.html('');
		}
	})
	$("#uname").bind('blur', function(){
		if($("#uname").val().trim().length>0){
			checkUname.html('');
		}
	})
	$("#institution").bind('blur', function(){
		if($("#institution").val().trim().length>0){
			checkIns.html('');
		}
	})
	$("#address").bind('blur', function(){
		if($("#address").val().trim().length>0){
			checkAddr.html('');
		}
	})

	//邮箱校验
	$("#email").bind('blur', function(){
		if($("#email").val().trim().length>0){
			if(!myreg.test($("#email").val())){
				checkEmail.html('Please enter a valid email！');
			}else{
				checkEmail.html('');
			}
		}
	})
	//密码校验
	$("#pwd").bind('blur', function(){
		if($("#pwd").val().trim().length>5){
			checkPwd.html('');
		}
	})
	//确认密码校验
	$("#repwd").bind('blur', function(){
		if($("#repwd").val().trim().length>0){
			if($("#repwd").val() != $("#pwd").val()){
				checkReped.html('Two passwords must be consistent!');
			}else{
				checkReped.html('');
			}
		}
	})

	$("#submit").click(function(){
		var flag = true;
		var first_name = $("#fname").val();
		var last_name = $("#lname").val();
		var username = $("#uname").val();
		var email = $("#email").val();
		var institution = $("#institution").val();
		var address = $("#address").val();
		var pwd = $("#pwd").val();
		var repwd = $("#repwd").val();

		//$("#fname").bind('input propertychange', function(){
			//console.log($("#fname").val().trim().length);
			if(first_name.trim().length>0){
				checkFname.html('');
			}else{
				checkFname.html('Can\'t be empty');
				flag = false;
			}
		//})
		//$("#lname").bind('input propertychange', function(){
			if(last_name.trim().length>0){
				checkLname.html('');
			}else{
				checkLname.html('Can\'t be empty');
				flag = false;
			}
		//})
		//$("#uname").bind('input propertychange', function(){
			if(username.trim().length>0){
				checkUname.html('');
			}else{
				checkUname.html('Please fill in the username');
				flag = false;
			}
		//})
		//$("#institution").bind('input propertychange', function(){
			if(institution.trim().length>0){
				checkIns.html('');
			}else{
				checkIns.html('Can\'t be empty');
				flag = false;
			}
		//})
		//$("#address").bind('input propertychange', function(){
			if(address.trim().length>0){
				checkAddr.html('');
			}else{
				checkAddr.html('Please fill in the address');
				flag = false;
			}
		//})

		//邮箱校验
		//$("#email").bind('input propertychange', function(){
			if(email.trim().length>0){
				if(!myreg.test(email)){
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
		//$("#pwd").bind('input propertychange', function(){
			if(pwd.trim().length>5){
				checkPwd.html('');
			}else{
				checkPwd.html('Please fill out six or more passwords');
				flag = false;
			}
		//})
		//确认密码校验
		//$("#repwd").bind('input propertychange', function(){
			if(repwd.trim().length>0){
				if(repwd != pwd){
					checkReped.html('Two passwords must be consistent!');
					flag = false;
				}else{
					checkReped.html('');
				}
			}else{
				checkReped.html('Please fill in the confirmation password');
				flag = false;
			}
		//})
		if(flag == false){
			return false;
		}
		
		$.ajax({
			type: 'POST',
			url: '/doregiste',
			dataType: 'json',
			data: {email:email,firstName:first_name,lastName:last_name,uname:username,group:institution,location:address,password:pwd},
			success: function(data){
				if(data.status == 0){
					// if(confirm(data.msg+',Whether to login directly?')){
					// 	setCookie("email",email); 
					// 	window.location.href="./pggtool.html";
					// }else{
						bootbox.alert(data.msg);
						window.location.href="./login.html"
					//}
				}else{
					bootbox.alert(data.msg);
				}
			}
		})
	})
})

//写cookie
function setCookie(name,value) 
{ 
    var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
}