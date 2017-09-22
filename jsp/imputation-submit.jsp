<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <link href="../public/css/bootstrap.min.css" rel="stylesheet">
        <link href="../public/css/nav.css" rel="stylesheet">
        <link href="../public/css/sed-nav.css" rel="stylesheet">
        <link href="../public/css/imputation-submit.css" rel="stylesheet">
        <style type="text/css">
            .tableTitle{
                width:100%;
                /*height:40px;*/
            }
            .tableContent{
                width: 100%;
                overflow: scroll;
                overflow-x: hidden;
                height: 400px;
            }
            #checkTextArea{
                color: #ff0000;
            }
        </style>
    </head>
    <body>
        <!--PGGTool å¯¼èª-->
        <jsp:include  page="nav.jsp"/>
        <!--PICB Imputation Server å¯¼èª-->
        <div class="secend-nav">
            <ul>
                <li role="presentation" ><a href="/imputation">Guide</a></li>
                <li role="presentation" class="active"><a href="/imputation-submit">Submit</a></li>
                <li role="presentation" ><a href="/imputation-status">Status</a></li>
                <li role="presentation"><a href="/imputation-upload">Upload</a></li>
                <div class="imputation-server text-right">
                    <p>PICB Imputation Server &nbsp;&nbsp;&nbsp; <span class="label label-warning label-color">Beta</span></p>
                </div>
            </ul>
        </div>       
        <br>
        
        
        <!--submition-->
        <div class="wrap">
            <!-- <form> -->
                <!--function-->
                <div id="imputation-step-function">
                    <h3>Select a function</h3>
                    <label for="phasing">
                        <input type="radio" value="Phasing" id="phasing" name="imputation-function" class="imputation-function" checked>&nbsp <span>Phasing</span>&nbsp&nbsp&nbsp&nbsp
                    </label>
                    <label for="imputation">
                        <input type="radio" value="Imputation" id="imputation" name="imputation-function" class="imputation-function">&nbsp&nbsp<span>Imputation</span>
                    </label>
                </div>
                <hr>

                <!--select reference panel-->
                <div id="imputation-step-reference">
                    <h3>Choose the reference panel</h3>
                    <div id="imputation-step-reference1">
                        <label for="reference-panel-for-phasing">
                            <select id="reference-panel-for-phasing">
                                <optgroup label="with reference">
                                    <option value="1" >1000 genomes phase3</option>
                                </optgroup>
                                <optgroup label="without reference">
                                    <option value="2" selected>without reference</option>
                                </optgroup>
                            </select>
                        </label>
                        <p class="spanline"> <img src="../public/images/2-Imputation-guide1_13.png" style="margin-top:-2px;"/> Currently, this server only support Shepeit2 if you want to phasing.</p>
                    </div>
                    <div id="imputation-step-reference2">
                        <label for="reference-panel-for-imputation">
                            <select id="reference-panel-for-imputation">
                                    <option value="1" >1000 genomes phase3</option>
                                    <option value="2" selected>AAGC</option>
                                    <option value="3" selected>SGDP</option>
                                    <option value="4" selected>Han 100000</option>
                            </select>
                        </label>
                        <p class="spanline"> <img src="../public/images/2-Imputation-guide1_13.png" style="margin-top:-2px;"/> Click <a href="">here</a> to see the summary information for the reference panel.</p>
                    </div>
                </div>
                <hr>

                <!-- select tool-->
                <div id="imputation-step-tool">
                    <h3>Select tool</h3>
                    <div id="imputation-step-tool1">
                        <label for="imputation-tool-for-phasing">
                            <select id="imputation-tool-for-phasing">
                                    <option value="1" >Shapiet</option>
                            </select>
                        </label>
                    </div>
                    <div id="imputation-step-tool2">
                        <label for="imputation-tool-for-imputation">
                            <select id="imputation-tool-for-imputation">
                                    <option value="1" >Minimc3</option>
                                    <option value="2" >Impute2</option>
                            </select>
                        </label>
                    </div>
                </div>
                <hr>

                <!-- your input file-->
                <div id="imputation-step-input">
                    <h3>Choose your file</h3>
                    <p>Click browse to choose your pre-uploaded file.</P>
                    <div class="input-group col-md-12">
                        
                    <input type="text" class="form-control" id="fileIdList" placeholder="No file selected" required readonly>
                    <span class="input-group-btn">
                        <button class="btn btn-primary" type="button" id="browseBtn">Browse</button>
                        </span>
                    </div>
                    <p  class="spanline"><img src="../public/images/2-Imputation-guide1_13.png" style="margin-top:-2px;"/>  Click <a href="">upload</a> to transfer your file(s) if no one has been uploaded yet. Click <a href="">here</a> to see the required file/input format(s).</p> 
                </div>
                <hr>

                <!--set chromosomes-->
                <div id="imputation-step-chrom">
                    <h3>Set chromosomes, regions or both</h3>
                    <h5>Set chromosomes.</h5>
                    <!-- <form id="submit"> -->
                        <div class="row" style="padding-left:15px"> 
                            <input type="checkbox" value="chrall" id="Phasing_all" name="imputation-chrom">&nbsp <span>All</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="1" name="checkbox">&nbsp<span>chr1</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="2" name="checkbox">&nbsp<span>chr2</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="3" name="checkbox">&nbsp<span>chr3</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="4" name="checkbox">&nbsp<span>chr4</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="5" name="checkbox">&nbsp<span>chr5</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="6" name="checkbox">&nbsp<span>chr6</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="7" name="checkbox">&nbsp<span>chr7</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="8" name="checkbox">&nbsp<span>chr8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="9" name="checkbox">&nbsp<span>chr9</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="10" name="checkbox">&nbsp<span>chr10</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="11" name="checkbox">&nbsp<span>chr11</span>&nbsp
                        </div>
                        <div class="row" style="padding-left:15px">
                            <input type="checkbox" value="12" name="checkbox">&nbsp<span>chr12</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="13" name="checkbox">&nbsp<span>chr13</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="14" name="checkbox">&nbsp<span>chr14</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="15" name="checkbox">&nbsp<span>chr15</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="16" name="checkbox">&nbsp<span>chr16</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="17" name="checkbox">&nbsp<span>chr17</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="18" name="checkbox">&nbsp<span>chr18</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="19" name="checkbox">&nbsp<span>chr19</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="20" name="checkbox">&nbsp<span>chr20</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="21" name="checkbox">&nbsp<span>chr21</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" value="22" name="checkbox">&nbsp<span>chr22</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src="../public/images/3-1-Imputation-submit_03.png" class="reset" title="reset"/>
                            <!--<input type="button" value="Reset" class="reset">&nbsp<span></span>-->
                        </div>
                    <!-- </form> -->
                    <p class="spanline"> <img src="../public/images/2-Imputation-guide1_13.png" style="margin-top:-2px;"/> If "All" was selected, other specific chromosomes you checked would be ignored.</p>
                    <h5>Set Regions.</h5>
                    <div class="form-group">
                        <textarea class="form-control" rows="1"  style="width:400px; height:60px;" placeholder="chr1:12100000-12900000
