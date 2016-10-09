$(document).ready(function(){
	//头部鼠标滑过事件
	$(".l1").hover(function(){
        $(".weather").toggle();
	});
	$(".l2").hover(function(){
        $(".me").toggle();
	});
	$(".l3").hover(function(){
        $(".set-up").toggle();
	});
	$(".more").hover(function(){
        $(".moreproduct").show();
        $(".moreproduct").mouseleave(function(){
        	$(".moreproduct").hide();
        });
	});
    //切换皮肤
    $(".changebg").click(function(){
         $(".background").slideDown(500);
    });
    $(".bg-t-rig").click(function(){
         $(".background").slideUp(500);
    });
    $('section').click(function(){
         $(".background").slideUp(500);
    });
     //划过事件
    $(".pic1").hover(function(){
         $(".pic1-font").toggle();
         $(".b-rig1").css("background-image","url(./lib/bb1.png)");
    });
    $(".pic21").hover(function(){
         $(".pic21-font").toggle();
         $(".b-rig1").css("background-image","url(./lib/bb2.png)");
    });
    $(".pic22").hover(function(){
         $(".pic22-font").toggle();
         $(".b-rig1").css("background-image","url(./lib/bb3.png)");
    });
    $(".pic31").hover(function(){
         $(".pic31-font").toggle();
         $(".b-rig1").css("background-image","url(./lib/bb4.png)");
    });
    $(".pic32").hover(function(){
         $(".pic32-font").toggle();
         $(".b-rig1").css("background-image","url(./lib/bb5.png)");
    });
    $(".pic33").hover(function(){
         $(".pic33-font").toggle();
         $(".b-rig1").css("background-image","url(./lib/bb6.png)");
    });
    $(".pic41").hover(function(){
         $(".pic41-font").toggle();
         $(".b-rig1").css("background-image","url(./lib/bb7.png)");
    });
    $(".pic42").hover(function(){
         $(".pic42-font").toggle();
         $(".b-rig1").css("background-image","url(./lib/bb8.png)");
    });
    $(".pic43").hover(function(){
         $(".pic43-font").toggle();
         $(".b-rig1").css("background-image","url(./lib/bb9.png)");
    });
        //点击事件
        var bgArr = [{
            value: "url(./lib/baidubg1.jpg)"
        },{ value: "url(./lib/baidubg2.jpg)"
        },{ value: "url(./lib/baidubg3.jpg)"
        },{ value: "url(./lib/baidubg4.jpg)"
        },{ value: "url(./lib/baidubg5.jpg)"
        },{ value: "url(./lib/baidubg6.jpg)"
        },{ value: "url(./lib/baidubg7.jpg)"
        },{ value: "url(./lib/baidubg8.jpg)"
        },{ value: "url(./lib/baidubg9.jpg)"
        }];
    function bgChange(number){
        $(".container").css("background-image",bgArr[number].value);
        $(".jQf").css("color","#fff");
        $("#logoimg").attr("src","./lib/img/logo.png");
        $("article").css("background","rgba(255,255,255,0.4)");
        localStorage.setItem("background-image",bgArr[number].value);
        localStorage.setItem("src","./lib/img/logo.png");
    }
    $(".pic1-font").click(function(){
        bgChange(0);
    });
    $(".pic21-font").click(function(){
        bgChange(1);
    });
    $(".pic22-font").click(function(){
        bgChange(2);
    });
    $(".pic31-font").click(function(){
        bgChange(3);
    });
    $(".pic32-font").click(function(){
        bgChange(4);
    });
    $(".pic33-font").click(function(){
        bgChange(5);
    });
    $(".pic41-font").click(function(){
        bgChange(6);
    });
    $(".pic42-font").click(function(){
        bgChange(7);
    });
    $(".pic43-font").click(function(){
      bgChange(8);
    });
    var m1 = $(".myinterest");
    var m2 = $(".recommend");
    var m3 = $(".daohang");
    var m4 = $(".shipin");
    var m5 = $(".gouwu");
    var m6 = $(".ao-yun");
    var m11 = $(".my-interest");
    var m22 = $(".miannews");
    var m33 = $(".navigation");
    var m44 = $(".video");
    var m55 = $(".shopping");
    var m66 = $(".aoyun");
	//导航栏点击切换事件
    function nav(n1,n2,n3,n4,n5,n6,n11,n12,n13,n14,n15,n16){
        n1.css({"background":"#9a9da0","color":"#fff"});
        n2.css({"background":"#fff","color":"#000"});
        n3.css({"background":"#fff","color":"#000"});
        n4.css({"background":"#fff","color":"#000"});
        n5.css({"background":"#fff","color":"#000"});
        n6.css({"background":"#fff","color":"#000"});
        n11.show();
        n12.hide();
        n13.hide();
        n14.hide();
        n15.hide();
        n16.hide();
    }
	$(".myinterest").click(function(){
		nav(m1,m2,m3,m4,m5,m6,m11,m22,m33,m44,m55,m66);
	});
	$(".recommend").click(function(){
        nav(m2,m1,m3,m4,m5,m6,m22,m11,m33,m44,m55,m66);
	});
	$(".daohang").click(function(){
		 nav(m3,m1,m2,m4,m5,m6,m33,m11,m22,m44,m55,m66);
	});
	$(".shipin").click(function(){
		 nav(m4,m1,m2,m3,m5,m6,m44,m11,m22,m33,m55,m66);
	});
	$(".gouwu").click(function(){
		 nav(m5,m1,m2,m4,m3,m6,m55,m11,m22,m44,m33,m66);
	});
	$(".ao-yun").click(function(){
        nav(m6,m1,m2,m4,m5,m3,m66,m11,m22,m44,m55,m33);
	});
	$(".set").click(function(){
        $(".mysett").fadeToggle(1000);
	});
	//固定定位
	$(function(){
         $(window).scroll(function(){
         	var formH = $(".form2").offset().top;
         	var scroH = $(this).scrollTop();
         	console.log(formH);
         	if(scroH >= formH){
         		$(".form").show();
         	}else if(scroH < formH){
         		$(".form").hide();
         	}
         })
	});
})
window.onload = function(){
    if(localStorage.getItem('background-image')){
        $(".container").css("background-image",localStorage.getItem('background-image'));
        $("#logoimg").attr("src","./lib/img/logo.png"),localStorage.getItem("src","./lib/img/logo.png");
    }
}