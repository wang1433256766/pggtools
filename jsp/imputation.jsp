<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <link href="../public/css/bootstrap.min.css" rel="stylesheet">
        <link href="../public/css/nav.css" rel="stylesheet">
        <link href="../public/css/imputation.css" rel="stylesheet">
        <style type="text/css">
            /*.backToTop {
                display: none;
                width: 55px;
                line-height: 3.5;
                padding: 5px 0;
                background-color: #000;
                color: #fff;
                font-size: 12px;
                text-align: center;
                position: fixed;
                _position: absolute;
                right: 10px;
                bottom: 100px;
                _bottom: "auto";
                cursor: pointer;
                opacity: .6;
                filter: Alpha(opacity=60);
            }*/
        </style>
    </head>
    <body>
        <!-- 锚链接 -->
        <!-- <div class="mao-part">
            <ul>
                <a href="#about"><li>About</li></a>
                <a href="#format"><li>Prepare your data</li></a>
                <a href="#panel"><li>Reference panels</li></a>
                <a href="#upload"><li>Upload your data</li></a>
                <a href="#start"><li>Start the imputation</li></a>
                <a href="#download"><li>Download your data</li></a>
                <a href="#login"><li>Sign up and login</li></a>
                <a href="#status"><li>View your job status</li></a>
                <a href="#cite"><li>Cite us</li></a>
                <a href="#newsnav"><li>News</li></a>
            </ul>
        </div> -->


        <!--PGGTool å¯¼èª-->
        <jsp:include  page="nav.jsp"/>
        <!--PICB Imputation Server å¯¼èª-->
        <div class="secend-nav">
            <ul>
                <li role="presentation" class="active"><a href="/imputation">Guide</a></li>
                <li role="presentation" ><a href="/imputation-submit">Submit</a></li>
                <li role="presentation" ><a href="/imputation-status">Status</a></li>
                <li role="presentation"><a href="/imputation-upload">Upload</a></li>
                <div class="imputation-server text-right">
                    <p>PICB Imputation Server &nbsp;&nbsp;&nbsp;<span class="label label-info label-color">Beta</span></p>
                </div>
            </ul>
        </div>


        <!--Home list å¯¼èª-->
        <div class="wrap">
            <!--about section-->
            <section id="about" style="padding-top:102px;margin-top:-102px;">
                <div class="jumbotron-part">
                    <div class="jumbotron-describtion">
                        <h3 style="font-size:32px;color: #025394;">PICB Imputation Server</h3>
                        <p style="font-size:18px;line-height:32px;">This server provides a free genotype imputation service. You can upload GWAS genotypes (VCF or 23andMe format) and receive phased and imputed genomes in return. Our server offers imputation from HapMap, 1000 Genomes (Phase 1 and 3), CAAPA and the updated Haplotype Reference Consortium (HRC version r1.1) panel. Learn more or follow us on Twitter.</p>
                    </div>
                    <div class="jumbotron-image">
                        <img src="../public/images/2-Imputation-guide-u2_03 (2).png" alt="">
                    </div>
                </div>
                <div class="about-title">
                    <div class="col-md-4 text-center">
                        <h3 class="about-instr">Genomes</h3>
                        <div class="about-content" id="genomes"></div>
                    </div>
                    
                    <div class="col-md-4 text-center">
                        <h3 class="about-instr" style="background:#1b838e;">Performence</h3>
                        <div class="about-content" style="background:#27abc0;" id="performence"></div>
                    </div>
                    
                    <div class="col-md-4 text-center">
                        <h3 class="about-instr" style="background:#1b8e77;">News</h3>
                        <div class="about-content" style="background:#27c0ac;" id="news"></div>
                    </div>
                    
                </div>
            </section>
                
            <div class="bottom-part">    
                <!--format section-->
                <section id="format" class="section" style="padding-top:92px;margin-top:-92px;">
                    <h3>Prepare your format</h3>
                    <p class="fontStyle">PICB Imputation Server requires input data to be in PLINK ped or VCF format. If you have data with other format, please check Format Conversion to see whether there is a tool or script to convert your data to required format. The server support genotype calls from sequence data, but the imputation error is expected to be high due to the density and high level of missingness for full sequence data.</p>  
                    <h5>For PLINK ped format, we require:</h5>
                    <div class="">
                        <ul>
                            <li>The prefix of ped and map file should be same.</li>
                            <li>Coordinates are on GRCh37.</li> 
                        </ul>
                    </div>
                    <p ><img src="../public/images/2-Imputation-guide1_13.png" style="margin-top:-2px;"/> With this format, the Server will automatically convert all alleles on the forward strand.</p>
                    <h5>For VCF, we require:</h5>
                    <div class="">
                        <ul>
                            <li>Create a seperate vcf.gz file for each chromosome.</li>
                            <li>Variations must be sorted by genomic position.</li> 
                            <li>Coordinates are on GRCh37.</li> 
                            <li>Valid VCF. You can use the following code to check:<pre>vcftools</pre></li> 
                        </ul>
                    </div>
                    <p ><img src="../public/images/2-Imputation-guide1_13.png" style="margin-top:-2px;"/> With this format, the Server will automatically convert all alleles on the forward strand.</p>
                 </section>

                <!--panel section-->
                <section id="panel" class="section" style="padding-top:92px;margin-top:-92px;">
                    <hr>
                    <h3>Reference panels</h3>
                    <p class="fontStyle">This server provides four reference panels which are summaried below:</p>
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th class="btn-primary">Panel Name</th>
                            <th class="btn-primary">No. Population</th>
                            <th class="btn-primary">No. Sample</th>
                            <th class="btn-primary" id="td-narrow">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        
                        </tbody>
                    </table>
                    <p ><img src="../public/images/2-Imputation-guide1_13.png" style="margin-top:-2px;"/> Click <a>download</a> to obtain the reference panel data.</p>
                </section>
                
                 <!--upload section-->
                <section id="upload" class="section" style="padding-top:92px;margin-top:-92px;">
                    <hr>
                    <h3>Upload your data</h3>
                    <p class="fontStyle">Input files can be uploaded either from web HTTP protocol or from SFTP.</p>  
                    <h5>Data sensitivity:</h5>
                    <div class="">
                        <ul>
                            <li>To see your uploaded files, you should firstly login to the server and click âstatusâ on the navigation bar. </li>
                            <li>Other users cannot see any files that belong only to you.</li> 
                            <li>Input data would be deleted from our servers after 7 days when your job is finished.  You can delete your input data anytime by accessing the status page.</li> 
                            <li>We never look at your data except check integrity and store the number of samples and markers analyzed.</li> 
                        </ul>
                    </div>
                    <p ><img src="../public/images/2-Imputation-guide1_13.png" style="margin-top:-2px;"/> Click <a>upload</a> to transfer your input files and <a>status</a> to see all your uploaded files.</p>
                </section>

                            
                 <!--start section-->
                <section id="start" class="section" style="padding-top:92px;margin-top:-92px;">
                    <hr>
                    <h3>Start the imputation</h3>
                </section>
                            
                 <!--download section-->
                <section id="download" class="section" style="padding-top:92px;margin-top:-92px;">
                    <hr>
                    <h3>Download your data</h3>
                </section>

                            
                 <!--login section-->
                <section id="login" class="section" style="padding-top:92px;margin-top:-92px;">
                    <hr>
                    <h3>Sign up and login</h3>
                </section>
                       
                 <!--status section-->
                <section id="status" class="section" style="padding-top:92px;margin-top:-92px;">
                    <hr>
                    <h3>View your status</h3>
                </section>
                            
                 <!--cite section-->
                <section id="cite" class="section" style="padding-top:92px;margin-top:-92px;">
                    <hr>
                    <h3>Cite us</h3>
                    <p class="fontStyle">The work has not been formally published yet.</p>
                </section>

                <!--news section-->
                <section id="newsnav" class="section" style="padding-top:92px;margin-top:-92px;">
                    <hr>
                    <h3>News</h3>
                    <p class="fontStyle">The work has not been formally published yet.</p>
                </section>
            </div>
            <!-- 锚链接 -->
            <div class="mao-part">
                <ul>
                    <a href="#about"><li>About</li></a>
                    <!-- <li><a href="#performance">Performance</a></li> -->
                    <a href="#format"><li>Prepare your data</li></a>
                    <a href="#panel"><li>Reference panels</li></a>
                    <a href="#upload"><li>Upload your data</li></a>
                    <a href="#start"><li>Start the imputation</li></a>
                    <a href="#download"><li>Download your data</li></a>
                    <a href="#login"><li>Sign up and login</li></a>
                    <a href="#status"><li>View your job status</li></a>
                    <a href="#cite"><li>Cite us</li></a>
                    <a href="#newsnav"><li>News</li></a>
                </ul>
            </div> 
            
        </div>
        <jsp:include  page="footer.jsp"/>
        <!-- <div class="footer">
            CAS-MAP Partner Institute for Computational Blology [PICB]. Copyright &copy; 2015-2017
        </div> -->
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="../public/js/jquery.min.js"></script>
        <script src="../public/js/bootstrap.min.js"></script>
        <script src="../public/js/nav.js"></script>
        <!-- <script type="text/javascript" src="../js/pggsnp.js">  </script> -->
        <script type="text/javascript" src="../public/js/imputation.js"></script>
    </body>
</html>