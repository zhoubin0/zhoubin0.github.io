/**
 * Created by 周斌 on 2017/9/11/
 *
 * 单品 js
 */


$(function () {
    /*  .load() 底层实现原理是ajax ,也就是说要想加载必须在服务模式下打开,否则,请用火狐浏览器 */
    $("#top").load("header.html");
    $("#foot").load("footer.html");


    //点击 小图  换大图  开始


    $(function () {
        var $xiaotu_img01 = $(".xiaotu_img01");
        var $xiaotu_img02 = $(".xiaotu_img02");
        var $xiaotu_img03 = $(".xiaotu_img03");
        var $xiaotu_img04 = $(".xiaotu_img04");
        var $xiaotu_img05 = $(".xiaotu_img05");
        var $baise_img01=$(".baise_img01");
        var $baise_img02=$(".baise_img02");
        var $baise_img03=$(".baise_img03");
        var $baise_img04=$(".baise_img04");
        var $baise_img05=$(".baise_img05");


var $img =$(".datu>.heisedatu_img");
        var $baiseimg =$(".datu>.baisedatu_img");
var $li=$(".heisexiao_img>li");
var $li_01=$(".baisexiao_img>li");


        $xiaotu_img01.click(function () {
            $img.attr("src","./imgs/11731101_4_01.jpg");
            $li.removeClass("now").eq(0).addClass("now");

        });
        $xiaotu_img02.click(function () {
            $img.attr("src","./imgs/11731101_4_02.jpg");
            $li.removeClass("now").eq(1).addClass("now");

        });
        $xiaotu_img03.click(function () {
            $img.attr("src","./imgs/11731101_4_03.jpg");
            $li.removeClass("now").eq(2).addClass("now");

        });
        $xiaotu_img04.click(function () {
            $img.attr("src","./imgs/11731101_4_04.jpg");
            $li.removeClass("now").eq(3).addClass("now");

        });
        $xiaotu_img05.click(function () {
            $img.attr("src","./imgs/11731101_4_05.jpg");
            $li.removeClass("now").eq(4).addClass("now");

        });

        $baise_img01.click(function () {
            $baiseimg.attr("src","./imgs/baise_01.jpg");
            $li_01.removeClass("now").eq(0).addClass("now");

        });

        $baise_img02.click(function () {
            $baiseimg.attr("src","./imgs/baise_02.jpg");
            $li_01.removeClass("now").eq(1).addClass("now");

        });

        $baise_img03.click(function () {
            $baiseimg.attr("src","./imgs/baise_03.jpg");
            $li_01.removeClass("now").eq(2).addClass("now");

        });

        $baise_img04.click(function () {
            $baiseimg.attr("src","./imgs/baise_04.jpg");
            $li_01.removeClass("now").eq(3).addClass("now");

        });

        $baise_img05.click(function () {
            $baiseimg.attr("src","./imgs/baise_05.jpg");
            $li_01.removeClass("now").eq(4).addClass("now");

        });



    });

    //点击 小图  换大图  结束




    //点击小图  换ul


    $(function () {

        var $heisecoler = $(".heisecoler");
        var $baisecoler = $(".baisecoler");
        var $heisexiao_img = $(".heisexiao_img");
        var $baisexiao_img = $(".baisexiao_img");
        var $baisedatu_img = $(".baisedatu_img");
        var $heisedatu_img = $(".heisedatu_img");
var $li_02 =$(".right_yanse>ul>li");
        $baisecoler.click(function () {
            $heisexiao_img.css({display: "none"});
            $heisedatu_img.css({display: "none"});
            $baisexiao_img.css({display: "block"});
            $baisedatu_img.css({display: "block"});
            $li_02.removeClass("now").eq(1).addClass("now");

        });
        $heisecoler.click(function () {
            $baisexiao_img.css({display: "none"});
            $baisedatu_img.css({display: "none"});
            $heisexiao_img.css({display: "block"});
            $heisedatu_img.css({display: "block"});
            $li_02.removeClass("now").eq(0).addClass("now");


        });


    });



    // 加入购物车成功  开始

    $(function () {

        var $jiarugouwuche=$(".jiarugouwuche");

        $jiarugouwuche.click(function () {
            alert("加入购物车成功！");
        })
    });




    //分享  收藏  开始
    $(function () {

        var $fenxiang = $(".fenxiang_box>.fenxiang");
        var $shoucang = $(".shoucang");
        var $fenxiangbeijing = $(".fenxiangbeijing");
        $fenxiang.click(function () {
            $fenxiangbeijing.stop().fadeIn();
        });
        $(function () {
            $fenxiangbeijing.click(function () {
                $fenxiangbeijing.stop().fadeOut();
            })
        });

        $shoucang.click(function () {
            alert("收藏成功")
        })
    });

    //分享  收藏  结束


    // 点击 出 现 数量

    $(function () {

        var $shuliang_a = $(".shuliang_a");
        var $shuliang_list = $(".shulinag_list");
        var $li = $(".shulinag_list>li");


        $shuliang_a.click(function () {
            $shuliang_list.slideDown();
        })
        $li.click(function () {


            $(".shuzi").html(this.innerHTML);
            $shuliang_list.stop().fadeOut();
        })
    });

    // 点击 出现 数量 结束

    //点击出现 尺码  开始



    $(function () {

        var $span= $(".right_chima>ul>li");
        var $chimashuzi= $(".chima>.chimashuzi");
var  $kucunshuzi=$(".kucun>.kucunshuzi");
var $kucun_li=$(".kucun_list>.kucun_li");



        $span.each(function (i,ele) {
            $(ele).click(function () {
                $chimashuzi.html(this.innerHTML);
                $kucunshuzi.html($kucun_li.eq(i).html());
            })
        })


    });

    //点击 出现  尺码 结束



    // 点击表  出现 尺码表
    $(function () {
        var $chimabeijing = $(".chimabeijing");
        var $biao = $(".right_chima>.biao");
        $biao.click(function () {
            $chimabeijing.stop().fadeIn(1000);
        });
        $(function () {
            $chimabeijing.click(function () {
                $chimabeijing.stop().fadeOut(1000)
            })

        });


    })
    // 点击表  出现 尺码表   结束










});



