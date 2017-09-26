/**
 * Created by YorkZhou on 2017-05-06.
 */
var baseIP='http://192.168.1.104/';
var loadingCircle='<img src="./Public/image/loading.png" class="loading-circle">';
var xmlHttp=new XMLHttpRequest();
var currentForm,formData;

var windowInnerWidth=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowInnerHeight=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//test auto push git
// setCookie('username','yorkzhou',10);
// if(getCookie('username')===''){
//     document.getElementById('tag-sign-container').style.display='inline-block';
//     document.getElementById('tag-username-container').style.display='none';
// }else{
//     document.getElementById('tag-username').innerText=getCookie('username');
//     document.getElementById('tag-sign-container').style.display='none';
//     document.getElementById('tag-username-container').style.display='inline-block';
// }

//弹窗
var popupTicker;
function popupMessage(msg,delay) {
    var timer;
    if(delay===undefined){
        timer=2000;
    }else{
        timer=parseInt(delay);
    }
    document.getElementById('popup').style.display="block";
    document.getElementById('popup-content').innerHTML=msg;
    popupTicker=setTimeout(function () {
        document.getElementById('popup').style.display="none";
    },timer);
}
document.getElementById('popup-close').addEventListener('click',function () {
    document.getElementById('popup').style.display="none";
    clearTimeout(popupTicker);
});

function isEmail(strEmail) {
    if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1){
        return true;
    }else{
        return false;
    }
}

function isPhoneNumber(phoneNum) {
    var reg = /^1[3|4|5|7|8][0-9]{9}$/;
    return reg.test(phoneNum);
}

function setCookie(cname, cvalue, exSeconds) {
    var d = new Date();
    d.setTime(d.getTime() + (exSeconds*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

// var topNavbarHeight=document.getElementById('header').offsetHeight;
// var bottomCopyRightHeight=document.getElementById('footer').offsetHeight;
