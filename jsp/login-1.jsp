<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="../public/css/bootstrap.min.css">
	<link rel="stylesheet" href="../public/css/login.css"> 
	<title>Login</title>
</head>
<body>
	<div class="wrapper">
		<ul class="bg-bubbles">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
	<!-- <canvas id="background"></canvas> -->  
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
			<div class="right-input"><img src="../public/images/register_08.png">&nbsp;&nbsp;<input type="text" class="input-text" placeholder="E-mail" id="email"></div><div id="checkEmail" class=""></div>
			<div class="right-input"><img src="../public/images/register_16.png">&nbsp;&nbsp;<input type="password" class="input-text" placeholder="password" id="password"></div><div id="checkPwd"></div><br><br>
			<p class="forgetPwd"><a id="forgetPwd">forget password?</a></p>
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
	<!-- <script src="../public/js/background.min.js"></script> -->
	<script src="../public/js/login.js"></script>
</body>
</html>