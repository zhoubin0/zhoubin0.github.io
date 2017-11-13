

//周斌

var GLOBAL = GLOBAL || {};
$(function () {
    /*  .load() 底层实现原理是ajax ,也就是说要想加载必须在服务模式下打开,否则,请用火狐浏览器 */
    $("#top").load("header.html");
    $("#footer").load("footer.html");

    //  更多  收起   开始
    $(function () {
        num = 0
        var $more = $(".more span");
        var $shouqi = $(".shouqi span");

        var $list_nav = $(".list_nav ul");

        $more.eq(0).click(function () {
            $list_nav.eq(2).css({
                overflow: "visible"
            })
        });
        $shouqi.eq(0).click(function () {
            $list_nav.eq(2).css({
                overflow: "hidden"
            })
        });
        $more.eq(1).click(function () {
            $list_nav.eq(6).css({
                overflow: "visible"
            })
        });
        $shouqi.eq(1).click(function () {
            $list_nav.eq(6).css({
                overflow: "hidden"
            })
        });
        $more.eq(2).click(function () {
            $list_nav.eq(7).css({
                overflow: "visible"
            })
        });
        $shouqi.eq(2).click(function () {
            $list_nav.eq(7).css({
                overflow: "hidden"
            })
        });
    });
    //  更多  收起   结束





//      倒计时
    var d=document.getElementById("dd")
    var h=document.getElementById("hh")
    var m=document.getElementById("mm")
    var s=document.getElementById("ss")



    function gett() {
        /*   抢购 2017-10-1-20:00:00:000  */

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


//  倒计时  结束
});




//   数据 开始  中奖信息  开始


!(function () {
    var $itemHtml=$("#itemHtml");
    var $i=0;
    function add() {
        var $data=listData["listData0"+$i].data;
        for(var i=0;i<4;i++){
            var li=document.createElement("li");
            li.innerHTML= '<div class="zhongjiang_img">' +
                '<img src="'+$data.list[i].coverImg+'" alt="">' +
                '</div>' +
                '<span class="uni-id">'+$data.list[i].describe+'</span>' +
                '<span class="uni-name">'+$data.list[i].title+'</span>';
            $itemHtml.append(li);
        }


        if($i==15){
            $(".gengduo").css({display:"none"});
            $(".meiyougengduo").css({display:"block"})
        }
    }
    add();

    $(".gengduo").click(function () {

        $i++;
        if($i>15){
            return;
        }
        add();
    })



})();



//   数据 开始  中奖信息  结束

