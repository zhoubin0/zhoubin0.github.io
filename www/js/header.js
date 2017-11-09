!(function () {

    $(function () {
        $(".nav_left").hover(function () {
            $(".nav_left_list").stop().slideDown(1500,"elasticOut")
        }, function () {
            $(".nav_left_list").stop().slideUp(1500)
        });
    });





    //模态框


    $(function () {
       var $diandenglu=$(".diandenglu");
        var $motaikuang_box=$(".motaikuang_box");
        var $motaik_box=$(".motaik_box");
        var $chahao=$(".chahao");

        var $user=$(".user");
        var $password=$(".password");
        var $btn=$(".btn")

        $diandenglu .click(function () {
            divblock();
        });
        $chahao .click(function () {
            divnone();
        });
        $motaikuang_box .click(function () {
            divnone();
        });
        $motaik_box .click(function (e) {
            e.stopPropagation();

        });

        function  divblock() {
            $motaikuang_box.css({
                display:"block"
            })
        }
        function  divnone() {
            $motaikuang_box.css({
                display:"none"
            })
        }
        var ifuser,ifpassword;
        $user.blur(function () {
            var ng=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])/;
            var $that=$(this);
            ifuser=  ifBlock($that,ng)
        });
        $password.blur(function () {
            var ng=/\d{8,}/;
            var $that=$(this);
            ifpassword= ifBlock($that,ng)
        });
        function ifBlock($that,ng) {
            var ifTrue=ng.test($that.val());

            if(ifTrue){
                $that.siblings("p").css({display:"none"});
                return true;
            }else {
                $that.siblings().css({display:"inline-block"});
                return false;
            }

        }

        $(".btn").click(function () {
            if(ifuser&&ifpassword){
                alert("哇，您终于登录成功了，不容易啊");
                divnone();
                $user.val("");
                $password.val("");
            }else {
                alert("不好意思，登录失败");
                $user.val("");
                $password.val("");
            }

        })
    });




    // 模态框 结束


    //导航  开始

    $(function () {
        $(".nav_wrap").css({
            position: "fixed",
            top: 141 - $(window).scrollTop() + "px",
            left: "0px"
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() > 141) {

                $(".nav_wrap").css({
                    position: "fixed",
                    top: "0px",
                    left: "0px",

                })
            } else {

                $(".nav_wrap").css({


                    position: "fixed",
                    top: 141 - $(window).scrollTop() + "px",
                    left: "0px"
                })
            }
        });
    });

//导航结束


// /返回  顶部 /

    $(function () {
        /* 当文档滚动 500以上，scrolltop显示
         * 反之隐藏
          * */
        /* 给window绑定 滚动监听事件 */
        $(window).scroll(function () {
            /* 判断页面滚动的高度，如果大于500.。。。 */
            if (($(window)).scrollTop() > 100) {

                var $height = $(window).height();
                $(".scrollTop").css("display", "block");
                $(".right_nav").css({

                    height: $height + "px"
                    , top: "0px"


                })

            } else {
                $(".scrollTop").fadeOut();
                $(".right_nav").css({height: "581px", top: "177px"})

            }


        });


        /* 点击返回顶部按钮*/
        $(".scrollTop").click(function () {
            /* 让他的父元素 位置  变成距离底部1000px，透明*/

            $("body,html").animate({scrollTop: 0}, 400)
        });

    });



    // 返回顶部



    //搜索栏  焦点引入
    var $nav_input= $(".nav_input");
    var $search=$(".search");
    var $nav_right=$(".nav_right");
    $(function () {
        $nav_input.focus(function () {
            $search.css({
                display: "block",
                borderColor: "#3385FF"
            })
        });
       $nav_input.blur(function () {
           $search.css({
               display:"none"
           })
       })
    });




})();


