$(document).ready(function(){
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
          "value": "#dedede" //中心圆的颜色
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 20, //圆外边框的宽度
            "color": "#dedede" //圆外边框的颜色
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
          "distance": 200, //线长度
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

	var user = $("#email");

	var pwd  = $("#password");

	var checkEmail = $("#checkEmail");

	var checkPwd = $("#checkPwd");

	var myreg = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;  //邮箱正则

	//console.log(pwd.val());
	// if(pwd.val().trim().length>5){
	// 	checkPwd.html('');
	// }
	
	//邮箱校验
	user.bind('blur', function(){
		if(user.val().trim().length>0){
			if(!myreg.test(user.val())){
				checkEmail.html('Please enter a valid email！'); 
			}else{
				checkEmail.html('');
			}
		}
	})

	//密码校验
	pwd.bind('blur', function(){
		if(pwd.val().trim().length>5){
			checkPwd.html('');
		}
	})
	
	//$("#submit").attr('disabled', false);
	

	// var from = $.getUrlParam('from');

	$("#submit").click(function(){
		var flag = true;
		//邮箱校验
		//user.bind('input propertychange', function(){
			if(user.val().trim().length>0){
				if(!myreg.test(user.val())){
					checkEmail.html('Please enter a valid email！'); 
					flag = false;
				}else{
					checkEmail.html('');
				}
			}else{
				checkEmail.html('Please fill in the login email'); 
				flag = false;
			}
		//})

		//密码校验
		//pwd.bind('input propertychange', function(){
			if(pwd.val().trim().length>5){
				checkPwd.html('');
			}else{
				checkPwd.html('Please fill out six or more passwords'); 
				flag = false;
			}
		//})
		if(flag == false){
			return false;
		}

		$.ajax({
			type:"POST",
			url:"/dologin",
			dataType:'json',
			data:{email:user.val(),password:pwd.val()},
			//beforeSend:function(){$(".msg").html("正在登录中...");},
			success:function(data){
				//console.log(data);
				//$("#submit").button('reset');
				if(data.status==0){//success relocation
					//bootbox.alert(data.msg);
					//setCookie("email",user.val()); 
					window.location.href="/pggtools";
			    }else{
			    	bootbox.alert(data.msg);
			    }
			}
		});
	});

	$("#forgetPwd").click(function(){
		window.location.href="/forgetPwd"
	})
});
