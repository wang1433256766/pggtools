<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>changePassword</title>
	<link rel="stylesheet" href="../public/css/bootstrap.min.css">
	<link rel="stylesheet" href="../public/css/forgetPwd.css">
</head>
<body>
	<div id="particles-js"></div> 
	<div class="wrap">
		<div class="title">PGG</div>
		<div class="left-logo">
			<div class="logo"><p>NAME</p></div>
			<div class="logo"><p>NAME</p></div>
			<div class="logo"><p>NAME</p></div>
			<div class="logo"><p>NAME</p></div>
		</div>
		<div class="right-opt">
			<div class="row">
				<div class="col-md-6 login"><a href="/login">Login</a></div>
				<div class="col-md-6 register"><a href="/register">Register</a></div>
			</div>
			<div class="right-input"><img src="../public/images/register_10.png">&nbsp;&nbsp;<input type="text" class="input-text" placeholder="Enter Email" id="email-email"></div>
			<div class="right-input"><img src="../public/images/forgetpwd_03.png">&nbsp;&nbsp;<input type="text" class="input-text" placeholder="Enter verificationCode" id="email-verificationCode" style="width:214px;"><button id="email-getCode" type="button" class="btn btn-md btn-primary" style="width:100px;height:50px;margin-left:20px;">获取验证码</button></div>
			<div class="right-input"><img src="../public/images/register_16.png">&nbsp;&nbsp;<input type="password" class="input-text" placeholder="Enter password" id="email-pwd"></div>
			<div class="right-input"><img src="../public/images/register_16.png">&nbsp;&nbsp;<input type="password" class="input-text" placeholder="Enter password" id="email-repwd"></div>
			<input type="button" class="input-btn" value="Submit" id="submit">
			<p class="intro">The account can also be used for other databases or tools in <label style="color:#F79440;">PGGSuite</label>.</p>
		</div>
	</div>
	<div class="footer">
		CAS-MAP Partner Institute for Computational Blology [PICB]. Copyright &copy; 2015-2017
	</div>
	<script src="../public/js/jquery.min.js"></script>
	<script src="../public/js/jquery.toaster.js"></script>
	<script src="../public/js/particles.min.js"></script>
	<script src="../public/js/common.js"></script>
	<script src="../public/js/forgetPwd.js"></script>
</body>
</html>