<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>登录2版</title>
	<link rel="stylesheet" href="../public/css/login_1.css">
</head>
<body>
	<div class="login-wrap">
		<div class="login-wrap-top">
			<div class="row">
				<div class="col-md-6 login"><a href="/login">Login</a></div>
				<div class="col-md-6 register"><a href="/register">Register</a></div>
			</div>
			<div class="right-input">
				<img src="../public/images/register_08.png">&nbsp;&nbsp;
				<input type="text" class="input-text" placeholder="E-mail" id="email">
			</div><div id="checkEmail" class=""></div>
			<div class="right-input">
				<img src="../public/images/register_16.png">&nbsp;&nbsp;
				<input type="password" class="input-text" placeholder="password" id="password">
			</div><div id="checkPwd"></div>
			<p class="forgetPwd">
				<a id="forgetPwd">forget password?</a>
			</p>
			<input type="button" class="input-btn" value="Submit" id="submit">
			<p class="intro">The account can also be used for other databases or tools in <label style="color:#F79440;">PGGSuite</label>.</p>
		</div>
		<div class="login-wrap-bottom"></div>
	</div>
	<div class="wrap">
		<div class="top">
			<div class="introduce">
				<p><img src="../public/images/login-1_03.png"></p>
				<p class="title">Welcom To PGG</p>
				<p class="content">
					This server provides a free genotype imputation service.You can upload GWAS
					genotypes(VCF or 23andMe format) and receive phased and imputed genomes
					in return.Our serveroffers imputation from HapMap,1000 Genomes(Phase 1 and
					3),CAAPA and the updated Haplotype ReferenceConsortium(HRC version r1.1)
					panel.Learn more or follow us on Twitter.
				</p>
			</div>
		</div>
		<div class="bottom">
			<div class="icon">
				<div class="image-icon"><img src="../public/images/login1_09.png"><p class="text-color-1"><i>PGG</i>.SV</p></div>
				<div class="image-icon"><img src="../public/images/login-1_11.png"><p class="text-color-2"><i>PGG</i>.Expression</p></div>
				<div class="image-icon"><img src="../public/images/login1_09.png"><p class="text-color-1"><i>PGG</i>.SNV</p></div>
				<div class="image-icon" style="margin-right: 0;margin-left:2.5%;"><img src="../public/images/login-1_11.png"><p class="text-color-2"><i>PGG</i>.Tools</p></div>
			</div>
		</div>
	</div>
	<div class="footer">
		CAS-MAP Partner Institute for Computational Blology [PICB]. Copyright &copy; 2015-2017
	</div>
	<script src="../public/js/jquery.min.js"></script>
	<script src="../public/js/login.js"></script>
</body>
</html>