<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link href="../public/css/bootstrap.min.css" rel="stylesheet">
    <link href="../public/css/nav.css" rel="stylesheet">
    <!-- <link rel="shortcut icon" href="./logo.ico"> -->
    <style>
        html,body{
            /*height:100%;*/
            margin:0;
            background-color: #F5F8F9 !important;
        }
        .wrap {
            margin:0 auto;
            margin-top:50px;
            padding-top:50px;
            width:1100px;
            height:80%;
            min-width: 800px;
            min-height: 740px;
            padding-bottom: 80px;
            background-image: url('../public/images/7-Format-Conversion-u1_03.png') !important;
            background-repeat: no-repeat !important;
            background-size: (100%,80%) !important;
        }
        .footer{
            width: 100%;
            min-width: 1100px;
            height: 40px;
            background-image: url('../public/images/1-HOME_05.png');
            text-align: center;
            color: #ffffff;
            line-height: 40px;
            font-size: 12px;
            position: fixed;
            bottom: 0px;
            left: 0px;
            z-index: 999;
        }
    </style>
</head>
<body>
    <jsp:include  page="nav.jsp"/>
        <!--PICB Imputation Server å¯¼èª-->
        <!--<div class="wrap">
            <ul class="nav nav-tabs">
                <div class="imputation-server text-right">
                    <p>PICB Imputation Server <span class="label label-warning">Beta</span></p>
                </div>
            </ul>
        </div>       
        <br>-->

    <div id="mainEcharts" class="wrap" style="background:#eeeeee;"></div>
    <div class="footer">
        CAS-MAP Partner Institute for Computational Blology [PICB]. Copyright &copy; 2015-2017
    </div>
</body>
<script src="../public/js/jquery.min.js"></script>
<script src="../public/js/echarts.min.js"></script>
<script src="../public/js/nav.js"></script>
<script src="../public/js/conversion.js"></script>
</html>
