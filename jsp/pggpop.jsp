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
    <br><br><br><br><br>
    <div class="wrap ">
        <p class="version text-right"><span class="label label-warning">Beta</span></p>
        <div class="jumbotron">
            <!--äººç¾¤å¾ç-->
            <div class="col-md-12  text-left" id="population-profile">
                <a><img class="profile" src="../images/population/luobu.jpeg"></img></a>
                <a><img class="profile" src="../images/population/daolang.jpeg"></img></a>
                <a><img class="profile" src="../images/population/uyghur.jpg"></img></a>
                <a><img class="profile" src="../images/population/tibetan.jpg"></img></a>
                <a><img class="profile" src="../images/population/sherpa.jpeg"></img></a>
                <a><img class="profile" src="../images/population/lizu.jpg"></img></a>
                <a><img class="profile" src="../images/population/tajik.jpg"></img></a>
                <a><img class="profile" src="../images/population/hui.png"></img></a>
                <!--&nbsp&nbsp&nbsp<a>>></a-->
            </div>
            <br><br><br><br><br><br><br><br><br><br>
            <h2><span class="pggpopulation"><i>PGG</i>Population:</span> The Human Population Demographic History Database</h2>
            <p>The goal of PGGPopulation is to understand humman population demographic history at population genomics and genetics level.
                With the database, you can explore (1) population structure, (2) genetic admixture, (3) local adaptation and (4) other demographic events for populations that interest of you.
            </p>
            <br>
            <!--æ£ç´¢äººç¾¤-->
            <h4> Explore a Population</h4>
            <form name="refForm" method="get">
                <input type="text" name="search_text" id="search_text" class="snpinput" placeholder="Tibetan">
                <input type="button"  id="search_button" value="GO" class="snpbuttom">
            </form>
            <h4> Jump to section for this Population</h4>

            <table id="table-section">
                    <tr>
                        <td><a href="">Basic</a></td>
                        <td><a href="">Language</a></td>
                        <td><a href="">Structure</a></td>
                        <td><a href="">Admixture</a></td>
                    </tr>
                    <tr>
                        <td><a href="">Ancestry</a></td>
                        <td><a href="">Local adaptation</a></td>
                        <td><a href="">Other</a></td>
                    </tr>
          </table>
        </div>
        <!--Statistics-->
        <div class="col-md-12">
            <input type="hidden" id="ances">
            <div class="col-md-4 statistics" id="test">  </div>
        </div>

        
    </div>

<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="../bootstrap/js/jquery.min.js"></script>
<script src="../bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/pggpop.js">	</script>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>  
</body>
</html>