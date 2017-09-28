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
        <link href="../public/css/job-track.css" rel="stylesheet">
    </head>
    <body>
        <jsp:include  page="nav.jsp"/>
        
        <div class="wrap">
            <div class="row"><h2>Job Detail</h2></div>
            <div class="row">
                <div class="col-md-6">  
                    <label class="control-label">Job ID:</label>  
                    <strong id="jobidmodel" style="color:#11a3de;"></strong>
                </div>  
                <div class="col-md-6">  
                    <label class="control-label">Name:</label>  
                    <strong id="jobnamemodel" style="color:#11a3de;"></strong>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">  
                    <label class="control-label">Pipeline:</label>  
                    <strong id="jobpipelinemodel" style="color:#11a3de;"></strong>
                </div>
                <div class="col-md-6">  
                    <label class="control-label">Command:</label>  
                    <strong id="jobcommandmodel" style="color:#11a3de;"></strong>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">  
                    <label class="control-label">SubTime:</label>  
                    <strong id="jobsubtimemodel" style="color:#11a3de;"></strong>
                </div>
                <div class="col-md-6">  
                    <label class="control-label">StateTime:</label>  
                    <strong id="jobstatetimemodel" style="color:#11a3de;"></strong>
                </div> 
            </div> 
            <div class="row" style="margin-top: 20px;">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class="label-default">id</th>
                            <th class="label-default">name</th>
                            <th class="label-default">path</th>
                            <th class="label-default">size</th>
                            <th class="label-default">md5</th>
                            <th class="label-default">datetime</th>
                            <!-- <th class="label-default">status</th> -->
                        </tr>
                    </thead>
                    <tbody id="fileModelTable">

                    </tbody>
                </table>
            </div>
            <div class="row"><h2>Job State Tracking</h2></div>
            <div>
                <ul class="steps" style="margin-left: 0">
                    <li data-step="1">
                        <span class="step">1</span>
                        <span class="title">waitting</span>
                    </li>

                    <li data-step="2">
                        <span class="step">2</span>
                        <span class="title">queue</span>
                    </li>

                    <li data-step="3">
                        <span class="step">3</span>
                        <span class="title">running</span>
                    </li>
                    <li data-step="4">
                        <span class="step">3a</span>
                        <span class="title">running-one</span>
                    </li>
                    <li data-step="5">
                        <span class="step">3b</span>
                        <span class="title">running-two</span>
                    </li>
                    <li data-step="6">
                        <span class="step">3c</span>
                        <span class="title">running-three</span>
                    </li>
                    <li data-step="7">
                        <span class="step">4</span>
                        <span class="title">finished</span>
                    </li>
                </ul>
            </div>
            <div class="row"><h2>生成的脚本文件</h2></div>
        </div>

        <div class="footer">
            CAS-MAP Partner Institute for Computational Blology [PICB]. Copyright &copy; 2015-2017
        </div>

        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="../public/js/jquery.min.js"></script>
        <script src="../public/js/echarts.min.js"></script>
        <script src="../public/js/bootstrap.min.js"></script>
        <script src="../public/js/bootbox.min.js"></script>
        <script src="../public/js/nav.js"></script>
        <!-- jqGrid插件包-必要 -->
        <script type="text/javascript" src="../public/jqgrid/js/jquery.jqGrid.src.js"></script>
        
        <!-- jqGrid插件的多语言包-非必要 -->
        <!-- 在jqgrid/js/i18n下还有其他的多语言包，可以尝试更换看效果 -->
        <script type="text/javascript" src="../public/jqgrid/js/i18n/grid.locale-cn.js"></script>
        <script type="text/javascript" src="../public/js/job-track.js">	</script>
    </body>
</html>