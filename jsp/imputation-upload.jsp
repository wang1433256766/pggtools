<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <link href="../public/css/bootstrap.min.css" rel="stylesheet">
        <!-- jqGrid组件基础样式包-必要 -->
        <link rel="stylesheet" href="../public/jqgrid/css/ui.jqgrid.css" />
        
        <!-- jqGrid主题包-非必要 --> 
        <!-- 在jqgrid/css/css这个目录下还有其他的主题包，可以尝试更换看效果 -->
        <link rel="stylesheet" href="../public/jqgrid/css/css/redmond/jquery-ui-1.8.16.custom.css" />
        <link href="../public/css/nav.css" rel="stylesheet">
        <link href="../public/css/sed-nav.css" rel="stylesheet">
        <!--WebUploader-->
        <link rel="stylesheet" href="../public/css/common.css">
        <link rel="stylesheet" href="../public/css/webuploader.css">
        <link rel="stylesheet" href="../public/css/upload.css">
    </head>
    <body>
        <jsp:include  page="nav.jsp"/>
        <!--PICB Imputation Server å¯¼èª-->
        <div class="secend-nav">
            <ul>
                <li role="presentation" ><a href="/imputation">Guide</a></li>
                <li role="presentation"  ><a href="/imputation-submit">Submit</a></li>
                <li role="presentation" ><a href="/imputation-status">Status</a></li>
                <li role="presentation" class="active"><a href="/imputation-upload">Upload</a></li>
                <div class="imputation-server text-right">
                    <p>PICB Imputation Server &nbsp;&nbsp;&nbsp; <span class="label label-warning label-color">Beta</span></p>
                </div>
            </ul>
        </div>       
        <br>
        
        
        <!--upload-->
        <div class="wrap">
            <!--Main content-->
            <div id="middle-0" class="middle container-0">
                <div class="container container-1">
                    <div class="row">
                        <div class="col-xs-12 sub-container sub-container-file">
                            <div class="col-xs-6 text-left">
                                <div id="picker" class="file-upload-control-button">Add Files</div>
                            </div>
                            <div class="col-xs-6 text-right">
                                <button id="UploadBtn" class="btn btn-default btn-right file-upload-control-button">Uploading</button>
                                <button id="StopBtn" class="btn btn-default btn-right file-upload-control-button">Stop</button>
                            </div>
                            <div class="height25px"></div>
                            <div class="height25px"></div>
                            <div class="height25px"></div>
                        </div>
                        <div id="thelist" class="col-xs-12 sub-container sub-container-file-selected uploader-list"></div>
                    </div>
                </div>
            </div>
            <hr>
            <table id="grid-table"></table>
            <div id="grid-pager"></div>
        </div>
        <!-- <div class="footer">
            CAS-MAP Partner Institute for Computational Blology [PICB]. Copyright &copy; 2015-2017
        </div> -->
        <jsp:include  page="footer.jsp"/>

        <!--å¼¹çª-->
        <div id="popup">
            <div>
                <span id="popup-close" class="glyphicon glyphicon-remove"></span>
                <p id="popup-content">这里是提示信息</p>
            </div>
        </div>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="../public/js/jquery.min.js"></script>
        <script src="../public/js/bootstrap.min.js"></script>
        <script src="../public/js/nav.js"></script>
        <!-- jqGrid插件包-必要 -->
        <script type="text/javascript" src="../public/jqgrid/js/jquery.jqGrid.src.js"></script>
        
        <!-- jqGrid插件的多语言包-非必要 -->
        <!-- 在jqgrid/js/i18n下还有其他的多语言包，可以尝试更换看效果 -->
        <script type="text/javascript" src="../public/jqgrid/js/i18n/grid.locale-cn.js"></script>
        <!--<script type="text/javascript" src="../public/js/common.js">    </script>-->
        <!--<script type="text/javascript" src="../public/js/pggsnp.js">	</script>-->
        
        <!--WebUploader-->
        <script src="../public/js/webuploader.min.js"></script>
        <script src="../public/js/imputation-upload.js"></script>
        <!-- <script src="Public/js/common.js"></script> -->
    </body>
</html>