<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link href="../public/css/bootstrap.min.css" rel="stylesheet">
    <link href="../public/css/nav.css" rel="stylesheet">
    <link href="../public/css/illustration.css" rel="stylesheet">
    <!-- <link rel="shortcut icon" href="./logo.ico"> -->
</head>
<body onload="checkFileAPI();">
    <jsp:include  page="nav.jsp"/>
    <div class="wrap">
        <div class="canvasContainer">
            <div class="canvasTitle">PCA showing...</div>
            <div class="canvasInfo">
                <div class="container"> 
                    <a href="javascript:;" class="file">ChoseFile
                        <input type="file" onchange='readText(this)'/>
                    </a>
                    <div class="showFileName">No Choices File</div>
                </div>
                <div class="canvasSummary">
                    <p>summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary</p>
                </div>
            </div>
            <div id="mainscatter"></div>
        </div>
        <div class="canvasContainer">
            <div class="canvasTitle">This is for Admixture analysis</div>
            <div class="canvasInfo">
                <div class="container"> 
                    <a href="javascript:;" class="file">ChoseFile
                        <input type="file" onchange='readBarText(this)' />
                    </a>
                    <div class="showBarFileName">No Choices File</div>
                </div>
                <div class="canvasSummary">
                    <p>summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary</p>
                </div>
            </div>
            <div id="mainbar"></div>
        </div>
        <div class="canvasContainer">
            <div class="canvasTitle">FST</div>
            <div class="canvasInfo">
                <div class="container">
                    <a href="javascript:;" class="file">ChoseFile
                        <input type="file" onchange='readPieText(this)' />
                    </a>
                    <div class="showPieFileName">No Choices File</div>
                    <select name="" id="people" class="hide"></select>
                </div>
                <div class="canvasSummary">
                    <p>summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary</p>
                </div>
            </div>
            <div id="classZ"></div>
            <div id="mainpie"></div>
        </div>
        <div class="canvasContainer">
            <div class="canvasTitle">PopTree</div>
            <div class="canvasInfo">
                <div class="container">    
                    <!-- <input type="file" onchange='readTreeText(this)' /> -->
                    <a href="javascript:;" class="file">ChoseFile
                        <input type="file" onchange='readTreeText(this)' />
                    </a>
                    <div class="showTreeFileName">No Choices File</div>
                    <select name="" id="treeImgSel" class="hide"></select>
                </div>
                <div class="canvasSummary">
                    <p>summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary</p>
                </div>
            </div>
            <div id="svgCanvas"> </div>
        </div>
    </div>
    <!-- <div class="footer">
        CAS-MAP Partner Institute for Computational Blology [PICB]. Copyright &copy; 2015-2017
    </div> -->
    <jsp:include  page="footer.jsp"/>
</body>
<script src="../public/js/jquery.min.js"></script>
<script src="../public/js/echarts.min.js"></script>
<script src="../public/js/raphael-min.js"></script>
<script src="../public/js/jsphylosvg-min.js"></script>
<script src="../public/js/nav.js"></script>
<script src="../public/js/illustration.js"></script>
<!-- <script>
    $(".file").on("change","input[type='file']",function(){
        var filePath=$(this).val();
        //console.log(filePath);
        var arr=filePath.split('\\');
        var fileName=arr[arr.length-1];
        $(".showFileName").html(fileName);
    })
</script> -->
</html>
