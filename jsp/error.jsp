<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html>
<head>
	<link rel="stylesheet" href="../public/css/bootstrap.min.css">
    <title>Error</title>
    <style>
    	*{margin:0;padding:0;}
		/*.main{
			margin:auto;
			font-size: 30px;
			width: 100%;
			height: 60px;
			line-height: 60px;
			text-align: center;
		}*/
    </style>
</head>
<body>
	<div class="row" style="height:100%;">
		<div class="col-xs-12">
			<!-- PAGE CONTENT BEGINS -->

			<div class="error-container">
				<div class="well">
					<h1 class="grey lighter smaller text-center">
						<span class="blue bigger-125">
							<i class="ace-icon fa fa-sitemap"></i>
							${errorMsg}
						</span>
					</h1>
					<br><br>
					<div class="text-center">
						<a href="javascript:history.back()" class="btn btn-primary">
							Go Back
						</a>
					</div>
				</div>
			</div>

			<!-- PAGE CONTENT ENDS -->
		</div><!-- /.col -->
	</div>
    <!-- <div class="main">${errorMsg}</div> -->
</body>
</html>