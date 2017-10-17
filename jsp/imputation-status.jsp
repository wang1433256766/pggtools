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
        <link href="../public/css/imputation-status.css" rel="stylesheet">
    </head>
    <body>
        <!--PGGTool å¯¼èª-->
        <jsp:include  page="nav.jsp"/>
        <!--PICB Imputation Server å¯¼èª-->
        <div class="secend-nav">
            <ul>
                <li role="presentation" ><a href="/imputation">Guide</a></li>
                <li role="presentation" ><a href="/imputation-submit">Submit</a></li>
                <li role="presentation" class="active"><a href="/imputation-status">Status</a></li>
                <li role="presentation"><a href="/imputation-upload">Upload</a></li>
                <div class="imputation-server text-right">
                    <p>PICB Imputation Server &nbsp;&nbsp;&nbsp; <span class="label label-warning label-color">Beta</span></p>
                </div>
            </ul>
        </div>       
        <br>
        
        
        
        <div class="wrap">
            <!--job section-->
            <h3>Your jobs</h3>
            <p>The table attached below provides you summaries for your jobs. To get the detailed information for each job, please click the ID for one job.</p>
            
            <table id="job-list"></table> 
            <div id="job-pager"></div>
            
            <!--File table-->
            <!-- <br><br>
            <hr>
            <h3>Your uploaded files</h3> 
            <table id="file-list"></table> 
            <div id="file-pager"></div>    -->      
            
            <!--computational load-->
            <!-- <br><br>
            <hr>
            <div style="width:100%;overflow:hidden !important;">
                <h3>Server status</h3>
                <div id="memPie" style="width:33%;height:300px;float:left;"></div> 
                <div id="diskPie" style="width:33%;height:300px;float:left;"></div> 
                <div id="cpuPie" style="width:33%;height:300px;float:left;"></div>
            </div> -->
        </div>

        <!-- <div class="footer">
            CAS-MAP Partner Institute for Computational Blology [PICB]. Copyright &copy; 2015-2017
        </div> -->
        <jsp:include  page="footer.jsp"/>

        <!-- addmodal -->
        <div class="modal fade bs-example-modal-lg" id="addJobModal" tabindex="-1" role="dialog" aria-labelledby="addJobModalLabel">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">  
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">  
                            <span aria-hidden="true">×</span>  
                        </button>  
                        <h4 class="modal-title" id="addJobModalLabel">Jobs Add</h4>  
                    </div>
                    <div  class="modal-body"></div>
                    <div class="modal-footer"> 
                        <button type="button" class="btn btn-primary">Save</button> 
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- editmodal -->
        <div class="modal fade bs-example-modal-lg" id="editJobModal" tabindex="-1" role="dialog" aria-labelledby="editJobModalLabel">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">  
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">  
                            <span aria-hidden="true">×</span>  
                        </button>  
                        <h4 class="modal-title" id="editJobModalLabel">Jobs Add</h4>  
                    </div>
                    <div  class="modal-body"></div>
                    <div class="modal-footer"> 
                        <button type="button" class="btn btn-primary">Save</button> 
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- viewmodal -->
        <div class="modal fade bs-example-modal-lg" id="jobModal" tabindex="-1" role="dialog" aria-labelledby="jobModalLabel">  
            <div class="modal-dialog modal-lg" role="document">  
                <div class="modal-content">  
                    <div class="modal-header">  
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><img src="../public/images/3-2-Imputation-submit-browse_03.png"></span> 
                        </button>  
                        <h4 class="modal-title" id="jobModalLabel">Jobs Detail</h4>  
                    </div>  
                    <div class="modal-body">
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
                                <label class="control-label">Status:</label>  
                                <strong id="jobstatusmodel" style="color:#11a3de;"></strong>
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
                        <div class="row">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th class="label-default">id</th>
                                        <th class="label-default">name</th>
                                        <th class="label-default">path</th>
                                        <th class="label-default">size</th>
                                        <th class="label-default">md5</th>
                                        <th class="label-default">datetime</th>
                                        <th class="label-default">status</th>
                                    </tr>
                                </thead>
                                <tbody id="fileModelTable">

                                </tbody>
                            </table>
                        </div>
                            
                    </div>  
                    <div class="modal-footer">  
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>  
                        <!-- <button type="button" class="btn btn-primary">Save</button> -->  
                    </div>  
                </div>  
            </div>  
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
        <script type="text/javascript" src="../public/js/imputation-status.js">	</script>
    </body>
</html>