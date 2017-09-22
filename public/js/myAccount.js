$(function(){
	var email = "", uname = "", sex = "", birthday="", phone="", group="";
	//jquery 日期控件
	$("#birthday").datepicker({
      changeMonth: true,
      changeYear: true
    });
    $("#birthday").datepicker( "option", "dateFormat", "yy-mm-dd");
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
		})
	}

	$.ajax({
		async: false,
		url: '/getUserInfo',
		type: 'get',
		dataType: 'json'
		//data: {param1: 'value1'},
	})
	.done(function(res) {
		if(res.email || res.email!=''){
			$("#my-mail").text(res.email);
			$("#self-email").val(res.email);
			$("#pwd-email").val(res.email);
			$("#email-email").val(res.email);
			email = res.email;
		}else{
			$("#my-mail").text('');
			$("#self-email").val('');
			$("#pwd-email").val('');
			$("#email-email").val('');
		}
		if(res.uname || res.uname!=''){
			$("#my-uname").text(res.uname);
			$("#uname").val(res.uname);
			uname = res.uname;
		}else{
			$("#my-uname").text('');
			$("#uname").val('');
		}
		if(res.sex || res.sex!=''){
			if(res.sex == 'U'){
				$("#my-sex").text('Unknow');
				$("#sex").val('U');
				sex = 'U';
			}else if(res.sex == 'M'){
				$("#my-sex").text('Male');
				$("#sex").val('M');
				sex = 'M';
			}else if(res.sex == 'F'){
				$("#my-sex").text('Female');
				$("#sex").val('F');
				sex = 'F';
			}else{
				$("#my-sex").text(res.sex);
				$("#sex").val(res.sex);
				sex = res.sex;
			}
		}else{
			$("#my-sex").text('');
			$("#sex").val('');
		}
		if(res.birthday || res.birthday!=''){
			$("#my-birthday").text(res.birthday);
			$("#birthday").val(res.birthday);
			birthday = res.birthday;
		}else{
			$("#my-birthday").text('');
			$("#birthday").val('');
		}
		if(res.phone || res.phone!=''){
			$("#my-phone").text(res.phone);
			$("#phone").val(res.phone);
			phone = res.phone;
		}else{
			$("#my-phone").text('');
			$("#phone").val('');
		}
		if(res.group || res.group!=''){
			$("#my-group").text(res.group);
			$("#group").val(res.group);
			group = res.group;
		}else{
			$("#my-group").text('');
			$("#group").val('');
		}
		if(res.createTime || res.createTime!=''){
			$("#my-createtime").text(timestamp2date(res.createTime));
		}else{
			$("#my-createtime").text('');
		}
		if(res.updateTime || res.updateTime!=''){
			$("#my-updatetime").text(timestamp2date(res.updateTime));
		}else{
			$("#my-updatetime").text('');
		}
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
	//修改个人信息
	$("#submit").click(function(){
		if(!checkContactNumber("#phone")){
			return false;
		}
		var uname = $("#uname").val();
		var birthday = $("#birthday").val();
		var sex = $("#sex").val();
		var phone = $("#phone").val();
		var group = $("#group").val();
		$.ajax({
			url: '/editInfo',
			type: 'POST',
			dataType: 'json',
			data: {uname:uname,birthday:birthday,sex:sex,phone:phone,group:group}
		})
		.done(function(res) {
			if(res.status == 0){
				window.location.reload();
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

	//修改密码
	$("#pwd-submit").click(function(){
		var verificationCode = $("#pwd-verificationCode").val();
		var password= $("#pwd-pwd").val();
		var repwd = $("#pwd-repwd").val();
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
			data: {email: email,verificationCode:verificationCode,password:password}
		})
		.done(function(res) {
			alert(res.msg);
			if(res.status == 0){
				window.location.reload();
			}
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	})

	//修改邮箱
	$("#email-submit").click(function(event) {
		var myreg = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;  //邮箱正则
		var email = $("#email-email").val();
		var password = $("#email-pwd").val();
		var repwd = $("#email-repwd").val();
		var verificationCode = $("#email-verificationCode").val();
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
			url: '/changeEmail',
			type: 'POST',
			dataType: 'json',
			data: {email: email,password:password,verificationCode:verificationCode},
		})
		.done(function(res) {
			alert(res.msg);
			if(res.status == 0){
				window.location.href = "./login";
			}
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});

	//修改密码发送验证码
	$("#pwd-getCode").click(function(event) {
		/* Act on the event */
		$.ajax({
			url: '/preChangePwd',
			type: 'POST',
			dataType: 'json',
			data: {email: email}
		})
		.done(function() {
			$.toaster({ priority : 'success', title : 'Notice', message : 'have send!'});
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});
	//修改邮箱发送验证码
	$("#email-getCode").click(function(event) {
		/* Act on the event */
		$.ajax({
			url: '/getCodeForChangeEmail',
			type: 'POST',
			dataType: 'json',
			data: {email: email}
		})
		.done(function() {
			$.toaster({ priority : 'success', title : 'Notice', message : 'have send!'});
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});

	//重置
	$("#reset").click(function(event) {
		/* Act on the event */
		$("#uname").val(uname);
		$("#birthday").val(birthday);
		$("#sex").val(sex);
		$("#phone").val(phone);
		$("#group").val(group);
	});
	$("#pwd-reset").click(function(event) {
		/* Act on the event */
		$("#pwd-verificationCode").val('');
		$("#pwd-pwd").val('');
		$("#pwd-repwd").val('');
	});
	$("#email-reset").click(function(event) {
		/* Act on the event */
		$("#email-email").val(email);
		$("#email-pwd").val('');
		$("#email-repwd").val('');
		$("#email-verificationCode").val('');
	});
	
});

//时间戳转换为日期格式
function timestamp2date(timestamp) {
	var newDate = new Date();
	newDate.setTime(timestamp);
	return newDate.toLocaleString();
}
//手机号码和座机的校验
function checkContactNumber(mobile_id) {
    $("#error").css("display", "none");
    var mobile = $.trim($(mobile_id).val());
    var isMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
    var isPhone = /^(?:(?:0\d{2,3})-)?(?:\d{7,8})(-(?:\d{3,}))?$/;;
    var error = "<label id=\"error\" class=\"validate_input_error\">请正确填写电话号码，例如:13511111111或010-11111111</label>";
    //如果为1开头则验证手机号码
    if (mobile.substring(0, 1) == 1) {
        if (!isMobile.exec(mobile) && mobile.length != 11) {
            $(mobile_id).after(error);
            $(mobile_id).focus();
            return false;
        }
    }
    //如果为0开头则验证固定电话号码
    else if (mobile.substring(0, 1) == 0) {
        if (!isPhone.test(mobile)) {
            $(mobile_id).after(error);
            $(mobile_id).focus();
            return false;
        }
    }
    //否则全部不通过
    else {
        $(mobile_id).after(error);
        $(mobile_id).focus();
        return false;
    }
    return true;
}