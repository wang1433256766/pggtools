<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="../public/css/bootstrap.min.css" rel="stylesheet">
        <link href="../public/css/nav.css" rel="stylesheet">
        <link href="../public/css/pggtool.css" rel="stylesheet">
        <style>
            /*.headline-bg.index-headline-bg {
                background:-webkit-linear-gradient(top,#0076d1,#5db8ff);
                background:-moz-linear-gradient(top,#0076d1,#5db8ff);
                background:-o-linear-gradient(top,#0076d1,#5db8ff);
                background:-ms-linear-gradient(top,#0076d1,#5db8ff);
                position: absolute;
                width: 100%;
                height:100%;
                top: 260px;
                background-size: cover;
                z-index: -1;
            }*/
            canvas {
              display: block;
              vertical-align: bottom;
            }

            /* ---- particles.js container ---- */

            #particles-js {
              position: absolute;
              width: 100%;
              height: 671px;
              top: 282px;
              background-color: #F5F8F9;/*#b61924;*/
              background-image: url("");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: 50% 50%;
              z-index: -1;
            }
        </style>
    </head>

<body>
    <!-- <div class="headline-bg index-headline-bg">
        <canvas id="waves" class="waves"></canvas>
    </div> -->  
    <div id="particles-js"></div>    
        <jsp:include  page="nav.jsp"/>
        
        <!--正文内容-->
        <div class="mainContent">
            <div class="mainContent-child-1">
            <!--pggtool 介绍 -->
            <h2>PGGTool: Servers and Toolkit on Population Genomics and Genetics.</h2>
            <p>This is description This is description This is description This is is description This is description This is description Thiss is description This is description This is description Thiss description This is description This is description This is description</p>
            </div>
        </div>
        <!--br><br-->
        <div class="sedmainContent">
            <div class="wrap">
                <div class="function-model model-1">
                    <div class="col-md-12 function-model-text">
                        <h3> Imputation Server</h3>
                        <p> Your Phasing and Imputatin Server</p>
                    </div>
                    <div class="function-model-child model-child-1">
                        <div class="col-md-12">
                            <h3><a href="/imputation">Learn more >> </a></h3>
                        </div>
                    </div>
                </div>
                <div class="function-model model-2">
                    <div class="col-md-12 function-model-text">
                        <h3> GWAS Server</h3>
                        <p> Do your GWAS study</p>
                    </div>
                    <div class="function-model-child model-child-2">
                        <div class="col-md-12">
                            <h3><a href="/gwas">Learn more >> </a></h3>
                        </div>
                    </div>
                </div>
                <div class="function-model model-3">
                    <div class="col-md-12 function-model-text">
                        <h3> Format Conversion</h3>
                        <p> Convert your data format to others.</p>
                    </div>
                    <div class="function-model-child model-child-3">
                        <div class="col-md-12">
                            <h3><a href="/conversion">Learn more >> </a></h3>
                        </div>
                    </div>
                </div>
                <div class="function-model model-4">
                    <div class="col-md-12 function-model-text">
                        <h3> Figure Illustration</h3>
                        <p> Illustrate the figure that you want</p>
                    </div>
                    <div class="function-model-child model-child-4">
                        <div class="col-md-12">
                            <h3><a href="/illustration">Learn more >> </a></h3>
                        </div>
                    </div>
                </div>
                <div class="function-model model-5">
                    <div class="col-md-12 function-model-text">
                        <h3> Tool Aggregation</h3>
                        <p> Tool Aggregation Tool Aggregation Tool Aggregation Tool Aggregation</p>
                    </div>
                    <div class="function-model-child model-child-5">
                        <div class="col-md-12">
                            <h3><a href="/aggregation">Learn more >> </a></h3>
                        </div>
                    </div>
                </div>
            
                <!--PGGSuite 系列-->

                    <!--h4> PGGSuite: The affiliated Databases</h4-->

                        <div class="curcle curcle-1"><div class="curcle-text"><i>PGG</i>.SV</div></div>
                        <!-- <p> <img src="../public/image/pop.proxy.png" height=100px width=120px /> -->


                        <div class="curcle curcle-2"><div class="curcle-text" style="margin-left:-25px;"><i>PGG</i>.Expression</div></div>
                        <!-- <p> <img src="../public/image/exp.proxy.png" height=100px width=120px /> -->


                        <div class="curcle curcle-3"><div class="curcle-text"><i>PGG</i>.SNV</div></div>
                        <!-- <p> <img src="../public/image/cnv.proxy.png" height=100px width=120px /> -->

                        <div class="curcle curcle-4"><div class="curcle-text"><i>PGG</i>.Tools</div></div>
                        <!-- <p> <img src="../public/image/pop.proxy.png" height=100px width=120px /> -->

                
            </div>

        <!--wrap end-->
        </div>

        <jsp:include  page="footer.jsp"/>
    
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="../public/js/jquery.min.js"></script>
        <script src="../public/js/bootstrap.min.js"></script>
        <script src="../public/js/particles.min.js"></script>
        <!-- <script src="../public/js/49f8daee.vendors.js"></script>
        <script src="../public/js/26f2fc0d.index.js"></script> -->
        <script src="../public/js/nav.js"></script>
        <script>
            $(function(){
                /* ---- particles.js config ---- */

                particlesJS("particles-js", {
                  "particles": {
                    "number": {
                      "value": 20, //点的数量
                      "density": { //密度
                        "enable": true,
                        "value_area": 800
                      }
                    },
                    "color": {
                      "value": "#cccccc" //中心圆的颜色
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 20, //圆外边框的宽度
                        "color": "#cccccc" //圆外边框的颜色
                      },
                      "polygon": {  //多边形
                        "nb_sides": 10
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": { //透明度
                      "value": 0.5,
                      "random": false, //随机的
                      "anim": {  //生动的
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 3,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 400, //线长度
                      "color": "#999999", //显得颜色
                      "opacity": 0.6,
                      "width": 1
                    },
                    "move": {
                      "enable": true,
                      "speed": 2, //运行速度
                      "direction": "none",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "grab"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 140,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
                });
            })
        </script>
</body>
