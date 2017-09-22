// var dataObject = {
//     newick: '(((Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2),(Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2),(Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2)),((Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2),(Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2),(Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2)),((Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2),(Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2),(Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2)),((Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2),(Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2),(Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2)),((Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2),(Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2),(Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2)),((Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2),(Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2),(Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2)),((Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2),(Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2),(Milk Foam:2,Macchiato:2,Brazilian:2,Brazilian:2)));'
// };
// phylocanvas = new Smits.PhyloCanvas(
//     dataObject,
//     'svgCanvas',
//     700, 600,
//     'circular'
// );

var reader; //GLOBAL File Reader object for demo purpose only
var myChartScatter = echarts.init(document.getElementById('mainscatter')); //散点图
var myChartBar = echarts.init(document.getElementById('mainbar')); //柱状图
var myChartPie = echarts.init(document.getElementById('mainpie')); //极行图
myChartScatter.showLoading();
myChartBar.showLoading();
myChartPie.showLoading();
var option = {
    title: {
        text: "",
        top: '15',
        left: 'left',
        textStyle: {
            color: '#014884'
        }
    },
    tooltip: {

    },
    xAxis: [{
        name: 'PC1',
        nameLocation: 'middle',
        nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 20
        },
        nameGap: 30,
        type: 'value',
        scale: true
    }],
    yAxis: [{
        name: 'PC2',
        nameLocation: 'middle',
        nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 20
        },
        nameGap: 50,
        type: 'value',
        scale: true
    }],
    series: [{
        name: 'PCA',
        type: 'scatter',
        large: true,
        symbolSize: 10,
        data: ''
    }]
};

optionbar = {
    title: {
        text: "",
        top: '15',
        left: 'left',
        textStyle: {
            color: '#014884'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    yAxis: {
        type: 'value',
        name: 'Proportion',
        nameRotate: 90,
        nameLocation: 'middle',
        nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 20
        },
        nameGap: 40
    },
    xAxis: {
        type: 'category',
        data: '',
        name: 'Populations and individuals',
        nameLocation: 'middle',
        nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 20
        },
        nameGap: 30
    },
    series: function() {
                var dataArr = [];
                for (var i=0; i<5; i++) {
                    var dataObj = {};
                    dataObj.name = 'color'+(i+1);
                    dataObj.type = 'bar';
                    dataObj.stack = '总量';
                    dataObj.label = {normal:{show:false,position:'insideRight'}};
                    dataObj.data = '';
                    dataArr.push(dataObj);
                }
                return dataArr;
            }()
};

