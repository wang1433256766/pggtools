<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="../public/css/bootstrap.min.css">
	<link rel="stylesheet" href="../public/css/register.css"> 
	<title>Login</title>
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
			<div class="right-input"><img src="../public/images/register_03.png">&nbsp;&nbsp;<input type="text" class="input-text" placeholder="First name" id="fname"></div><div id="checkFname" class="checkInput"><!-- 不能为空 --></div>
			<div class="right-input"><img src="../public/images/register_06.png">&nbsp;&nbsp;<input type="text" class="input-text" placeholder="Last name" id="lname"></div><div id="checkLname" class="checkInput"><!-- 不能为空 --></div>
			<div class="right-input"><img src="../public/images/register_08.png">&nbsp;&nbsp;<input type="text" class="input-text" placeholder="Enter preferred user name" id="uname" maxlength="30"></div><div id="checkUname" class="checkInput"><!-- 请填写用户名 --></div>
			<div class="right-input"><img src="../public/images/register_10.png">&nbsp;&nbsp;<input type="text" class="input-text" placeholder="Email" id="email"></div><div id="checkEmail" class="checkInput"><!-- 请填写登录邮箱 --></div>
			<div class="right-input"><img src="../public/images/register_12.png">&nbsp;&nbsp;<input type="text" class="input-text" placeholder="Institution" id="institution"></div><div id="checkIns" class="checkInput"><!-- 不能为空 --></div>
			<div class="right-input"><img src="../public/images/register_14.png">&nbsp;&nbsp;<input type="text" class="input-text" placeholder="Address" id="address"></div><div id="checkAddr" class="checkInput"><!-- 请填写地址 --></div>
			<div class="right-input"><img src="../public/images/register_16.png">&nbsp;&nbsp;<input type="password" class="input-text" placeholder="password" id="pwd"></div><div id="checkPwd" class="checkInput"><!-- 请填写六位及以上的密码 --></div>
			<div class="right-input"><img src="../public/images/register_16.png">&nbsp;&nbsp;<input type="password" class="input-text" placeholder="password" id="repwd"></div><div id="checkReped" class="checkInput"><!-- 两次密码不一致 --></div>
			<input type="button" class="input-btn" value="Submit" id="submit">
			<p class="intro">The account can also be used for other databases or tools in <label style="color:#F79440;">PGGSuite</label>.</p>
		</div>
	</div>
	<div class="footer">
		CAS-MAP Partner Institute for Computational Blology [PICB]. Copyright &copy; 2015-2017
	</div>
	<script src="../public/js/jquery.min.js"></script>
	<script src="../public/js/bootstrap.min.js"></script>
	<script src="../public/js/bootbox.min.js"></script>
	<script src="../public/js/particles.min.js"></script>
	<script src="../public/js/common.js"></script>
	<script src="../public/js/register.js"></script>
</body>
</html>