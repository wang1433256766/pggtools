<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>myAccount</title>
	<link rel="stylesheet" href="../public/css/bootstrap.min.css">
	<link rel="stylesheet" href="../public/css/jquery-ui.min.css">
	<link rel="stylesheet" href="../public/css/nav.css">
	<link rel="stylesheet" href="../public/css/myAccount.css">
</head>
<body>
	<jsp:include  page="nav.jsp"/>
    <br><br>
	<div class="wrap">
		<div id="leftmain">
			<div class="self-message">个人信息</div>
			<div class="self-content"><b>Email:</b>&nbsp;<span id="my-mail"></span></div>
			<div class="self-content"><b>Uname:</b>&nbsp;<span id="my-uname"></span></div>
			<div class="self-content"><b>Sex:</b>&nbsp;<span id="my-sex"></span></div>
			<div class="self-content"><b>Birthday:</b>&nbsp;<span id="my-birthday"></span></div>
			<div class="self-content"><b>Phone:</b>&nbsp;<span id="my-phone"></span></div>
			<div class="self-content"><b>Group:</b>&nbsp;<span id="my-group"></span></div>
			<div class="self-content"><b>CreateTime:</b>&nbsp;<span id="my-createtime"></span></div>
			<div class="self-content"><b>UpdateTime:</b>&nbsp;<span id="my-updatetime"></span></div>
		</div>
		<div id="rightmain">
			<div id="outer">
			    <ul id="tab">
			        <li class="current">修改个人信心</li>
			        <li>修改密码</li>
			        <li>修改邮箱</li>
			    </ul>
			    <div id="content">
			        <ul style="display:block;">
			        	<div class="input-group">
							<span class="input-group-addon sizing-addon2">邮箱</span>
							<input type="text" id="self-email" disabled class="form-control" placeholder="Enter email">
						</div>
						<br/>
						<div class="input-group">
							<span class="input-group-addon sizing-addon2">用户名</span>
							<input type="text" id="uname" class="form-control" placeholder="Enter uname">
						</div>
						<br/>
						<div class="input-group ">
							<span class="input-group-addon sizing-addon2">生  日</span>
							<input type="text" id="birthday" class="form-control" placeholder="Enter birthday">
						</div>
						<br/>
						<div class="input-group ">
							<span class="input-group-addon sizing-addon2">性  别</span>
							<select name="" id="sex" class="form-control">
								<option value="U" selected>Unknow</option>
								<option value="M">Male</option>
								<option value="F">Female</option>
							</select>
							<!-- <input type="text" id="sex" class="form-control" placeholder="Enter sex"> -->
						</div>
						<br/>
						<div class="input-group ">
							<span class="input-group-addon sizing-addon2">联系方式</span>
							<input type="text" id="phone" class="form-control" placeholder="Enter phone">
						</div>
						<br/>
						<div class="input-group ">
							<span class="input-group-addon sizing-addon2">所属组</span>
							<input type="text" id="group" class="form-control" placeholder="Enter group">
						</div><br>
						<center><button class="btn btn-md btn-primary" id="submit">确定</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-md btn-default" id="reset">重置</button></center>
			        </ul>
			        <ul>
			            <div class="input-group">
							<span class="input-group-addon sizing-addon2">邮箱</span>
							<input type="text" id="pwd-email" disabled class="form-control" placeholder="Enter email">
						</div>
						<br/>
						<div class="input-group ">
							<span class="input-group-addon sizing-addon2">验证码</span>
							<input type="text" id="pwd-verificationCode" class="form-control" placeholder="Enter verificationCode" style="width:60%;">
							<button id="pwd-getCode" class="btn btn-md btn-primary form-control " style="width:40%;">获取验证码</button>
						</div>
						<br/>
						<div class="input-group ">
							<span class="input-group-addon sizing-addon2">密码</span>
							<input type="password" id="pwd-pwd" class="form-control" placeholder="Enter password">
						</div>
						<br/>
						<div class="input-group ">
							<span class="input-group-addon sizing-addon2">确认密码</span>
							<input type="password" id="pwd-repwd" class="form-control" placeholder="Sure password">
						</div><br>
						<center><button class="btn btn-md btn-primary" id="pwd-submit">确定</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-md btn-default" id="pwd-reset">重置</button></center>
			        </ul>
			        <ul>
			           <div class="input-group">
							<span class="input-group-addon sizing-addon2">邮箱</span>
							<input type="text" id="email-email" class="form-control" placeholder="Enter uname">
						</div>
						<br/>
						<div class="input-group ">
							<span class="input-group-addon sizing-addon2">验证码</span>
							<input type="text" id="email-verificationCode" class="form-control" placeholder="Enter verificationCode" style="width:60%;">
							<button id="email-getCode" class="btn btn-md btn-primary form-control"  style="width:40%;">获取验证码</button>
						</div>
						<br/>
						<div class="input-group ">
							<span class="input-group-addon sizing-addon2">密码</span>
							<input type="password" id="email-pwd" class="form-control" placeholder="Enter password">
						</div>
						<br/>
						<div class="input-group ">
							<span class="input-group-addon sizing-addon2">确认密码</span>
							<input type="password" id="email-repwd" class="form-control" placeholder="Sure password">
						</div><br>
						<center><button class="btn btn-md btn-primary" id="email-submit">确定</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-md btn-default" id="email-reset">重置</button></center>
			        </ul>
			    </div>
			</div>

		</div>
	</div>

	<script src="../public/js/jquery.min.js"></script>
	<script src="../public/js/jquery.toaster.js"></script>
	<script src="../public/js/jquery-ui.min.js"></script>
	<script src="../public/js/nav.js"></script>
	<script src="../public/js/myAccount.js"></script>
</body>
</html>