optionpie = {
    title: {
        text: 'Fst',
        x: 'center',
        y: 'center'
    },
    tooltip: {
        trigger: 'item',
        position: ['48.5%', '49.2%'],
        backgroundColor: 'grey',
        showContent: true,
        textStyle: {
            color: 'black',
            fontWeight: 'bold'
        },
        formatter: "Fst-{b} : {c}",
        borderColor: 'black',
    },
    series: [{
            name: 'Fst',
            type: 'pie',
            radius: ['10%', '80%'],
            roseType: 'area',
            z: 2,
            color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622'],
            data: '',
            labelLine: {
                normal: {
                    show: true,
                    length: 30,
                    length2: 0,
                    smooth: true,
                    lineStyle: {
                        color: '#ffffff'
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#0000ff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }, {
            name: '最大刻度',
            type: 'pie',
            radius: ['80%', '81%'],
            roseType: 'area',
            z: 1,
            data: [{
                value: 1,
                name: '最大刻度'
            }],
            hoverAnimation: false, //关闭鼠标点上去的放大动画效果
            itemStyle: {
                normal: {
                    color: "#f8f8f8"
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            tooltip: {
                show: false
            }
        }, {
            name: '中间刻度',
            type: 'pie',
            radius: ['40%', '41%'],
            roseType: 'area',
            z: 1,
            data: [{
                value: 1,
                name: '中间刻度'
            }],
            hoverAnimation: false, //关闭鼠标点上去的放大动画效果
            itemStyle: {
                normal: {
                    color: "#f8f8f8"
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            tooltip: {
                show: false
            }
        }

    ]
};
myChartScatter.setOption(option);
myChartBar.setOption(optionbar);
myChartPie.setOption(optionpie);
//默认显示的图形
$.get('public/js/scartter.evec').done(function (resultData) {
    var dataObj = [];
    var peopleArr = [],
        classArr = [];
    var diffPeopleArr = [],
        diffClassArr = [];

    var lines = resultData.split(/[\r\n]+/g);
    for (var i = 1; i < lines.length - 1; i++) {
        var linesData = lines[i].replace(/\s+/g, ' ').split(' '); //将多个空格整合成一个空格，并按一个空格分割为数组
        if (linesData[0] != '') {
            dataObj.push(linesData.slice(1));
            peopleArr.push(linesData[11]);
            classArr.push(linesData[12]);
        } else {
            dataObj.push(linesData.slice(2));
            peopleArr.push(linesData[12]);
            classArr.push(linesData[13]);
        }
    }

    //获取不同的人群
    for (var i in peopleArr) {
        if (diffPeopleArr.indexOf(peopleArr[i]) == -1) {
            diffPeopleArr.push(peopleArr[i]);
        }
    }

    //获取不同的大洲
    for (var j in classArr) {
        if (diffClassArr.indexOf(classArr[j]) == -1) {
            diffClassArr.push(classArr[j]);
        }
    }

    var arr1 = [],
        arr2 = [];

    var firstLine = lines[0].replace(/\s+/g, ' ').split(' ');
    //console.log(firstLine);
    var xPercent = parseFloat(firstLine[2]) / (parseFloat(firstLine[3]) + parseFloat(firstLine[4]) + parseFloat(firstLine[5]) + parseFloat(firstLine[6]) + parseFloat(firstLine[7]) + parseFloat(firstLine[8]) + parseFloat(firstLine[9]) + parseFloat(firstLine[10]) + parseFloat(firstLine[11]));
    var yPercent = parseFloat(firstLine[3]) / (parseFloat(firstLine[3]) + parseFloat(firstLine[4]) + parseFloat(firstLine[5]) + parseFloat(firstLine[6]) + parseFloat(firstLine[7]) + parseFloat(firstLine[8]) + parseFloat(firstLine[9]) + parseFloat(firstLine[10]) + parseFloat(firstLine[11]));

    xPercent = xPercent.toString().slice(2, 4) + "." + xPercent.toString().slice(4, 6) + "%";
    yPercent = yPercent.toString().slice(2, 4) + "." + yPercent.toString().slice(4, 6) + "%";
 
    for (var cla in diffClassArr) {
        arr1 = [];
        for (var li in dataObj) {
            if (diffClassArr[cla] == dataObj[li][11]) {
                arr1.push(dataObj[li]);
            }
        }
        arr2.push(arr1);
    }
    myChartScatter.hideLoading();
    myChartScatter.setOption({
        legend: {
            show: true,
            right: '70',
            top: '15',
            data: diffClassArr
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.data[10] + "(" + params.seriesName + ")<br>x : " + params.data[0] + "<br>y : " + params.data[1];
            }
        },
        xAxis: [{
            name: 'PC1(' + xPercent + ')'
        }],
        yAxis: [{
            name: 'PC2(' + yPercent + ')'
        }],
        series: function() {
            var sclassArr = [];
            for (var diffc in diffClassArr) {
                var className = {};
                className.name = diffClassArr[diffc];
                className.type = 'scatter';
                className.data = arr2[diffc];
                sclassArr.push(className);
            }
            //console.log(sclassArr);
            return sclassArr;
        }()
    })
})
$.get('public/js/bar.out').done(function (resultData) {
    var dataObj_1 = [],
        dataObj_2 = [],
        dataObj_3 = [],
        dataObj_4 = [],
        dataObj_5 = [],
        dataObj_6 = [],
        dataObj_x = [];
    var diffX = []; //不同群体数组
    var lines = resultData.split(/[\r\n]+/g);
    for (var i = 0; i < lines.length - 1; i++) {
        var linesData = lines[i].replace(/\s+/g, ' ').split(' ') //将多个空格整合成一个空格，并按一个空格分割为数组
        dataObj_1.push({
            value: linesData[3],
            tipname: linesData[1]
        });
        dataObj_2.push({
            value: linesData[4],
            tipname: linesData[1]
        });
        dataObj_3.push({
            value: linesData[5],
            tipname: linesData[1]
        });
        dataObj_4.push({
            value: linesData[6],
            tipname: linesData[1]
        });
        dataObj_5.push({
            value: linesData[7],
            tipname: linesData[1]
        });
        dataObj_6.push({
            value: linesData[8],
            tipname: linesData[1]
        });
        dataObj_x.push(linesData[2]);
        //console.log(linesData.slice(2,4)); return false;
    }
    var arr1 = [],
        arr2 = [];
    for (var i in dataObj_x) {
        if (diffX.indexOf(dataObj_x[i]) == -1) {
            diffX.push(dataObj_x[i]);
        }
    }
    for (var j in diffX) {
        arr1 = [];
        for (var k in dataObj_x) {
            if (diffX[j] == dataObj_x[k]) {
                arr1.push(dataObj_x[k]);
            }
        }
        arr2.push(arr1.length);
    }
    //console.log(arr2);
    myChartBar.hideLoading();
    myChartBar.setOption({
        legend: {
            top: '15',
            right: '70',
            data: ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
        },
        grid: {
            bottom: 140
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(params) {
                //console.log(params); 
                var returnVal = params[0].data.tipname + "--" + params[0].name + "<br>";
                for (var parr in params) {
                    returnVal += params[parr].seriesName + " : " + params[parr].value + "<br>";
                }
                return returnVal;
            }
        },
        xAxis: {
            type: 'category',
            nameGap: 82,
            data: dataObj_x,
            axisTick: {
                interval: function(index, name) { //传递参数[index，data[index]]，返回true显示，返回false隐藏
                    //console.log(index+'---'+name);return false;
                    var sumTick = 0;
                    for (var a in arr2) {
                        if (index == sumTick) {
                            return true;
                        }
                        sumTick += arr2[a];
                    }
                }
            },
            axisLabel: {
                interval: function(index, name) {
                    //console.log(index+'---'+name);return false;
                    var sumLabel = 0;
                    for (var a in arr2) {
                        if (index == sumLabel) {
                            return true;
                        }
                        sumLabel += arr2[a];
                    }
                },
                rotate: 60
                    // showMinLabel: true,
                    // showMaxLabel: true
            }
        },
        yAxis: {
            max: 'dataMax' //将y轴坐标的最大刻度设为所有值里的最大值
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 100,
            orient: 'horizontal'

        }, {
            type: 'slider',
            show: true,
            //filterMode: 'filter'
            start: 0,
            end: 100,
            orient: 'horizontal'
        }],
        series: [{
            name: 'color1',
            type: 'bar',
            stack: 'one',
            data: dataObj_1
        }, {
            name: 'color2',
            type: 'bar',
            stack: 'one',
            data: dataObj_2
        }, {
            name: 'color3',
            type: 'bar',
            stack: 'one',
            data: dataObj_3
        }, {
            name: 'color4',
            type: 'bar',
            stack: 'one',
            data: dataObj_4
        }, {
            name: 'color5',
            type: 'bar',
            stack: 'one',
            data: dataObj_5
        }, {
            name: 'color6',
            type: 'bar',
            stack: 'one',
            data: dataObj_6
        }]
    }); 
})
$.get('public/js/pie.phyli').done(function (resultData) {
    myChartPie.hideLoading();
    var optionHtml = "";
    var dataArr = []; //所有行的数据组成的数组，数组内是所有行的对象
    var peopleArr = []; //所有行内不同人群的数组
    var peopleTempArr = [];//peopleTempArr表示所有行内所有人群的数据
    //定义颜色数组
    var ancesColor = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
    var lines = resultData.split(/[\r\n]+/g);
    for (var i = 0; i < lines.length-1; i++) {
        var dataObj = {};
        var linesData = lines[i].replace(/\s+/g, ' ').split(' '); //将多个空格整合成一个空格，并按一个空格分割为数组
        dataObj.pop1 = linesData[0];
        dataObj.pop2 = linesData[1];
        dataObj.fst = linesData[2];
        dataObj.ances = linesData[3];
        dataArr.push(dataObj); //所有行的数据组成的数组，数组内是所有行的对象
    }

    //对象数组根据多属性排序
    var sortAnces = function(prop1,prop2){
        return function(obj1, obj2){
            //prop1
            var val1 = obj1[prop1];
            var val2 = obj2[prop1];
            if(!isNaN(Number(val1)) && !isNaN(Number(val2))){//1.isNaN() 函数可用于判断其参数是否是 NaN;2.如果对象的值无法转换为数字，那么 Number() 函数返回 NaN。
                val1 = Number(val1);
                val2 = Number(val2);
            }
            //prop2
            var val3 = obj1[prop2];
            var val4 = obj2[prop2];
            if(!isNaN(Number(val3)) && !isNaN(Number(val4))){//1.isNaN() 函数可用于判断其参数是否是 NaN;2.如果对象的值无法转换为数字，那么 Number() 函数返回 NaN。
                val3 = Number(val3);
                val4 = Number(val4);
            }
            if (val1 < val2) {
                return -1;
            } else if (val1 > val2) {
                return 1;
            } else {
                if (val3 < val4) {
                    return -1;
                } else if (val3 > val4) {
                    return 1;
                } else {
                    return 0;
                }
            }  
        }
    }

    //获取所有行内不同人群的数据
    for(var j=0;j<dataArr.length;j++){ //peopleTempArr表示所有行内所有人群的数据
        peopleTempArr.push(dataArr[j].pop1);
    }
    for (var diffP in peopleTempArr) { //peopleArr表示所有行内不同人群的数据
        if (peopleArr.indexOf(peopleTempArr[diffP]) == -1) {
            peopleArr.push(peopleTempArr[diffP]);
        }
    }
    //peopleArr = peopleArr.unique();//数组去重,得到所有行内不同人群的数据
    //console.log(peopleArr);

    //将不同人群的数据添加到option框中
    for (var k=0;k<peopleArr.length;k++) {
        optionHtml += '<option value="' + k + '">' + peopleArr[k] + '</option>';
    }
    $("#people").html(optionHtml);
    $("#people").removeClass('hide');

    loadDiffPeople(dataArr,ancesColor,sortAnces);

    $("#people").change(function() {
        loadDiffPeople(dataArr,ancesColor,sortAnces);
    }) 
})
$.get('public/js/outtree.nwk').done(function (resultData) {
    var arr_data = [];
    var optionHtml = "";
    var alldata = [],
        allobj = {};
    var data_1 = [],
        data_2 = [],
        data_3 = [];
    var personArr = [],
        peopleArr = [],
        classArr = [];
    var string_data = resultData.split(/[\r\n]+/g).join('');
    arr_data = string_data.split(';');
    for(var i =0;i<arr_data.length-1;i++){
        optionHtml += '<option value="' + i + '">tree_' + i + '</option>';
    }
    $("#treeImgSel").html(optionHtml);
    $("#treeImgSel").removeClass('hide');
    //console.log(string_data);
    $("#svgCanvas").html("");
    Smits.PhyloCanvas.Render.Style = {
        /* Default Styles */
        //树形图 实线的style
        line: {
            "stroke": 'rgb(0,0,0)',
            "stroke-width": 1
        },
        text: {
            "font-family": 'Verdana',
            "font-size": 12,
            "text-anchor": 'end' // 对齐 start | middle | end | inherit
        },
        //circular形状的 实线style
        path: {
            "stroke": 'rgb(0,0,0)',
            "stroke-width": 1
        },
        //circular形状的 虚线style
        connectedDash: {
            "stroke": 'rgb(200,200,200)',
            "stroke-dasharray": ". " //创建虚线
        },
        //circular 环的style
        textSecantBg: {
            "fill": '#EEE', //环的背景色
            "stroke": '#DDD' //环的线的颜色
        },
        highlightedEdgeCircle: {
            "fill": 'red'
        },
        barChart: {
            fill: '#003300',
            stroke: '#DDD'
        }
    }; 

    phylocanvas = new Smits.PhyloCanvas(
        string_data,
        'svgCanvas',
        800, 560,
        'circular'
    );

    $("#treeImgSel").change(function() {
        var selectTree = $("#treeImgSel option:selected").val();
        for(var j =0;j<arr_data.length-1;j++){
            if (selectTree == j) {
                string_data = arr_data[j] + ";";
            }
        }
        //console.log(string_data);
        $("#svgCanvas").html("");
        phylocanvas = new Smits.PhyloCanvas(
            string_data,
            'svgCanvas',
            800, 560,
            'circular'
        );
    }) 
})


/**
 * Check for the various File API support.
 */
function checkFileAPI() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        reader = new FileReader();
        return true;
    } else {
        alert('The File APIs are not fully supported by your browser. Fallback required.');
        return false;
    }
}

/**
 * read text input
 */
function readText(filePath) {
    var dataObj = [];
    var peopleArr = [],
        classArr = [];
    var diffPeopleArr = [],
        diffClassArr = [];
    //console.log(filePath.files);
    var output = ""; //placeholder for text output
    if (filePath.files && filePath.files[0]) {
        $(".showFileName").html(filePath.files[0].name);
        reader.onload = function(e) {
            //console.log(e);
            output = e.target.result;
            var lines = output.split(/[\r\n]+/g);
            for (var i = 1; i < lines.length - 1; i++) {
                var linesData = lines[i].replace(/\s+/g, ' ').split(' '); //将多个空格整合成一个空格，并按一个空格分割为数组
                if (linesData[0] != '') {
                    dataObj.push(linesData.slice(1));
                    peopleArr.push(linesData[11]);
                    classArr.push(linesData[12]);
                } else {
                    dataObj.push(linesData.slice(2));
                    peopleArr.push(linesData[12]);
                    classArr.push(linesData[13]);
                }
            }

            //获取不同的人群
            for (var i in peopleArr) {
                if (diffPeopleArr.indexOf(peopleArr[i]) == -1) {
                    diffPeopleArr.push(peopleArr[i]);
                }
            }

            //获取不同的大洲
            for (var j in classArr) {
                if (diffClassArr.indexOf(classArr[j]) == -1) {
                    diffClassArr.push(classArr[j]);
                }
            }
            //console.log(diffClassArr);

            var arr1 = [],
                arr2 = [];

            //console.log(diffPeopleArr);
            //console.log(diffClassArr);

            var firstLine = lines[0].replace(/\s+/g, ' ').split(' ');
            //console.log(firstLine);
            var xPercent = parseFloat(firstLine[2]) / (parseFloat(firstLine[3]) + parseFloat(firstLine[4]) + parseFloat(firstLine[5]) + parseFloat(firstLine[6]) + parseFloat(firstLine[7]) + parseFloat(firstLine[8]) + parseFloat(firstLine[9]) + parseFloat(firstLine[10]) + parseFloat(firstLine[11]));
            var yPercent = parseFloat(firstLine[3]) / (parseFloat(firstLine[3]) + parseFloat(firstLine[4]) + parseFloat(firstLine[5]) + parseFloat(firstLine[6]) + parseFloat(firstLine[7]) + parseFloat(firstLine[8]) + parseFloat(firstLine[9]) + parseFloat(firstLine[10]) + parseFloat(firstLine[11]));

            xPercent = xPercent.toString().slice(2, 4) + "." + xPercent.toString().slice(4, 6) + "%";
            yPercent = yPercent.toString().slice(2, 4) + "." + yPercent.toString().slice(4, 6) + "%";

            if(diffClassArr.length<=1){ //如果用户大洲这一列没填，即diffClassArr=[""]
                for (var peo in diffPeopleArr) {
                    arr1 = [];
                    for (var lis in dataObj) {
                        if (diffPeopleArr[peo] == dataObj[lis][10]) {
                            arr1.push(dataObj[lis]);
                        }
                    }
                    arr2.push(arr1);
                }
                myChartScatter.setOption({
                    legend: {
                        show: true,
                        left: 'center',
                        top: '15',
                        data: diffPeopleArr
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params) {
                            return params.data[10] + "(" + params.seriesName + ")<br>x : " + params.data[0] + "<br>y : " + params.data[1];
                        }
                    },
                    xAxis: [{
                        name: 'PC1(' + xPercent + ')'
                    }],
                    yAxis: [{
                        name: 'PC2(' + yPercent + ')'
                    }],
                    series: function() {
                        var speopleArr = [];
                        for (var diffp in diffPeopleArr) {
                            var peopleName = {};
                            peopleName.name = diffPeopleArr[diffp];
                            peopleName.type = 'scatter';
                            peopleName.data = arr2[diffp];
                            speopleArr.push(peopleName);
                        }
                        return speopleArr;
                    }()
                })
            }else{
                if (diffPeopleArr.length >= 20) { //人群小于20显示人群，否则显示洲
                    for (var cla in diffClassArr) {
                        arr1 = [];
                        for (var li in dataObj) {
                            if (diffClassArr[cla] == dataObj[li][11]) {
                                arr1.push(dataObj[li]);
                            }
                        }
                        arr2.push(arr1);
                    }
                    myChartScatter.setOption({
                        legend: {
                            show: true,
                            left: 'center',
                            top: '15',
                            data: diffClassArr
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: function(params) {
                                return params.data[10] + "(" + params.seriesName + ")<br>x : " + params.data[0] + "<br>y : " + params.data[1];
                            }
                        },
                        xAxis: [{
                            name: 'PC1(' + xPercent + ')'
                        }],
                        yAxis: [{
                            name: 'PC2(' + yPercent + ')'
                        }],
                        series: function() {
                            var sclassArr = [];
                            for (var diffc in diffClassArr) {
                                var className = {};
                                className.name = diffClassArr[diffc];
                                className.type = 'scatter';
                                className.data = arr2[diffc];
                                sclassArr.push(className);
                            }
                            //console.log(sclassArr);
                            return sclassArr;
                        }()
                    })
                } else {
                    for (var peo in diffPeopleArr) {
                        arr1 = [];
                        for (var lis in dataObj) {
                            if (diffPeopleArr[peo] == dataObj[lis][10]) {
                                arr1.push(dataObj[lis]);
                            }
                        }
                        arr2.push(arr1);
                    }
                    myChartScatter.setOption({
                        legend: {
                            show: true,
                            left: 'center',
                            top: '15',
                            data: diffPeopleArr
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: function(params) {
                                return params.data[10] + "(" + params.seriesName + ")<br>x : " + params.data[0] + "<br>y : " + params.data[1];
                            }
                        },
                        xAxis: [{
                            name: 'PC1(' + xPercent + ')'
                        }],
                        yAxis: [{
                            name: 'PC2(' + yPercent + ')'
                        }],
                        series: function() {
                            var speopleArr = [];
                            for (var diffp in diffPeopleArr) {
                                var peopleName = {};
                                peopleName.name = diffPeopleArr[diffp];
                                peopleName.type = 'scatter';
                                peopleName.data = arr2[diffp];
                                speopleArr.push(peopleName);
                            }
                            return speopleArr;
                        }()
                    })
                }
            }

        }; //end onload()
        reader.readAsText(filePath.files[0]);
    } //end if html5 filelist support
    else if (ActiveXObject && filePath) { //fallback to IE 6-8 support via ActiveX
        try {
            reader = new ActiveXObject("Scripting.FileSystemObject");
            var file = reader.OpenTextFile(filePath, 1); //ActiveX File Object
            output = file.ReadAll(); //text contents of file
            file.Close(); //close file "input stream"
            displayContents(output);
        } catch (e) {
            if (e.number == -2146827859) {
                alert('Unable to access local files due to browser security settings. ' +
                    'To overcome this, go to Tools->Internet Options->Security->Custom Level. ' +
                    'Find the setting for "Initialize and script ActiveX controls not marked as safe" and change it to "Enable" or "Prompt"');
            }
        }
    } else { //this is where you could fallback to Java Applet, Flash or similar
        return false;
    }
    return true;
}
/**
 * read text input
 */
function readBarText(filePath) {
    var dataObj_1 = [],
        dataObj_2 = [],
        dataObj_3 = [],
        dataObj_4 = [],
        dataObj_5 = [],
        dataObj_6 = [],
        dataObj_x = [];
    var diffX = []; //不同群体数组
    //console.log(filePath.files);
    var output = ""; //placeholder for text output
    if (filePath.files && filePath.files[0]) {
        //$(".showFileName").html("");
        $(".showBarFileName").html(filePath.files[0].name);
        reader.onload = function(e) {
            //console.log(e);
            output = e.target.result;
            var lines = output.split(/[\r\n]+/g);
            for (var i = 0; i < lines.length - 1; i++) {
                var linesData = lines[i].replace(/\s+/g, ' ').split(' ') //将多个空格整合成一个空格，并按一个空格分割为数组
                dataObj_1.push({
                    value: linesData[3],
                    tipname: linesData[1]
                });
                dataObj_2.push({
                    value: linesData[4],
                    tipname: linesData[1]
                });
                dataObj_3.push({
                    value: linesData[5],
                    tipname: linesData[1]
                });
                dataObj_4.push({
                    value: linesData[6],
                    tipname: linesData[1]
                });
                dataObj_5.push({
                    value: linesData[7],
                    tipname: linesData[1]
                });
                dataObj_6.push({
                    value: linesData[8],
                    tipname: linesData[1]
                });
                dataObj_x.push(linesData[2]);
                //console.log(linesData.slice(2,4)); return false;
            }
            var arr1 = [],
                arr2 = [];
            for (var i in dataObj_x) {
                if (diffX.indexOf(dataObj_x[i]) == -1) {
                    diffX.push(dataObj_x[i]);
                }
            }
            for (var j in diffX) {
                arr1 = [];
                for (var k in dataObj_x) {
                    if (diffX[j] == dataObj_x[k]) {
                        arr1.push(dataObj_x[k]);
                    }
                }
                arr2.push(arr1.length);
            }
            //console.log(arr2);

            myChartBar.setOption({
                legend: {
                    top: '15',
                    left: 'right',
                    data: ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
                },
                grid: {
                    bottom: 140
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function(params) {
                        //console.log(params); 
                        var returnVal = params[0].data.tipname + "--" + params[0].name + "<br>";
                        for (var parr in params) {
                            returnVal += params[parr].seriesName + " : " + params[parr].value + "<br>";
                        }
                        return returnVal;
                    }
                },
                xAxis: {
                    type: 'category',
                    nameGap: 82,
                    data: dataObj_x,
                    axisTick: {
                        interval: function(index, name) { //传递参数[index，data[index]]，返回true显示，返回false隐藏
                            //console.log(index+'---'+name);return false;
                            var sumTick = 0;
                            for (var a in arr2) {
                                if (index == sumTick) {
                                    return true;
                                }
                                sumTick += arr2[a];
                            }
                        }
                    },
                    axisLabel: {
                        interval: function(index, name) {
                            //console.log(index+'---'+name);return false;
                            var sumLabel = 0;
                            for (var a in arr2) {
                                if (index == sumLabel) {
                                    return true;
                                }
                                sumLabel += arr2[a];
                            }
                        },
                        rotate: 60
                            // showMinLabel: true,
                            // showMaxLabel: true
                    }
                },
                yAxis: {
                    max: 'dataMax' //将y轴坐标的最大刻度设为所有值里的最大值
                },
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 100,
                    orient: 'horizontal'

                }, {
                    type: 'slider',
                    show: true,
                    //filterMode: 'filter'
                    start: 0,
                    end: 100,
                    orient: 'horizontal'
                }],
                series: [{
                    name: 'color1',
                    type: 'bar',
                    stack: 'one',
                    data: dataObj_1
                }, {
                    name: 'color2',
                    type: 'bar',
                    stack: 'one',
                    data: dataObj_2
                }, {
                    name: 'color3',
                    type: 'bar',
                    stack: 'one',
                    data: dataObj_3
                }, {
                    name: 'color4',
                    type: 'bar',
                    stack: 'one',
                    data: dataObj_4
                }, {
                    name: 'color5',
                    type: 'bar',
                    stack: 'one',
                    data: dataObj_5
                }, {
                    name: 'color6',
                    type: 'bar',
                    stack: 'one',
                    data: dataObj_6
                }]
            });

        }; //end onload()
        reader.readAsText(filePath.files[0]);
    } //end if html5 filelist support
    else if (ActiveXObject && filePath) { //fallback to IE 6-8 support via ActiveX
        try {
            reader = new ActiveXObject("Scripting.FileSystemObject");
            var file = reader.OpenTextFile(filePath, 1); //ActiveX File Object
            output = file.ReadAll(); //text contents of file
            file.Close(); //close file "input stream"
            displayContents(output);
        } catch (e) {
            if (e.number == -2146827859) {
                alert('Unable to access local files due to browser security settings. ' +
                    'To overcome this, go to Tools->Internet Options->Security->Custom Level. ' +
                    'Find the setting for "Initialize and script ActiveX controls not marked as safe" and change it to "Enable" or "Prompt"');
            }
        }
    } else { //this is where you could fallback to Java Applet, Flash or similar
        $(".showFileName").html('未选择任何文件');
        return false;
    }
    return true;
}

