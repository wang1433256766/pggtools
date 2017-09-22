var mainObj = document.getElementById('mainEcharts');
var myChart = echarts.init(document.getElementById('mainEcharts'));
// var circlex = mainObj.offsetWidth/2;
// var circley = mainObj.offsetHeight/2;
//myChart.showLoading();
//myChart.hideLoading();
var datas,links;
var categories = [];

option = {
    title: {
        text: 'Les Miserables',
        subtext: '',
        top: 'bottom',
        right: '10%',
        textStyle:{
            color: '#014884'
        }
    },
    graphic:[{
        type: 'circle',
        left: '10%',
        top: '75%'   
    }],
    legend: [{
        right: '5%',
        top: 'middle',
        orient: 'vertical',
        data: ''
    }],
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            //console.log(params);
            if (params.dataType == "edge") {    // is edge
                return params.data.mark;
            } else {    // is node
                return params.data.format_mark;
            }
        }
    },
    // animationDurationUpdate: 1500,
    // animationEasingUpdate: 'quinticInOut',
    series : [
        {
            name: 'Les Miserables', //用于tooltip显示，legend图例筛选，在setOption更新数据和配置项时用于指定对应的系列
            type: 'graph',
            layout: 'circular', //采用环形布局
            edgeSymbol: ['circle', 'arrow'],//线条起始标志
            circular: {
                rotateLabel: true //旋转标签，默认false不旋转
            },
            data: '',
            links: '',
            categories: '',//与lengend对应name
            roam: false,//是否开启鼠标缩放和平移漫游
            //draggable: true,//节点是否可拖拽，只在使用力引导布局时有用
            label: {  //图形上的文本标签，可用于说明图形的一些数据信息，如值，名称等
                normal: {
                    position: 'left', //标签的位置
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: 'source',//与源的颜色相同
                    width: 4,
                    opacity: 0.8, //图形透明度
                    curveness: 0.1 //边的曲度（0到1的范围，值越大，曲度越大）
                }
            }
        }
    ]
};

myChart.setOption(option);

$.get('/getConversion').done(function (data) {
    //console.log(data);
    var res = JSON.parse(data.content);
    datas = res.formatEntryList;
    links = res.formatScriptList;
    for (var i = 0; i < datas.length; i++) {
        categories[i] = {
            name: '格式' + (i+1)
        };
    }

    datas.forEach(function (node) {
        //console.log(node);
        //node.itemStyle = null;
        node.name = node.format_name;
        node.category = node.id-1;
        node.symbolSize = 60;
        node.label = {
            normal: {
                show: true  //显示对应格式标签
            }
        };
    });

    links.forEach(function(edge){
    	//console.log(edge);
    	edge.source = edge.format_from-1;
    	edge.target = edge.format_to-1;
    })
    
    myChart.setOption({
        legend: [{
            data: categories.map(function (a) {
                return a.name;
            })
        }],
        series: [{
            // 根据名字对应到相应的系列
            name: 'Les Miserables',
            type: 'graph',
            color:[{
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0, color: '#c23531' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#9f0200' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },{
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0, color: '#2f4554' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#001221' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },{
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0, color: '#61a0a8' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#2b6e75' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },{
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0, color: '#d48265' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#a14f32' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },{
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0, color: '#91c7ae' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#5e947a' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },{
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0, color: '#749f83' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#416c50' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },{
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0, color: '#ca8622' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#a85300' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },{
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0, color: '#bda29a' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#9a6f67' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },{
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0, color: '#6e7074' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#3b3f41' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },{
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0, color: '#546570' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#546570' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },{
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0, color: '#c4ccd3' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#c4ccd3' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }],
            data: datas,
            links: links,
            categories: categories,//与lengend对应name
        }]
    });

    myChart.on("mouseover", function (params){  
	    //console.log(option); 
	    var links_sub = [];
	    if(params.dataType == 'node'){
	        $.each(links, function(i,v){
	            if(parseInt(v.source) == parseInt(params.data.category)){
	                links_sub.push(v);
	            }
	        })
	        //option.series[0].links = links_sub;
	        myChart.setOption({
		        series: [{
		            // 根据名字对应到相应的系列
		            name: 'Les Miserables',
		            type: 'graph',
		            data: datas,
		            links: links_sub,
		            categories: categories,//与lengend对应name
		        }]
		    });
	    } 
	     
	});
	myChart.on("mouseout", function (params){
		//console.log(links);
	    //option.series[0].links = links;
	    if(params.dataType != 'node' && params.dataType != 'edge'){
	    	myChart.setOption({
		        series: [{
		            // 根据名字对应到相应的系列
		            name: 'Les Miserables',
		            type: 'graph',
		            data: datas,
		            links: links,
		            categories: categories,//与lengend对应name
		        }]
		    });
	    }
	     
	});

	myChart.on("click", function(params){
	    if(params.dataType == "edge"){
	    	// $.get('/downloadScript?id='+params.data.id).done(function (res) {
	    	// 	console.log(res);
	    	// })
            window.location.href = "/downloadScript?id="+params.data.id;
	    }else{
            myChart.setOption({
                series: [{
                    // 根据名字对应到相应的系列
                    name: 'Les Miserables',
                    type: 'graph',
                    data: datas,
                    links: links,
                    categories: categories,//与lengend对应name
                }]
            });
        }
	})
})



// function swap(array, first, second) {
//     var tmp = array[second];
//     array[second] = array[first];
//     array[first] = tmp;
//     return array; 
// }

