/**
 * Created by Administrator on 2015/7/9.
 */
(function($){
    $.fn.loopTip= function (options) {
        debug(this);
        var opt= $.extend( $.fn.loopTip.def,options);
        return this.each(function(){
            var $this=$(this);
            var color=opt.color;  //环形浅色部分
            var mainColor=opt.mainColor;//环形百分比颜色部分
            var percent=opt.percent;  //目标百分比
            $this.css('background-color',mainColor);
            $this.find("span").html(percent+"%");
            if(percent>0){
                var currentDeg=0;//用来做动画的角度，累加
                var targetDeg=percent*360/100; //目标角度
                if (targetDeg > 360) {
                    targetDeg = 360;
                }
                var timer=setInterval(function(){ //动画效果
                        if(currentDeg<=180){
                            //console.log(currentDeg);
                           $this.css('background-image', 'linear-gradient(' + (90 + currentDeg) + 'deg, transparent 50%, '+color+' 50%),linear-gradient(90deg, '+color+' 50%, transparent 50%)');
                        }else{
                            //console.log(currentDeg);
                            $this.css('background-image', 'linear-gradient(' + (currentDeg - 90) + 'deg, transparent 50%, '+mainColor+' 50%),linear-gradient(90deg, '+color+' 50%, transparent 50%)');
                        }
                        currentDeg+=1;
                        if(currentDeg>targetDeg){
                            clearInterval(timer);
                        }

                },1)
        }
        })
    }
    $.fn.loopTip.def={ //设置默认值
        color:'#d0d0d0',
        mainColor:'#f78515',
        percent:50
    }
    //私有函数
    function debug(obj){
        if(window.console && window.console.log){
            console.log(obj.size());
        }
    }
})(jQuery)