/**
 * read text input
 */
function readPieText(filePath) {
    var optionHtml = "";
    var dataArr = []; //所有行的数据组成的数组，数组内是所有行的对象
    var peopleArr = []; //所有行内不同人群的数组
    var peopleTempArr = [];//peopleTempArr表示所有行内所有人群的数据
    //定义颜色数组
    var ancesColor = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
    var output = ""; //placeholder for text output
    if (filePath.files && filePath.files[0]) {
        $(".showPieFileName").html(filePath.files[0].name);
        reader.onload = function(e) {
            //console.log(e);
            output = e.target.result;
            var lines = output.split(/[\r\n]+/g);
            for (var i = 0; i < lines.length-1; i++) {
                var dataObj = {};
                var linesData = lines[i].replace(/\s+/g, ' ').split(' '); //将多个空格整合成一个空格，并按一个空格分割为数组
                dataObj.pop1 = linesData[0];
                dataObj.pop2 = linesData[1];
                dataObj.fst = linesData[2];
                dataObj.ances = linesData[3];
                dataArr.push(dataObj); //所有行的数据组成的数组，数组内是所有行的对象
            }

            //对象数组根据多属性排序
            var sortAnces = function(prop1,prop2){
                return function(obj1, obj2){
                    //prop1
                    var val1 = obj1[prop1];
                    var val2 = obj2[prop1];
                    if(!isNaN(Number(val1)) && !isNaN(Number(val2))){//1.isNaN() 函数可用于判断其参数是否是 NaN;2.如果对象的值无法转换为数字，那么 Number() 函数返回 NaN。
                        val1 = Number(val1);
                        val2 = Number(val2);
                    }
                    //prop2
                    var val3 = obj1[prop2];
                    var val4 = obj2[prop2];
                    if(!isNaN(Number(val3)) && !isNaN(Number(val4))){//1.isNaN() 函数可用于判断其参数是否是 NaN;2.如果对象的值无法转换为数字，那么 Number() 函数返回 NaN。
                        val3 = Number(val3);
                        val4 = Number(val4);
                    }
                    if (val1 < val2) {
                        return -1;
                    } else if (val1 > val2) {
                        return 1;
                    } else {
                        if (val3 < val4) {
                            return -1;
                        } else if (val3 > val4) {
                            return 1;
                        } else {
                            return 0;
                        }
                    }  
                }
            }

            //获取所有行内不同人群的数据
            for(var j=0;j<dataArr.length;j++){ //peopleTempArr表示所有行内所有人群的数据
                peopleTempArr.push(dataArr[j].pop1);
            }
            for (var diffP in peopleTempArr) { //peopleArr表示所有行内不同人群的数据
                if (peopleArr.indexOf(peopleTempArr[diffP]) == -1) {
                    peopleArr.push(peopleTempArr[diffP]);
                }
            }
            //peopleArr = peopleArr.unique();//数组去重,得到所有行内不同人群的数据
            //console.log(peopleArr);

            //将不同人群的数据添加到option框中
            for (var k=0;k<peopleArr.length;k++) {
                optionHtml += '<option value="' + k + '">' + peopleArr[k] + '</option>';
            }
            $("#people").html(optionHtml);
            $("#people").removeClass('hide');

            loadDiffPeople(dataArr,ancesColor,sortAnces);

            $("#people").change(function() {
                loadDiffPeople(dataArr,ancesColor,sortAnces);
            })

        }; //end onload()
        reader.readAsText(filePath.files[0]);
    } //end if html5 filelist support
    else if (ActiveXObject && filePath) { //fallback to IE 6-8 support via ActiveX
        try {
            reader = new ActiveXObject("Scripting.FileSystemObject");
            var file = reader.OpenTextFile(filePath, 1); //ActiveX File Object
            output = file.ReadAll(); //text contents of file
            file.Close(); //close file "input stream"
            displayContents(output);
        } catch (e) {
            if (e.number == -2146827859) {
                alert('Unable to access local files due to browser security settings. ' +
                    'To overcome this, go to Tools->Internet Options->Security->Custom Level. ' +
                    'Find the setting for "Initialize and script ActiveX controls not marked as safe" and change it to "Enable" or "Prompt"');
            }
        }
    } else { //this is where you could fallback to Java Applet, Flash or similar
        return false;
    }
    return true;
}