chr4:42100000-42900000"  id="name" ></textarea><div id="checkTextArea"></div>
                        <p class="spanline"> <img src="../public/images/2-Imputation-guide1_13.png" style="margin-top:-2px;"/> Per line per genomic region. Invalidated region ranges will be automatically ignored by the pipeline in our server.</p>
                    </div>
                </div>
                <hr>

                

                <!-- put you job name -->
                <div class="imputation-step-name">
                    <h3>Name your job (optional)</h3>
                    <input type="text" id="jobname">
                    <p class="spanline"> <img src="../public/images/2-Imputation-guide1_13.png" style="margin-top:-2px;"/> This is optional. The name you set helps you .</p>
                </div>
                <hr>
                
                <div class="btn-position">
                    <button class="btn btn-primary btn-lg" type="button" id="submitBtn">
                        <span>Submit</span>
                    </button>
                </div>
                <br><br>
            <!-- </form> -->
        </div>

        <div class="footer">
            CAS-MAP Partner Institute for Computational Blology [PICB]. Copyright &copy; 2015-2017
        </div>

        <!-- modal -->
        <div class="modal fade bs-example-modal-lg" id="fileModal" tabindex="-1" role="dialog" aria-labelledby="fileModalLabel">  
            <div class="modal-dialog modal-lg" role="document">  
                <div class="modal-content">  
                    <div class="modal-header">  
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">  
                            <span aria-hidden="true"><img src="../public/images/3-2-Imputation-submit-browse_03.png"></span>  
                        </button>  
                        <h4 class="modal-title" id="jobModalLabel">Files List</h4>  
                    </div>  
                    <div class="modal-body">
                        <div class="tableTitle">
                            <table class="file-table table table-bordered" id="file">
                                <thead>
                                    <tr>
                                        <th class="label-primary file-select-all-check"><div style="width:30px;"><input type="checkbox" class="file-select-all"/></div></th>
                                        <th class="label-primary"><div style="width:60px;color:#FFFFFF;">File ID</div></th>
                                        <th class="label-primary"><div style="width:265px;color:#FFFFFF;">Name</div></th>
                                        <th class="label-primary"><div style="width:65px;color:#FFFFFF;">size</div></th>
                                        <th class="label-primary"><div style="width:100px;color:#FFFFFF;">Submit time</div></th>
                                        <th class="label-primary"><div style="width:40px;color:#FFFFFF;">State</div></th>
                                        <th class="label-primary" style="width:100%;color:#FFFFFF;">md5</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="tableContent" style="margin-top:-20px;">
                            <table class="file-table table table-bordered" style="height:400px;">
                                <tbody id="filebody">
                                </tbody> 
                            </table>
                        </div>
                    </div>  
                    <div class="modal-footer">  
                        <!--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>  -->
                        <button type="button" class="btn btn-primary" id="choiceSure">Sure</button>  
                    </div>  
                </div>  
            </div>  
        </div> 
          
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="../public/js/jquery.min.js"></script>
        <script src="../public/js/bootstrap.min.js"></script>
        <script src="../public/js/nav.js"></script>
        <script type="text/javascript" src="../public/js/imputation-submit.js"></script>
        <!-- <script type="text/javascript" src="../public/js/pggsnp.js">	</script> -->
    </body>
</html>