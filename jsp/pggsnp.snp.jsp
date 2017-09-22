<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="PGGSuiteTeam">
    <meta name="description" content="PGGSNP: SNP database on human poplation genomics and genetics">
    <title>PGGSNP</title>
    
    <!-- Bootstrap core css -->
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
    <!-- custom scss-->
    <link rel="stylesheet" href="../css/pggsnp.css">
    <script src="echarts/echarts.js"></script>

</head>

<body>

    <header id="header">
        <div class="col-md-12">
                <div class="col-md-2">
					<a class="navbar-brand" href="#">
                        <img alt="need figure here" src="http://static.show.wepiao.com/pc/img/logoMsg.png">         
                    </a>
                </div>
                    
                <div class="col-md-10">
                    <p class="text-right lisence"> Free for academic non-profit institutions. Other users need a <a href="#">Commercial license</a>.</p>
                    <div class="text-right">
                        <div class="input-group">
                            <span class="input-group-btn">
                                <button class="btn btn-default"  type="button"><span class="glyphicon glyphicon-search"></button>
                            </span>
                            <input type="text" class="form-control" placeholder="Locus or Gene">
                        </div>
                    </div>
                </div> 
        <div>
            
        <div class="col-md-12">    
                <div class="col-md-10"> 
                    <ul class="nav nav-pills">
                            <li role="presentation"  > <a  href="index"><span class="glyphicon glyphicon-home"></span> Home</a> </li>
                            
                            <li role="presentation"  > <a  href="#"><span class="glyphicon glyphicon-flag"></span> User Guide</a> </li>
                            
                           <li role="presentation" class="dropdown">
                              <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
                                <span class="glyphicon glyphicon glyphicon-wrench"></span> Tools<span class="caret"></span>
                              </a>
                                <ul class="dropdown-menu" role="menu">
                                <li role="presentation"  ><a  href="#">PGGTools</a> </li>
                                <li role="presentation"  ><a  href="#">PGGCNV</a> </li>
                                <li role="presentation"  ><a  href="#">PGGExpression</a> </li>
                                <li role="presentation"  ><a  href="#">PGGPopulation</a> </li>
                                </ul>
                            </li>
                            
                            <li role="presentation"  ><a  href="#"> <span class="glyphicon glyphicon-pencil"></span> Update </font></a> </li>

                           <li role="presentation" class="dropdown">
                              <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
                                <span class="glyphicon glyphicon glyphicon-star"></span> About<span class="caret"></span>
                              </a>
                                <ul class="dropdown-menu" role="menu">
                                <li role="presentation"  ><a  href="#">Our Publications</a> </li>
                                <li role="presentation"  ><a  href="#">PICB</a></li>
                                <li role="presentation"  ><a  href="#">PGG</a> </li>
                                <li role="presentation"  ><a  href="#">PGGSNP Team</a> </li>
                                <li role="presentation"  ><a  href="#">Fund</a> </li>
                                </ul>
                            </li>

                           <li role="presentation" class="dropdown">
                              <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
                                <span class="glyphicon glyphicon-download-alt"></span> Download<span class="caret"></span>
                              </a>
                                <ul class="dropdown-menu" role="menu">
                                <li role="presentation"  ><a  href="#">Commercial license</a> </li>
                                <li role="presentation"  ><a  href="#">#</a></li>
                                </ul>
                            </li>
                            <li role="presentation"  ><a  href="batch.jsp"> <span class="glyphicon glyphicon-tasks"></span> Batch </font></a> </li>

                    </ul> 
                </div>
                <div class="col-md-2">
                    <div class="login text-right">
                        <span class="glyphicon glyphicon-user"> </span><a href="login"> Login </a> <span>|</span> <a href="register">Register</a>
                    </div>
                 </div>  
        </div> 
    </header>


    <div class="wrap">
        <!--variant part-->
        <div class="col-md-12">
            <div class="col-md-5">
                <h3>Variant: 4:42001654 A/G</h3>
            </div>
            <div class="col-md-7 text-right">
                <p> <span class="note text-right">Note:</span> This variant is multiallelic! The other alt alleles are:
                <a>4:42001645 A/T</a>;
                <a>4:42001645 A/T</a>
            </div>
         </div>
        <div class="col-md-12">
            <div class="col-md-6">
                    <div class="col-md-6 text-right">
                            <h5>RSID in dbSNP149:</h5>
                            <h5>Derived Allele:</h5>
                            <h5>Derived Allele Frequency:</h5>
                            <h5>NCBI:</h5>
                            <h5>ExAC:</h5>
                            <h5>Other databases:</h5>
                    </div>
                    <div class="col-md-6">
                        <p><a>rs1047626</a></p>
                        <p><a>G</a></p>
                        <p><a>0.97</a></p>
                        <p><a>rs1047626</a></p>
                        <p class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
                            Others<span class="caret"></span>
                        </p>
                                <ul class="dropdown-menu" role="menu">
                                        <li role="presentation"  ><a  href="#">UCSC</a> </li>
                                        <li role="presentation"  ><a  href="#">Ensembl</a> </li>
                                        <li role="presentation"  ><a  href="#">PGGExpression</a> </li>
                                        <li role="presentation"  ><a  href="#">PGGPopulation</a> </li>
                                </ul>
                    </div>
            </div> 
            <div class="col-md-6">
                This is for igv
            </div>
        </div>

        <!--Variant Types-->
        <hr class="hr">
        <div class="col-md-12">
            <h3>Variant Types</h3>
            <p>This variant falls on 7 transcripts in 2 genes</p>
        </div>

        <!--Functional prediction-->        
        <hr class="hr">
        <div class="col-md-12">
            <h3>Functional Prediction</h3>
            <p></p>
        </div>


        <!--archaic alleles-->        
        <hr class="hr">
        <div class="col-md-12">
            <h3>Archaic</h3>
            <p></p>
        </div>


        

    </div>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="../bootstrap/js/jquery.min.js"></script>
<script src="../bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/pggsnp.js">	</script>
</body>
</html>