//    商品评价  数据 开始
!(function () {
    var $itemHtml=$("#itemHtml");
    var $i=0;
    function add() {

        var $data=listData["listData0"+$i].data;

        for(var i=0;i<4;i++){
            var li=document.createElement("li");
            li.innerHTML= '<div class="content">' +
                '<img src="'+$data.list[i].coverImg+'" alt="">' +
                '<p class="bianhao">'+$data.list[i].describe+'</p>' +
                '<p class="goumaiyanse">'+$data.list[i].title+'</p>' +
                '<span>'+$data.list[i].creatAt+'</span>' +
                '<p class="pingjia">'+$data.list[i].creatByFullName+'</p>' +
                '</div>';

            $itemHtml.append(li);
        }


        if($i==3){
            $(".gengduo").css({display:"none"});
            $(".meiyougengduo").css({display:"block"})
        }
    }
    add();

    $(".gengduo").click(function () {

        $i++;
        if($i>3){
            return;
        }
        add();
    })



})();


// 点击 产品细节  商品 评论 
$(function () {
   4
   
   var $chanpinxijie=$(".chanpinxijie");
   var $shangpinpingjia=$(".shangpinpingjia");
   var $xijie_img=$(".xijie>.xijie_img");
   var $pinglun=$(".xijie>.pinglun");
    var $p0=$(".chanpinxijie>p");
    var $p1=$(".shangpinpingjia>p");
    var $i0=$(".chanpinxijie>i");
    var $i1=$(".shangpinpingjia>i");


   $chanpinxijie.click(function () {
       $chanpinxijie.css({background:"#c0c0c0"});
       $shangpinpingjia.css({background:"black"});
       $xijie_img.css({display:"block"});
       $pinglun.css({display:"none"});
       $p0.css({color:"black"});
       $p1.css({color:"#ffffff"});
       $i0.css({ display:"block" });
       $i1.css({  display:"none"});

   });
    $shangpinpingjia.click(function () {
        $shangpinpingjia.css({background:"#c0c0c0"});
        $chanpinxijie.css({background:"black"});
        $pinglun.css({display:"block"});
        $xijie_img.css({display:"none"});
        $p0.css({color:"#ffffff"});
        $p1.css({color:"black"});
        $i0.css({ display:"none"});
        $i1.css({  display:"block"});
    })
});


