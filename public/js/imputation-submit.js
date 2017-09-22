$(function(){
	var urlPath = window.location.pathname;
	var myreg = /^\w{4}:\d{8}-\d{8}$/;  //textarea正则
	//chr1:12100000-12900000
	//textarea获取焦点
	$("#name").focus(function(){
		if(myreg.test($("#name").val())){
			$("#checkTextArea").html("");
		}else{
			$("#checkTextArea").html("请填写正确的格式");
		}
	});
	//textarea失去焦点
	$("#name").blur(function(){
		if(myreg.test($("#name").val()) || $("#name").val()==''){
			$("#checkTextArea").html("");
		}
	});

	//textarea内容改变实时出发事件
	$("#name").bind('input propertychange', function(){
		if(myreg.test($("#name").val())){
			$("#checkTextArea").html("");
		}else{
			$("#checkTextArea").html("请填写正确的格式");
		}
	})
	
	$("#imputation-step-reference2").addClass('hide');
	$("#imputation-step-tool2").addClass('hide');
	$(".imputation-function").change(function() {
		var $selectedvalue = $("input[name='imputation-function']:checked").val();
		// alert($selectedvalue);
		if ($selectedvalue == 'Phasing') {
			$("#imputation-step-reference2").addClass('hide');
			$("#imputation-step-tool2").addClass('hide');
			$("#imputation-step-reference1").removeClass('hide');
			$("#imputation-step-tool1").removeClass('hide');
		} else {
			$("#imputation-step-reference1").addClass('hide');
			$("#imputation-step-tool1").addClass('hide');
			$("#imputation-step-reference2").removeClass('hide');
			$("#imputation-step-tool2").removeClass('hide');
		}
	});

	//获取已上传文件列表
	$("#browseBtn").click(function(){
		$("#filebody").empty();
		$(".file-select-all").prop('checked', false);
		$(".file-single-checkbox").prop('checked', false);
		$('#fileModal').modal('show');
		$.ajax({
	        async: true, //异步
	        url: '/getAllFile',
	        xhrFields: {
	           withCredentials: true
	        },
	        dataType: 'json',
	        data: {from:urlPath.indexOf('gwas')>0?'1':'0'},
	        success: function(res){
	            var data = JSON.parse(res.content);
	            //console.log(data);
	            $.each(data, function(key, val) {  
	                $("#filebody").append("<tr><td class='file-select-all-check' style='width:30px;'><div style='width:30px;'><input type='checkbox' class='file-single-checkbox' id='file_checkbox_"+val.id+"'/></td><td style='width:60px;'><div style='width:60px;'>" + val.id + "</div></td><td style='width:265px;'><div style='width:265px;'>" + val.name + "</div></td><td style='width:65px;'><div style='width:65px;'>" + val.size + "</div></td><td style='width:100px;'><div style='width:100px;'>" + val.datetime.substring(0,19) + "</div></td><td style='width:40px;'><div style='width:40px;'>" + val.status + "</div></td><td style='width:100%;'>" + val.md5 + "</td></tr>");
	            });
	        },
	        error: function(msg){
	            //console.log(msg);
	        }
	    });
	})

	$(".file-select-all").click(function(){
		if($(".file-select-all").is(":checked")){
			$('.file-single-checkbox').prop("checked",true);
		}else{
			$('.file-single-checkbox').prop("checked",false);
		}
	})

	//选择要添加到Job的文件ID
	$("#choiceSure").click(function(){
		$('#fileModal').modal('hide');
		var data = "";
	    if($(".file-single-checkbox").length>0){
	        for(var i=0; i<$(".file-single-checkbox").length; i++){
	            if($(".file-single-checkbox")[i].checked){
	                data += $(".file-single-checkbox")[i].id.substring(14)+',';
	            }
	        }
	    }
	    data = data.substring(0,data.length-1);
	    $("#fileIdList").val(data);
	})

	//全选 checkbox
	$("#Phasing_all").change(function(){
		//console.log($("#Phasing_all").is(":checked"));
		if($("#Phasing_all").is(":checked")){
			$('input[name="checkbox"]').prop("checked",true);
		}else{
			$('input[name="checkbox"]').prop("checked",false);
		}
	});

	//重置checkbox
	$(".reset").click(function(){
		$("#Phasing_all").prop("checked", false);
		$("input[name='checkbox']").prop("checked",false);
	})

	//提交
	$("#submitBtn").click(function(){
		var chromosomesArr = new Array();
		$('input[name="checkbox"]:checked').each(function(){
			chromosomesArr.push($(this).val());
		});
		var tool = $("input[name='imputation-function']:checked").val(); 
		var files = $("#fileIdList").val();
		var chromosomes = chromosomesArr.join(',');
		var regions = $("#name").val();
		var reference = "";
		var select_tool = "";
		if(tool == 'Phasing'){
			reference = $("#reference-panel-for-phasing option:selected").val();
			select_tool = $("#imputation-tool-for-phasing option:selected").val();
		}
		if(tool == 'Imputation'){
			reference = $("#reference-panel-for-imputation option:selected").val();
			select_tool = $("#imputation-tool-for-imputation option:selected").val();
		}
		var jobname = $("#jobname").val();
		$.ajax({
			async: true,
			type: 'POST',
			url: '/addJob',
			xhrFields: {
	           withCredentials: true
	        },
			dataType: 'json',
			data: {tool:tool,files:files,chromosomes:chromosomes,Regions:regions,referenceType:reference,referPanel:select_tool,jobname:jobname,from:0},
			success: function(res){
				if(res.status == 0){
					window.location.reload();
				}
				alert(res.msg);
			}
		});
	})
})


// function switchFunction(functionName) {
//     var inputFunction=document.getElementsByClassName("imputation-function"); //获取function选择框
//     var imputref1=document.getElementById("imputation-step-reference1");
//     var imputref2=document.getElementById("imputation-step-reference2");
//     var imputtool1=document.getElementById("imputation-step-tool1");
//     var imputtool2=document.getElementById("imputation-step-tool2");
//     if(functionName==='phasing'){
//             inputFunction[0].checked=true;
//             inputFunction[1].checked=false;
//             imputref1.style.display='block';
//             imputtool1.style.display='block';
//             imputref2.style.display='none';
//             imputtool2.style.display='none';
//     }else{
//             inputFunction[0].checked=false;
//             inputFunction[1].checked=true;
//             imputref1.style.display='none';
//             imputtool1.style.display='none';
//             imputref2.style.display='block';
//             imputtool2.style.display='block';
//     }
// }

// //监听用户function选择
// function funclisterner(){
//     var inputFunction=document.getElementsByClassName("imputation-function"); //获取function选择框
//     for(i=0;i<inputFunction.length;i++){
//         inputFunction[i].addEventListener('click',function () {
//             if(this.getAttribute('id').toString().indexOf('phasing')>=0){
//                 switchFunction('phasing');
//             }else{
//                 switchFunction('imputation');
//             }
//         });
//     }
// }

// $(function(){
// 	funclisterner()
// });