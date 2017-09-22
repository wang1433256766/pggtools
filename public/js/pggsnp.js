$(function(){
	var username = getCookie("email");
	if(username){
		$("#email").html(username);
	};

	//登出
	$("#logout").click(function(){
		 $.get('/logout',function (data) {
			delCookie("email");
			window.location.href = './login.html';
		 })
	})

	search_switch();
});

//读取cookie
function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]); 
    else 
        return null; 
}

//删除cookies 
function delCookie(name) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
} 

function submit_snp(target){
		snp = document.getElementById("search_text");
		var strings;
		var reg=/^\d+:\d+$/;
		var rsid=/^rs[0-9]*$/;
		if(snp.value!=""){
			if(reg.test(snp.value) || rsid.test(snp.value)){
				strings = "SNPSearch?";   
				strings += "snpid=" + escape(snp.value);
			//	strings += "#" + target;
				window.open(strings);
			}else{
				alert("error!");
			}
		}
	}


function submit_gene(target){
	gene = document.getElementById("search_text");
	var strings;
	if(gene.value!=""){
			strings = "GeneSearch?";   
			strings += "gene=" + escape(gene.value);
		//	strings += "#" + target;
			window.open(strings);
	}
}



function search_switch(){
	stat = document.getElementById("s_switch");
	text=document.getElementById("search_text");
	if(stat.checked){
		$("#search_button").removeAttr("onclick"); 
		$("#search_button").attr("onclick","submit_gene()");
		text.placeholder="ARF5";
		$("#search_text").removeAttr("onkeypress");
		$("#search_text").attr("onkeypress","if (event.keyCode == 13) submit_gene();");
	}else{
		$("#search_button").removeAttr("onclick"); 
		$("#search_button").attr("onclick","submit_snp('')");
		text.placeholder="rs1047626 or chr4:42003671";
		$("#search_text").removeAttr("onkeypress");
		$("#search_text").attr("onkeypress","if (event.keyCode == 13) submit_snp('');");
	}
}
