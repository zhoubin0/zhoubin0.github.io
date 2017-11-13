/**
 * Created by 周斌 on 2017/9/11/
 *
 * 首页js
 */


$(function () {
    /*  .load() 底层实现原理是ajax ,也就是说要想加载必须在服务模式下打开,否则,请用火狐浏览器 */
    $("#top").load("header.html");
    $("#footer").load("footer.html");

//      大  轮播图 开始

    !(function () {
        //获取每个  li
        var $nav_li = $(".nav_li");
//获取 每个span
        var $dian = $(".dian");
        var num = 0;
        var $banner_left = $(".banner_left")
        var $banner_right = $(".banner_right")
        fn();
        function fn() {
            if (num > 3) {
                num = 0;
            }
            $nav_li.eq(num).fadeIn().siblings().fadeOut();
            $dian.eq(num).addClass("now").siblings().removeClass("now")
            num++;
        }
        var a = setInterval(fn,6000);
        $dian.click(function () {
            clearInterval(a);
            var li_index = $(this).index();
            num = li_index;
            fn();
            a = setInterval(fn,6000)
        });
        $banner_left.click(function () {
            num--;
            if (num < 0) {
                num = 3;
            }
            fn();
        });
        $banner_right.click(function () {
            num++;
            if (num > 3) {
                num = 0;
            }
            fn();
        })


    })();



    // 大轮播图  结束

    //  左侧   小轮播图 开始

    !(function () {
        //获取每个  li
        var $left_li = $(".left_li");
//获取 每个span
        var $point = $(".point");
        var num = 0;
        var $jiantou_left = $(".jiantou_left");
        var $jiantou_right = $(".jiantou_right");

        left();


        function left() {
            if (num > 2) {
                num = 0;
            }
            $left_li.eq(num).fadeIn().siblings().fadeOut();
            $point.eq(num).addClass("now").siblings().removeClass("now")

            num++;
        }

        var a = setInterval(left, 3000);
        $point.click(function () {
            clearInterval(a);
            var li_index = $(this).index();
            num = li_index;
            left();
            a = setInterval(left, 3000)
        })


        //  左侧   小轮播图 结束


    })();
//左侧轮播图 结束





//   右侧  轮播图 开始

    !(function () {


        var $right_li = $(".right_li");

        var $point1= $(".point1_wrap>.point1");
        var num = 0;
        var $goumai_content=$(".goumai_content")
        var $jiantou1_left = $(".jiantou1_left");
        var $jiantou1_right = $(".jiantou1_right");

        right();

        function right() {
            if (num > 2) {
                num = 0;
            }
            $right_li.eq(num).fadeIn().siblings().fadeOut();
            $point1.eq(num).addClass("now").siblings().removeClass("now")

            num++;
        }

        var a = setInterval(right, 4500);

        $point1.click(function () {
            clearInterval(a);
            var li_index = $(this).index();
            num = li_index;
            right();
            a = setInterval(right, 4500)
        });
$goumai_content.mouseover(function () {
    $goumai_content.animate({})
})



    })();

//   右侧  轮播图 结束



//      倒计时
    var d=document.getElementById("dd")
    var h=document.getElementById("hh")
    var m=document.getElementById("mm")
    var s=document.getElementById("ss")



    function gett() {
        /*   抢购 2017-11-20-20:00:00:000  */

        // 现在时间
        var nowDate=new Date();
        //抢购时间
        var setDate=new Date(2017,10,20,20);
        // 相差的时间的毫秒值
        var time= setDate.getTime()-nowDate.getTime();

        // 把毫秒值转换成 **天**小时**分钟**秒
        var ss=time/1000;
        var dd=Math.floor(time/(24*60*60*1000));

        var hh=Math.floor(time/(60*60*1000))-dd*24;

        var mm=Math.floor(time/(60*1000))-(dd*24+hh)*60;

        var ss=Math.floor(time/1000)-((dd*24+hh)*60+mm)*60;


        function aa(a) {
            if(a<10){
                a="0"+a
            }
            return a
        }

        d.innerHTML=aa(dd);
        h.innerHTML=aa(hh);
        m.innerHTML=aa(mm);
        s.innerHTML=aa(ss);

    }
    setInterval(gett,1)

});