function readTreeText(filePath) {
    var arr_data = [];
    var optionHtml = "";
    var alldata = [],
        allobj = {};
    var data_1 = [],
        data_2 = [],
        data_3 = [];
    var personArr = [],
        peopleArr = [],
        classArr = [];
    var output = ""; //placeholder for text output
    if (filePath.files && filePath.files[0]) {
        $(".showTreeFileName").html(filePath.files[0].name);
        reader.onload = function(e) {
            //console.log(e);
            output = e.target.result;
            var string_data = output.split(/[\r\n]+/g).join('');
            arr_data = string_data.split(';');
            for(var i =0;i<arr_data.length-1;i++){
                optionHtml += '<option value="' + i + '">tree_' + i + '</option>';
            }
            $("#treeImgSel").html(optionHtml);
            $("#treeImgSel").removeClass('hide');
            //console.log(string_data);
            $("#svgCanvas").html("");
            Smits.PhyloCanvas.Render.Style = {
                /* Default Styles */
                //树形图 实线的style
                line: {
                    "stroke": 'rgb(0,0,0)',
                    "stroke-width": 1
                },
                text: {
                    "font-family": 'Verdana',
                    "font-size": 12,
                    "text-anchor": 'end' // 对齐 start | middle | end | inherit
                },
                //circular形状的 实线style
                path: {
                    "stroke": 'rgb(0,0,0)',
                    "stroke-width": 1
                },
                //circular形状的 虚线style
                connectedDash: {
                    "stroke": 'rgb(200,200,200)',
                    "stroke-dasharray": ". " //创建虚线
                },
                //circular 环的style
                textSecantBg: {
                    "fill": '#EEE', //环的背景色
                    "stroke": '#DDD' //环的线的颜色
                },
                highlightedEdgeCircle: {
                    "fill": 'red'
                },
                barChart: {
                    fill: '#003300',
                    stroke: '#DDD'
                }
            }; 

            phylocanvas = new Smits.PhyloCanvas(
                string_data,
                'svgCanvas',
                800, 560,
                'circular'
            );

            $("#treeImgSel").change(function() {
                var selectTree = $("#treeImgSel option:selected").val();
                for(var j =0;j<arr_data.length-1;j++){
                    if (selectTree == j) {
                        string_data = arr_data[j] + ";";
                    }
                }
                //console.log(string_data);
                $("#svgCanvas").html("");
                phylocanvas = new Smits.PhyloCanvas(
                    string_data,
                    'svgCanvas',
                    800, 560,
                    'circular'
                );
            })

        }; //end onload()
        reader.readAsText(filePath.files[0]);
    } //end if html5 filelist support
    else if (ActiveXObject && filePath) { //fallback to IE 6-8 support via ActiveX
        try {
            reader = new ActiveXObject("Scripting.FileSystemObject");
            var file = reader.OpenTextFile(filePath, 1); //ActiveX File Object
            output = file.ReadAll(); //text contents of file
            file.Close(); //close file "input stream"
            displayContents(output);
        } catch (e) {
            if (e.number == -2146827859) {
                alert('Unable to access local files due to browser security settings. ' +
                    'To overcome this, go to Tools->Internet Options->Security->Custom Level. ' +
                    'Find the setting for "Initialize and script ActiveX controls not marked as safe" and change it to "Enable" or "Prompt"');
            }
        }
    } else { //this is where you could fallback to Java Applet, Flash or similar
        return false;
    }
    return true;
}

