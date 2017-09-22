$(function(){
    
    $("#gwas-step-model2").addClass('hide');
    $("#gwas-step-test2").addClass('hide');
    $(".gwas-character").change(function() {
        var $selectedvalue = $("input[name='gwas-character']:checked").val();
        // alert($selectedvalue);
        if ($selectedvalue == 'Binary') {
            if($("#covariates-file").val()){
                $("#gwas-step-test1").removeClass('hide');
                $("#gwas-test-for-binary").find("option[text='Logistic regression']").prop("selected",true); 
                $(".nocovariate").prop("selected",false); 
                $(".nocovariate").addClass('hide');
                $("#gwas-step-test2").addClass('hide');
                $("#gwas-step-model2").removeClass('hide');
                $("#gwas-step-model1").addClass('hide');
            }else{
                $("#gwas-step-test1").removeClass('hide');
                $(".nocovariate").removeClass('hide');
                $("#gwas-step-test2").addClass('hide');
                $("#gwas-step-model1").removeClass('hide');
                $("#gwas-step-model2").addClass('hide');
            }  
        } else {
            $("#gwas-step-model1").addClass('hide');
            $("#gwas-step-test1").addClass('hide');
            $("#gwas-step-model2").removeClass('hide');
            $("#gwas-step-test2").removeClass('hide');
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
            data: {from:1},
            success: function(res){
                var data = JSON.parse(res.content);
                //console.log(data);
                $.each(data, function(key, val) {  
                    $("#filebody").append("<tr>"+
                                            "<td class='file-select-all-check' style='width:30px;'>"+
                                                "<div style='width:30px;'><input type='checkbox' name='file_checkbox_"+val.name+"' class='file-single-checkbox' id='file_checkbox_"+val.id+"'/></div>"+
                                            "</td>"+
                                            "<td style='width:60px;'>"+
                                                "<div style='width:60px;'>" + val.id + "</div>"+
                                            "</td>"+
                                            "<td style='width:265px;'>"+
                                                "<div style='width:265px;'>" + val.name + "</div>"+
                                            "</td>"+
                                            "<td style='width:65px;'>"+
                                                "<div style='width:65px;'>" + val.size + "</div>"+
                                            "</td>"+
                                            "<td style='width:100px;'>"+
                                                "<div style='width:100px;'>" + val.datetime.substring(0,19) + "</div>"+
                                            "</td>"+
                                            "<td style='width:40px;'>"+
                                                "<div style='width:40px;'>" + val.status + "</div>"+
                                            "</td>"+
                                            "<td style='width:100%;'>" + val.md5 + "</td>"+
                                        "</tr>");
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
        var ped_data = "",map_data="",covariates_data = "";
        if($(".file-single-checkbox").length>0){
            for(var i=0; i<$(".file-single-checkbox").length; i++){
                var filename = "";
                if($(".file-single-checkbox")[i].checked){
                    filename = $(".file-single-checkbox")[i].name.substring(14);
                    if(filename.indexOf('.ped')!=-1){
                        ped_data += filename+',';
                        data += $(".file-single-checkbox")[i].id.substring(14)+',';
                    }else if(filename.indexOf('.map')!=-1){
                        map_data += filename+',';
                        data += $(".file-single-checkbox")[i].id.substring(14)+',';
                    }else if(filename.indexOf('.covariates')!=-1){
                        covariates_data += filename+',';
                        data += $(".file-single-checkbox")[i].id.substring(14)+',';
                    }
                }
            }
        }
        data = data.substring(0,data.length-1);
        $("#fileIdList").val(data);
        ped_data = ped_data.substring(0,ped_data.length-1);
        map_data = map_data.substring(0,map_data.length-1);
        covariates_data = covariates_data.substring(0,covariates_data.length-1);
        $("#ped-file").val(ped_data);
        $("#map-file").val(map_data);
        $("#covariates-file").val(covariates_data);
        if(covariates_data){
            if($("input[name='gwas-character']:checked").val() == 'Binary'){
                $("#gwas-step-test1").removeClass('hide');
                $("#gwas-test-for-binary").find("option[text='Logistic regression']").prop("selected",true); 
                $(".nocovariate").prop("selected",false); 
                $(".nocovariate").addClass('hide');
                $("#gwas-step-test2").addClass('hide');
                $("#gwas-step-model2").removeClass('hide');
                $("#gwas-step-model1").addClass('hide');
            }else{
                $("#gwas-step-test2").removeClass('hide');
                $("#gwas-step-test1").addClass('hide');
                $("#gwas-step-model2").removeClass('hide');
                $("#gwas-step-model1").addClass('hide');
            }
        }else{
            if($("input[name='gwas-character']:checked").val() == 'Binary'){
                $("#gwas-step-test1").removeClass('hide');
                $(".nocovariate").removeClass('hide');
                $("#gwas-step-test2").addClass('hide');
                $("#gwas-step-model1").removeClass('hide');
                $("#gwas-step-model2").addClass('hide');
            }else{
                $("#gwas-step-test2").removeClass('hide');
                $("#gwas-step-test1").addClass('hide');
                $("#gwas-step-model2").removeClass('hide');
                $("#gwas-step-model1").addClass('hide');
            }
        }
    })   

    //提交
    $("#submitBtn").click(function(){
        var chaType = $("input[name='gwas-character']:checked").val(); 
        var testType = "";
        var chooseModel = "";
        if($("input[name='gwas-character']:checked").val() == 'Binary' && $("#covariates-file").val()){
            testType = $("#gwas-test-for-binary option:selected").val();
            chooseModel = $("#model-panel-for-continues option:selected").val();
        }else if($("input[name='gwas-character']:checked").val() == 'Binary' && !$("#covariates-file").val()){
            testType = $("#gwas-test-for-binary option:selected").val();
            chooseModel = $("#model-panel-for-binary option:selected").val();
        }else{
            testType = $("#gwas-test-for-continues option:selected").val();
            chooseModel = $("#model-panel-for-binary option:selected").val();
        }
        var files = $("#fileIdList").val();
        var qcMaf = $("#maf").val();
        var qcImiss = $("#imiss").val();
        var qcSmiss = $("#smiss").val();
        var qcHwe = $("#hwe").val();
        var jobname = $("#jobname").val();    
            
        //console.log(testType+'--'+chooseModel+'--'+files+'--'+qcMaf+'--'+qcImiss+'--'+qcSmiss+'--'+qcHwe+'--'+jobname);return false;
        
        $.ajax({
            async: true,
            type: 'POST',
            url: '/addJob',
            xhrFields: {
               withCredentials: true
            },
            dataType: 'json',
            data: {chaType:chaType,files:files,testType:testType,model:chooseModel,qcMaf:qcMaf,qcImiss:qcImiss,qcSmiss:qcSmiss,qcHwe:qcHwe,jobname:jobname,from:1},
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
//  funclisterner()
// });
// var serverTaskSettingForm=document.getElementById('server-task-setting-form');
// var resultFilePick=document.getElementById('result-file-pick');
// var inputTraits=document.getElementsByClassName('result-trait');
// var inputModels=document.getElementsByClassName('result-model');
// var inputTests=document.getElementsByClassName('result-test');

// var i,j,k;

// for(i=0;i<inputTraits.length;i++){
//     inputTraits[i].addEventListener('click',function () {
//         if(this.getAttribute('id').toString().indexOf('binary')>=0){
//             enableInputModel(true,inputModels);
//         }else{
//             enableInputModel(false,inputModels);
//             enableInputTest(false,inputTests);
//         }
//     });
// }
// for(i=0;i<inputModels.length;i++){
//     inputModels[i].addEventListener('click',function () {
//         if(this.getAttribute('id').toString().indexOf('allelic')>=0){
//             enableInputTest(true,inputTests);
//         }else{
//             enableInputTest(false,inputTests);
//         }
//     });
// }

// serverTaskSettingForm.addEventListener('submit',function (event) {
//     event.preventDefault();
//     if(resultFilePick.value.indexOf('ped')<0){
//         popupMessage('File *.ped is required.');
//         return;
//     }
//     if(resultFilePick.value.indexOf('map')<0){
//         popupMessage('File *.map is required.');
//         return;
//     }
//     if(resultFilePick.value.indexOf('covariates')<0){
//         popupMessage('File *.covariates is required.');
//         return;
//     }
//     popupMessage('Task submitted successfully.');
// });

// function enableInputModel(isBinary,inputModels) {
//     for(var i=0;i<inputModels.length;i++){
//         inputModels[i].checked=false;
//         inputModels[i].disabled=false;
//         if(!isBinary){
//             if(inputModels[i].getAttribute('id').toString().indexOf('allelic')>=0){
//                 inputModels[i].disabled=true;
//             }
//         }
//     }
// }

// function enableInputTest(isAllelic, inputTests) {
//     for(var i=0;i<inputTests.length;i++){
//         inputTests[i].checked=false;
//         inputTests[i].disabled=false;
//         if(inputTests[i].getAttribute('id').toString().indexOf('chisquare')>=0){
//             if(!isAllelic){
//                 inputTests[i].disabled=true;
//             }
//         }else if(inputTests[i].getAttribute('id').toString().indexOf('fisher')>=0){
//             if(!isAllelic){
//                 inputTests[i].disabled=true;
//             }
//         }else if(inputTests[i].getAttribute('id').toString().indexOf('logistic-regression')>=0){
//             if(isAllelic){
//                 inputTests[i].disabled=true;
//             }
//         }else if(inputTests[i].getAttribute('id').toString().indexOf('linear-regression')>=0){
//             if(isAllelic){
//                 inputTests[i].disabled=true;
//             }
//         }
//     }
// }

// //模态框
// var windowInnerWidth=null;
// var windowInnerHeight=null;

// var modalPickFile=document.getElementById('modal-pick-file');
// var resultPickedCount=document.getElementById('result-picked-count');
// var containerFolderAndFile=document.getElementById('container-folder-and-file');
// var folderParent=document.getElementById('folder-parent');
// var switchDisplayType=document.getElementById('switch-display-type');
// var functionButton=document.getElementsByClassName('function-button');
// var resultPickedFile=document.getElementById('result-file-pick');
// var picked=[];
// var folders=null;
// var files=null;
// var foldersOrFiles=null;

// var foldersCount,filesCount;
// var pickedCount=0;
// var foldersOrFilesClassName='folder folder-or-file folder-or-file-row-view';
// var folderClassName='folder folder-or-file folder-or-file-row-view';
// var fileClassName='file folder-or-file folder-or-file-row-view';

// updateWindowInnerSize();
// updateModalPickFilePosition();

// document.getElementById('button-file-pick').addEventListener('click',function () {
//     document.getElementById('modal-pick-file-full-screen').style.display='block';
//     updateWindowInnerSize();
//     updateModalPickFilePosition();
//     openFolder();
// });

// document.getElementById('button-file-confirm').addEventListener('click',function () {
//     document.getElementById('modal-pick-file-full-screen').style.display='none';
// });

// document.getElementById('button-file-cancel').addEventListener('click',function () {
//     document.getElementById('modal-pick-file-full-screen').style.display='none';
// });

// window.addEventListener('resize',function () {
//     updateWindowInnerSize();
//     updateModalPickFilePosition();
// });

// switchDisplayType.style.backgroundImage='url("Public/image/row-display.png")';
// switchDisplayType.addEventListener('click',function () {
//     if(this.style.backgroundImage==='url("Public/image/row-display2.png")'){
//         this.style.backgroundImage='url("Public/image/block-display2.png")';
//         folderClassName='folder folder-or-file';
//         for(i=0;i<folders.length;i++){
//             folders[i].setAttribute('class',folderClassName);
//         }
//         fileClassName='file folder-or-file';
//         for(i=0;i<files.length;i++){
//             files[i].setAttribute('class',fileClassName);
//         }
//     }else{
//         this.style.backgroundImage='url("Public/image/row-display2.png")';
//         folderClassName='folder folder-or-file folder-or-file-row-view';
//         for(i=0;i<folders.length;i++){
//             folders[i].setAttribute('class',folderClassName);
//         }
//         fileClassName='file folder-or-file folder-or-file-row-view';
//         for(i=0;i<files.length;i++){
//             files[i].setAttribute('class',fileClassName);
//         }
//     }
// });
// switchDisplayType.addEventListener('mouseenter',function () {
//     if(this.style.backgroundImage==='url("Public/image/row-display.png")'){
//         this.style.backgroundImage='url("Public/image/row-display2.png")';
//     }
//     if(this.style.backgroundImage==='url("Public/image/block-display.png")'){
//         this.style.backgroundImage='url("Public/image/block-display2.png")';
//     }
// });
// switchDisplayType.addEventListener('mouseleave',function () {
//     if(this.style.backgroundImage==='url("Public/image/row-display2.png")'){
//         this.style.backgroundImage='url("Public/image/row-display.png")';
//     }
//     if(this.style.backgroundImage==='url("Public/image/block-display2.png")'){
//         this.style.backgroundImage='url("Public/image/block-display.png")';
//     }
// });
// folderParent.addEventListener('click',function () {
//     openFolder();
// });

// function getFolderAndFile() {
//     pickedCount=0;
//     picked=[];
//     resultPickedCount.innerText=pickedCount;
//     foldersCount=parseInt(Math.random()*9)+1;
//     filesCount=parseInt(Math.random()*9)+1;
//     var appendElemString="";
//     for(i=0;i<foldersCount;i++){
//         appendElemString+="<div class='"+folderClassName+"' title='Directory"+i+"'>"+
//             "<span class='f-icon folder-icon'></span>"+
//             "<span class='f-name folder-name'>Directory"+i+"</span>"+
//             "</div>";
//     }
//     for(i=0;i<filesCount;i++){
//         appendElemString+="<div class='"+fileClassName+"' title='Filename"+i+"' picked='unpicked'>"+
//             "<span class='f-icon file-icon'></span>"+
//             "<span class='f-name file-name'>Filename"+i+"</span>"+
//             "</div>";
//     }
//     containerFolderAndFile.innerHTML=appendElemString;
// }

// function getFolderAndFileElem() {
//     folders=document.getElementsByClassName('folder');
//     files=document.getElementsByClassName('file');
//     foldersOrFiles=document.getElementsByClassName('folder-or-file');
// }

// function eventPickFile() {
//     for(i=0;i<files.length;i++){
//         files[i].addEventListener('click',function () {
//             if(this.getAttribute('picked')==='picked'){
//                 this.style.backgroundColor='transparent';
//                 this.setAttribute('picked','unpicked');
//                 picked.splice(picked.indexOf(this.lastChild.innerText),1);
//                 resultPickedFile.value=picked.join();
//                 resultPickedCount.innerText=--pickedCount;
//             }else{
//                 this.style.backgroundColor='#23a1ff';
//                 this.setAttribute('picked','picked');
//                 picked.push(this.lastChild.innerText);
//                 resultPickedFile.value=picked.join();
//                 resultPickedCount.innerText=++pickedCount;
//             }
//         });
//         files[i].addEventListener('mouseenter',function () {
//             this.style.backgroundColor='#23a1ff';
//         });
//         files[i].addEventListener('mouseleave',function () {
//             if(this.getAttribute('picked')==='unpicked'){
//                 this.style.backgroundColor='transparent';
//             }
//         });
//     }
// }

// function eventOpenFolder() {
//     for(j=0;j<folders.length;j++){
//         folders[j].addEventListener('click',function () {
//             openFolder();
//         });
//     }
// }

// function openFolder() {
//     getFolderAndFile();
//     getFolderAndFileElem();
//     eventPickFile();
//     eventOpenFolder();
// }

// function updateWindowInnerSize() {
//     windowInnerWidth=window.innerWidth;
//     windowInnerHeight=window.innerHeight;
// }

// function updateModalPickFilePosition() {
//     modalPickFile.style.top=(windowInnerHeight-modalPickFile.offsetHeight)/2+'px';
// }