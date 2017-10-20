<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<title>userMgn</title>
	<link rel="stylesheet" href="../public/css/bootstrap.min.css">
    <link rel="stylesheet" href="../public/css/jquery-ui.min.css">
     <!-- jqGrid组件基础样式包-必要 -->
    <link rel="stylesheet" href="../public/jqgrid/css/ui.jqgrid.css" />
    
    <!-- jqGrid主题包-非必要 --> 
    <!-- 在jqgrid/css/css这个目录下还有其他的主题包，可以尝试更换看效果 -->
    <link rel="stylesheet" href="../public/jqgrid/css/css/redmond/jquery-ui-1.8.16.custom.css" />
	<link rel="stylesheet" href="../public/css/nav.css">
    <link rel="stylesheet" href="../public/css/userMgn.css">
</head>
<body>
	<jsp:include  page="nav.jsp"/>
        <br>
        
    <div class="wrap">
        <ul id="tab">
            <li class="current">UserManager</li>
            <li>JobManager</li>
            <li>FileManager</li>
            <li>NewsManager</li>
            <li>NodesManager</li>
            <button class="btn btn-md btn-primary" id="sendSysEmail" title="发送系统监控邮件" style="float:right;margin-top:3px;">sendEmail</button>
        </ul>
        <div id="content">
            <ul style="display:block;">
                <table id="grid-table"></table> 
                <div id="grid-pager"></div>
            </ul>
            <ul>
                <table id="job-grid-table"></table> 
                <div id="job-grid-pager"></div>
            </ul>
            <ul>
                <table id="files-grid-table"></table> 
                <div id="files-grid-pager"></div>
            </ul>
            <ul>
                <table id="news-grid-table"></table> 
                <div id="news-grid-pager"></div>
            </ul>
            <ul>
                <button class="btn btn-primary" id="addNode">添加</button>
                <button class="btn btn-warning" id="updateNode">修改</button>
                <button class="btn btn-danger" id="delNode">删除</button>
                <table id="nodes-table" class="table table-bordered table-hover table-condensed">
                    <thead>
                        <tr>
                            <th><input type="checkbox" class="allcheck"></th>
                            <th>nodeName</th>
                            <th>ip</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody id="nodeContent"></tbody>
                </table>
            </ul>
        </div>
        <br><br>
        <hr>
        <!-- <div style="width:100%;overflow:hidden !important;">
            <h3>Server status</h3>
            <div id="memPie" style="width:33%;height:300px;float:left;"></div> 
            <div id="diskPie" style="width:33%;height:300px;float:left;"></div> 
            <div id="cpuPie" style="width:33%;height:300px;float:left;"></div>
        </div> -->
        <!-- 资源监控部分 -->
        <select id="sourceId">
            <option value="mem_use,mem_free">mem</option>
            <option value="disk_use,disk_free">disk</option>
            <option value="cpu_use,cpu_free">cpu</option>
        </select>
        <div id="serverBar" style="width:100%;height:400px;"></div>
    </div>

    <!-- updateNodesModal -->
    <div class="modal fade" id="updateNodesModal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden>x</span>
                    </button>
                    <h4 class="modal-title">Nodes Update</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6"> 
                            <label class="control-label">NodesStatus:</label>  
                            <select id="nodesStatus" class="form-control">
                                <option value="0">有效</option>
                                <option value="1">无效</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer"> 
                    <button type="button" class="btn btn-primary" id="updateNotesBtn">Save</button> 
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- addNodesModal -->
    <div class="modal fade" id="addNodesModal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden>x</span>
                    </button>
                    <h4 class="modal-title">Nodes Add</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-9"> 
                            <label class="control-label">NodesName:</label>  
                            <input type="text" class="form-control" id="nodesName">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-9"> 
                            <label class="control-label">NodesIP:</label>  
                            <input type="text" class="form-control" id="nodesIP">
                        </div>
                    </div>
                </div>
                <div class="modal-footer"> 
                    <button type="button" class="btn btn-primary" id="addNotesBtn">Save</button> 
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- addnewsmodal -->
    <div class="modal fade" id="addNewsModal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">  
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">  
                        <span aria-hidden="true">×</span>  
                    </button>  
                    <h4 class="modal-title">News Add</h4>  
                </div>
                <div  class="modal-body">
                    <div class="row">
                        <div class="col-md-6">  
                            <label class="control-label">Title:</label>  
                            <input type="text" class="form-control" id="addNewsTitle">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-10">  
                            <label class="control-label">Content:</label>  
                            <textarea name="" id="addNewsContent" cols="30" rows="10" class="form-control">
                            </textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer"> 
                    <button type="button" class="btn btn-primary" id="addNewsBtn">Save</button> 
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- editnewsmodal -->
    <div class="modal fade" id="editNewsModal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">  
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">  
                        <span aria-hidden="true">×</span>  
                    </button>  
                    <h4 class="modal-title">News Edit</h4>  
                </div>
                <div  class="modal-body">
                    <div class="row">
                        <div class="col-md-6">  
                            <label class="control-label">Title:</label> 
                            <input type="hidden" id="editNewsId">
                            <input type="text" class="form-control" id="editNewsTitle">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-10">  
                            <label class="control-label">Content:</label>  
                            <textarea name="" id="editNewsContent" cols="30" rows="10" class="form-control">
                            </textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer"> 
                    <button type="button" class="btn btn-primary" id="editNewsBtn">Save</button> 
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- jobviewmodal -->
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

    <!-- userinfo -->
    <div class="modal fade" id="getUserInfo" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">  
                        <span aria-hidden="true">×</span>  
                    </button>
                    <h4 class="modal-title">User Detail</h4>
                </div>
                <div class="modal-body">
                    <div class="row form-group"><div class="col-md-6">email:<input type="text" id="cu-email"/></div><div class="col-md-6">uname:<input type="text" id="cu-uname"/></div></div>
                    <div class="row form-group"><div class="col-md-6">birthday:<input type="text" id="cu-birthday"/></div><div class="col-md-6">group:<input type="text" id="cu-group"/></div></div>
                    <div class="row form-group"><div class="col-md-6">sex:<input type="text" id="cu-sex"/></div><div class="col-md-6">phone:<input type="text" id="cu-phone"/></div></div>
                    <div class="row form-group"><div class="col-md-6">location:<input type="text" id="cu-location"/></div><div class="col-md-6">role:<input type="text" id="cu-role"/></div></div>
                    <div class="row form-group"><div class="col-md-4">firstName:<input type="text" id="cu-firstName"/></div><div class="col-md-4">lastName:<input type="text" id="cu-lastName"/></div><div class="col-md-4">status:<select id="cu-status"><option value="0">normal</option>
                    <option value="1">forbid</option></select></div></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" id="changeSubmit">sure</button> 
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- sendmodal -->
    <div class="modal fade bs-example-modal-lg" id="sendModal" tabindex="-1" role="dialog" aria-labelledby="sendModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">  
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">  
                        <span aria-hidden="true">×</span>  
                    </button>  
                    <h4 class="modal-title" id="sendModalLabel">Send Email To User</h4>  
                </div>
                <div  class="modal-body">
                    <div class="input-group">
                        <label class="control-label">Title:</label>  
                        <input type="text" class="form-control" id="userTitle"/>
                    </div>
                    <div class="input-group">
                        <label class="control-label">Content:</label>  
                        <textarea class="form-control" id="userContent"></textarea>
                    </div>
                </div>
                <div class="modal-footer"> 
                    <button type="button" id="sendEmailToUser" class="btn btn-primary">Send</button> 
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="../public/js/jquery.min.js"></script>
    <script src="../public/js/echarts.min.js"></script>
    <script src="../public/js/bootstrap.min.js"></script>
    <script src="../public/js/jquery-ui.min.js"></script>
    <script src="../public/js/bootbox.min.js"></script>
    <script src="../public/js/nav.js"></script>
    <!-- jqGrid插件包-必要 -->
    <script type="text/javascript" src="../public/jqgrid/js/jquery.jqGrid.src.js"></script>
    
    <!-- jqGrid插件的多语言包-非必要 -->
    <!-- 在jqgrid/js/i18n下还有其他的多语言包，可以尝试更换看效果 -->
    <script type="text/javascript" src="../public/jqgrid/js/i18n/grid.locale-cn.js"></script>
    <script src="../public/js/userMgn.js"></script>
</body>
</html>