<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="PGGSuiteTeam">
    <meta name="description" content="PGGPopulation: The Human Population Demographic History Database">
    <title>PGGPopulation</title>
    
    <!-- Bootstrap core css -->
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
    <!-- custom scss-->
    <link rel="stylesheet" href="../css/pggpop.css">
    <script src="../echarts/echarts.js"></script>

</head>

<body>
    <!--å¯¼èª-->
    <div class="col-md-12 navigation">
        <div class="wrap">
            <div class="col-md-12"> 
                    <ul class="nav nav-pills">
                            <li role="presentation" class="warning" > <a  href="pggpop.html"><span class="glyphicon glyphicon-home"></span> Home</a> </li>
                            <li role="presentation"  > <a  href="#"><span class="glyphicon glyphicon-flag"></span> User Guide</a> </li>
                            <li role="presentation"  > <a  href="#"><span class="glyphicon glyphicon-stats"></span> Statistics</a> </li>
                            <li role="presentation"  > <a  href="#"><span class="glyphicon glyphicon-list"></span> Population</a> </li>
                            <li role="presentation"  ><a  href="#"> <span class="glyphicon glyphicon-pencil"></span> Update </font></a> </li>

                           <li role="presentation" class="dropdown">
                              <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
                                <span class="glyphicon glyphicon glyphicon-star"></span> About<span class="caret"></span>
                              </a>
                                <ul class="dropdown-menu" role="menu">
                                <li role="presentation"  ><a  href="#">Our Publications</a> </li>
                                <li role="presentation"  ><a  href="#">PICB</a></li>
                                <li role="presentation"  ><a  href="#">PGG</a> </li>
                                <li role="presentation"  ><a  href="#">PGGPopulation Team</a> </li>
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
                            <li role="presentation"  ><a  href="#"> <span class="glyphicon glyphicon-globe"></span> WeAncestry </font></a> </li>
                    </ul> 
                </div>
                <!--div class="col-md-2">
                    <div class="login text-right">
                        <span class="glyphicon glyphicon-user"> </span><a href="login"> Login </a> <span>|</span> <a href="register">Register</a>
                    </div>
                 </div-->  
        </div>
    </div>

    <!--æ­£æåå®¹-->
    <div class="search-note">
        <div class="wrap">
            <p>Your search: Tibetan</p>
        </div>
    </div>
    <div class="wrap ">
        <h2 class="prof-head">The Tibetan people</h2>
        <!--profile section-->
        <section id="profile" class="col-md-12 section">
            <div class="prof-subhead text-center">
                <h3 >Population profile</h3> 
            </div>
            <div class="col-md-12">
                <div class="col-md-2 col" id="population-profile">
                    <p><a><img class="pop-profile" src="../images/population/tibetan.jpg"></img></a></p>
                    <p class="text-left">Photo Source: Anonymous</p>
                    <p class="text-left"><a class="btn btn-primary btn-lg" href="#" role="button">Send us a photo</a></p>
                </div>
                <div class="col-md-7 col">
                    <div class="prof-subhead2">
                        <h4>General</h4>
                        <p>The Tibetan people are an ethnic group that is native to Tibet. They number an estimate of 7.8 million. Significant Tibetan minorities also live outside of Tibet Autonomous Region (TAR) in China, and in India, Nepal, and Bhutan.</p>
                        <h4>Alias</h4>
                        <p>Tibetan</p>
                        <h4> Geography</h4>
                        <div class="panel panel-default">
                            <table class="table">
                                <tr >
                                    <td>Country</td>
                                    <td>Region</td>
                                    <td>Continent</td>
                                </tr>
                                <tr>
                                    <td>China</td>
                                    <td>East Asian</td>
                                    <td>Asian</td>
                                </tr>
                            </table>
                        </div>
                        <h4> Population size</h4>
                        <p>7500000</p>
                        <h4>Language</h4>
                        <p>Tibet-Burman, NNNNNNN, NNNNNNN</p>
                        <h4>Life Style</h4>
                        <p>Farmer?</p>
                        <h4>Outside resource</h4>
                        <p>Joshua project</p>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="gmap" id="gmap">
                </div>
            </div>
        </section>
        <section id="mtdnay" class="col-md-12 section">
            <div class="prof-subhead text-center">
                <h3 >Ethnicity by mtDNA and Y chromosome</h3> 
            </div>
            <div class="col-md-12" >
                <div class="col-md-6" id="pie-mtdna"></div>
                <div class="col-md-3"></div>
                <div class="col-md-3">
                    <p>This is for tree
                    <p><a><img class="mtdna-logo" src="../images/mtdna-example.png"></img></a></p>
                </div>
            </div>
            <p>Summary: The major haplotype for this population is type 1, which belong to XXXX ancestry.</p>
            <hr>
            <p>This is for Y chromosome</p>

            <br><br><br><br><br><br>
        </section>
        <section id="pca" class="col-md-12 section">
            <div class="prof-subhead text-center">
                <h3 >Population structure</h3> 
            </div>
        </section>
    </div>

<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="../bootstrap/js/jquery.min.js"></script>
<script src="../bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/pggpop.js">	</script>
<!--jquery å¼ç¨-->
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script> 
<!--è°·æ­å°å¾å¼ç¨ææ-->
<script src="http://maps.google.com/maps/api/js?sensor=false&libraries=geometry&v=3.7"></script>
<script src="../maplace/maplace.min.js"></script> 
</body>
</html>