function loadDiffPeople(dataArr,ancesColor,sortAnces){
    var personArr = []; //属于同一人群的所有数据
    var ancesTempArr = []; //同一人群中所有的祖先数据
    var ancesArr = []; //同一人群中不同祖先的数据
    var selectPeople = $("#people option:selected").text();
    //根据option的选择，获取所选择人群的所有数据
    for (var p=0;p<dataArr.length;p++) {
        if (selectPeople == dataArr[p].pop1) {
            personArr.push(dataArr[p]); //personArr是属于同一人群的所有数据
        }else{
            if (selectPeople == dataArr[p].pop2) {
                var tempDataArr = dataArr[p];
                tempDataArr.pop2 = tempDataArr.pop1;
                tempDataArr.pop1 = selectPeople;
                personArr.push(tempDataArr);
            }
        }
    }
    personArr.sort(sortAnces("ances","fst"));   

    //获取同一人群不同祖先的数据
    for(var q in personArr){
        ancesTempArr.push(personArr[q].ances); //同一人群所有祖先的数据
    }
    for (var diffA in ancesTempArr) { //ancesArr表示同一人群内不同祖先的数据
        if (ancesArr.indexOf(ancesTempArr[diffA]) == -1) {
            ancesArr.push(ancesTempArr[diffA]);
        }
    }
    //ancesArr = ancesArr.unique(); //同一人群不同祖先的数据
    //console.log(ancesArr);

    //给不同的祖先分配不同的颜色
    for(var r in ancesArr){
        for(var o in personArr){
            if(personArr[o].ances == ancesArr[r]){
                personArr[o].color = ancesColor[r];
            }
        }
    }
    
    var classZ = '';
    $("#classZ").html('');
    //加legend按钮
    for (var a=0; a<ancesArr.length;a++) {
        classZ += '<button class="legendsty" value="'+ancesArr[a]+'" name="'+ancesColor[a]+'" style="background:'+ancesColor[a]+';"><p>' + ancesArr[a] + '</p></button>';
    }
    $("#classZ").html(classZ);
    loadEcharts(personArr);
    var nochange_personArr = personArr;

    //点击legend
    $(".legendsty").click(function(){
        var partPersonArr = get(nochange_personArr, 'ances', this.value);
        var soureColor = this.name;
        if(this.style.background != 'rgb(238, 238, 238)'){
            this.style.background = '#eeeeee';
            personArr = remove(personArr, 'ances', this.value);
            personArr.sort(sortAnces("ances","fst"));
            loadEcharts(personArr);
        }else{
            this.style.background = soureColor;
            Array.prototype.push.apply(personArr, partPersonArr);
            personArr.sort(sortAnces("ances","fst"));
            loadEcharts(personArr);
        }
    })
    
}

