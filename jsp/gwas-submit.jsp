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
        <link href="../public/css/gwas-submit.css" rel="stylesheet">
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
                <li role="presentation"><a href="/gwas">Guide</a></li>
                <li role="presentation" class="active"><a href="/gwas-submit">Submit</a></li>
                <li role="presentation"><a href="/gwas-status">Status</a></li>
                <li role="presentation"><a href="/gwas-upload">Upload</a></li>
                <div class="imputation-server text-right">
                    <p>PICB gwas Server &nbsp;&nbsp;&nbsp; <span class="label label-warning label-color">Beta</span></p>
                </div>
            </ul>
        </div>       
        <br>
        
        
        <!--submition-->
        <div class="wrap">
            <!-- <form> -->
                <!--function-->
                <div id="gwas-step-character">
                    <h3>Select character type</h3>
                    <label for="binary">
                        <input type="radio" value="Binary" id="Binary" name="gwas-character" class="gwas-character" checked>&nbsp; <span>Binary</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    </label>
                    <label for="continues">
                        <input type="radio" value="Continues" id="Continues" name="gwas-character" class="gwas-character">&nbsp&nbsp<span>Continues</span>
                    </label>
                </div>
                <hr>

                <!-- your input file-->
                <div id="gwas-step-input">
                    <h3>Choose your file</h3>
                    <p>Click browse to choose your pre-uploaded file.</P>
                    <div class="input-group col-md-12">
                        <input type="hidden" id="fileIdList">
                        <span class="input-group-addon" id="basic-addon3">Ped</span>
                            <input type="text" class="form-control" id="ped-file" placeholder="No file selected" aria-describedby="basic-addon3" readonly>
                        <span class="input-group-addon" id="basic-addon3">Map</span>
                            <input type="text" class="form-control" id="map-file" placeholder="No file selected" aria-describedby="basic-addon3" readonly>
                        <span class="input-group-addon" id="basic-addon3">Covariates</span>
                            <input type="text" class="form-control" id="covariates-file" placeholder="No file selected" aria-describedby="basic-addon3" readonly>
                        <span class="input-group-btn">
                            <button class="btn btn-primary" type="button" id="browseBtn">Browse</button>
                        </span>
                    </div>
                    <p  class="spanline"><img src="../public/images/2-Imputation-guide1_13.png" style="margin-top:-2px;"/>  Click <a href="">upload</a> to transfer your file(s) if no one has been uploaded yet. Click <a href="">here</a> to see the required file/input format(s).</p> 
                </div>
                <hr>
                
                <!-- select tool-->
                <div id="gwas-step-test">
                    <h3>Select Test</h3>
                    <div id="gwas-step-test1">
                        <label for="gwas-test-for-binary">
                            <select id="gwas-test-for-binary">
                                <option value="1">Logistic regression</option>
                                <option value="2" class="nocovariate">Chisquare</option>
                                <option value="3" class="nocovariate">Fisher</option>
                            </select>
                        </label>
                    </div>
                    <div id="gwas-step-test2">
                        <label for="gwas-test-for-continues">
                            <select id="gwas-test-for-continues">
                                    <option value="1" >Linear regression</option>
                            </select>
                        </label>
                    </div>
                </div>
                <hr>

                <!--select reference panel-->
                <div id="gwas-step-model">
                    <h3>Choose the Model</h3>
                    <div id="gwas-step-model1">
                        <label for="model-panel-for-binary">
                            <select id="model-panel-for-binary">
                                <option value="1" >Allelic</option>
                                <option value="2" >All Model</option>
                            </select>
                        </label>
                        <p class="spanline"></p>
                    </div>
                    <div id="gwas-step-model2">
                        <label for="model-panel-for-continues">
                            <select id="model-panel-for-continues">
                                    <option value="1" >Genotypic</option>
                                    <option value="2">Dominant</option>
                                    <option value="3">Recessive</option>
                                    <option value="4">Additive</option>
                            </select>
                        </label>
                        <p class="spanline"></p>
                    </div>
                </div>
                <hr>

                <!-- put you job name -->
                <div class="gwas-step-name">
                    <h3>QC</h3>
                    <label title=" minor allele frequency"> MAF: &nbsp;&nbsp;</label><input type="number" id="maf" value="0.01">&nbsp;&nbsp;&nbsp;&nbsp;
                    <label title=" individual missing rate"> iMISS: &nbsp;&nbsp;</label><input type="number" id="imiss" value="0.1">&nbsp;&nbsp;&nbsp;&nbsp;
                    <label title=" SNP missing rate"> sMISS: &nbsp;&nbsp;</label><input type="number" id="smiss" value="0.1">&nbsp;&nbsp;&nbsp;&nbsp;
                    <label title=" HWE(p-value)"> HWE: &nbsp;&nbsp;</label><input type="number" id="hwe" value="0.000001">
                    <p class="spanline"> <img src="../public/images/2-Imputation-guide1_13.png" style="margin-top:-2px;"/>  Value in input is default value</p>
                </div>
                <hr>

                <!-- put you job name -->
                <div class="gwas-step-name">
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

        <!-- <div class="footer">
            CAS-MAP Partner Institute for Computational Blology [PICB]. Copyright &copy; 2015-2017
        </div> -->
        <jsp:include  page="footer.jsp"/>

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
        <script type="text/javascript" src="../public/js/gwas-submit.js"></script>
        <!-- <script type="text/javascript" src="../public/js/pggsnp.js">   </script> -->
    </body>
</html>