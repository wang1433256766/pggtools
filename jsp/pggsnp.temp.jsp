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
        <h3><span class="pggsnp-name">PGG<strong>SNP</strong>:</span> The Human <span  class="pggsnp-name">P</span>opulation <span  class="pggsnp-name">G</span>enomics&<span  class="pggsnp-name">G</span>enetics <span  class="pggsnp-name"><strong>SNP</strong></span> Database</h3>
        <div class="col-md-9">
            <p>PGGSNP is a searchable, integrative database that provides comprehensive, user-friendly information on all annotated SNPs. It is developed by<a href="http://www.picb.ac.cn/PGG/index.php" target="_blank"> Population Genomics Group (PGG)</a> at the <a href="http://www.picb.ac.cn/picb-dynamic/index.htm" target="_blank">CAS-MPG Partner Institute for Computational Biology (PICB)</a>. The database focus on each SNP on the human population genomics and genetics level.</p>
        </div>
        <div class="col-md-3">
			<a href="#"><img class="pggsnp-logo" alt="pggsnp logo" src="../images/picb.png"></a>
        </div>


        <br><br><br><br><br>
        <hr/>
        <div class="col-md-12">
            <div class="col-md-9">
                <h4> Explore a SNP</h4>
                <form name="refForm" method="get" >
                    <input type="text" name="search_text" id="search_text" class="snpinput" placeholder="rs1047626 or chr4:42003671" onkeypress="if (event.keyCode == 13) submit_snp('');">
                    <input type="text" name="notautosubmit" style="display:none">
                    <input type="button"  id="search_button" value="GO" onclick="submit_snp('')" class="snpbuttom">
                    <input type="checkbox" id="s_switch" onclick="search_switch()"><span class="search-switch"> Search Gene?</span>
                </form>
                <h4> Jump to section for this SNP</h4>
                <div class="jump">
                    <table id="table-section">
                        <tr>
                        <td><a href="#" onclick="submit_snp('basic')">Variant</a></td>
                        <td><a href="">Variant Types</a></td>
                        <!--td><a href="">Constraint Scores</a></td-->
                        <td><a href="">Functional Prediction</a></td>
                        <td><a href="">Archaic</a></td>                        
                        </tr>
                        <tr>
                        <td><a href="">Allele Frequencies</a></td>
                        <td><a href="">F Statistics (FST)</a></td>
                        <td><a href="">Natural selection</a></td>
                        <td><a href="">Disease</a></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="col-md-3 " id="news">
                <h4>Recent News</h4>
                <h4>Apr. 20, 2017</h4>
                <p>- Version 1.0 (beta) is released! </p>
                <h4>Nov. 20, 2016</h4>
                <p>- Internal release to consortium now available!</p>
            </div>
        </div>



        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <hr>
        <div class="col-md-12">
            <div class="col-md-5">
                <h4 > PGGSNP Database Statistics</h4>
                <div class="col-md-12">
                    <a>SNPs with AF.: </a><br/>
                    <a>No. Genomes: </a><br/>
                    <a>No. Populations: </a><br/>
                    <a>No. Data sets: </a><br/>
                    <a>Outside Sources: </a><br/>
                </div>
            </div>
            <div class="col-md-7">
                <h4> PGGSuite: The affiliated Databases</h4>
                <div class=col-md-3>
                    <h5 >PGGPopulation</h5>
                    <p> <img src="../images/pop.proxy.png" height=100px width=120px />
                </div>
                <div class=col-md-3>
                    <h5 >PGGExpression</h5>
                    <p> <img src="../images/exp.proxy.png" height=100px width=120px />
                </div>
                <div class=col-md-3>
                    <h5 >PGGCNV</h5>
                    <p> <img src="../images/cnv.proxy.png" height=100px width=120px />
                </div>
                <div class=col-md-3>
                    <h5 >PGGTools</h5>
                    <p> <img src="../images/pop.proxy.png" height=100px width=120px />
                </div>
            </div>
        </div>
    </div>

<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="../bootstrap/js/jquery.min.js"></script>
<script src="../bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/pggsnp.js">	</script>
</body>
</html>