function loadEcharts(personArr){
    var flagAA;
    if (personArr.length > 30) {
        flagAA = false;
    } else {
        flagAA = true;
    }
    myChartPie.setOption({
        title: {
            text: 'AA',
        },
        tooltip: {
            trigger: 'item',
            formatter: "AA-{b} : {c}"
        },
        series: [{
            name: 'Fst',
            type: 'pie',
            color: function(){
                var color = [];
                for(var i in personArr){
                    color.push(personArr[i].color);
                }
                return color;
            }(),
            data: function(){
                var data = [];
                for(var i in personArr){
                    data.push({'name':personArr[i].pop2,'value':personArr[i].fst});
                }
                return data;
            }(),
            labelLine: {
                normal: {
                    show: flagAA,
                    length: 30,
                    length2: 0,
                    smooth: true,
                    lineStyle: {
                        color: '#ffffff'
                    }
                },
                emphasis: {
                    show: flagAA
                }
            },
            label: {
                normal: {
                    show: flagAA,
                    textStyle: {
                        color: '#0000ff'
                    }
                },
                emphasis: {
                    show: flagAA
                }
            },
            itemStyle: {
                normal: {
                    //color: "#ff0000",
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    });
}

/**
 * 从对象数组中删除属性为objPropery，值为objValue元素的对象
 * @param Array arrPerson  数组对象
 * @param String objPropery  对象的属性
 * @param String objPropery  对象的值
 * @return Array 过滤后数组
 */
function remove(arrPerson, objPropery, objValue) {
    return $.grep(arrPerson, function(cur, i) {
        return cur[objPropery] != objValue;
    });
}

/**
 * 从对象数组中获取属性为objPropery，值为objValue元素的对象
 * @param Array arrPerson  数组对象
 * @param String objPropery  对象的属性
 * @param String objPropery  对象的值
 * @return Array 过滤后的数组
 */
function get(arrPerson, objPropery, objValue) {
    return $.grep(arrPerson, function(cur, i) {
        return cur[objPropery] == objValue;
    });
}
