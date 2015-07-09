/**
 * Created by Administrator on 2015/7/9.
 */
(function($){
    $.fn.loopTip= function (options) {
        debug(this);
        var opt= $.extend( $.fn.loopTip.def,options);
        return this.each(function(){
            var $this=$(this);
            var color=opt.color;  //����ǳɫ����
            var mainColor=opt.mainColor;//���ΰٷֱ���ɫ����
            var percent=opt.percent;  //Ŀ��ٷֱ�
            $this.css('background-color',mainColor);
            $this.find("span").html(percent+"%");
            if(percent>0){
                var currentDeg=0;//�����������ĽǶȣ��ۼ�
                var targetDeg=percent*360/100; //Ŀ��Ƕ�
                if (targetDeg > 360) {
                    targetDeg = 360;
                }
                var timer=setInterval(function(){ //����Ч��
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
    $.fn.loopTip.def={ //����Ĭ��ֵ
        color:'#d0d0d0',
        mainColor:'#f78515',
        percent:50
    }
    //˽�к���
    function debug(obj){
        if(window.console && window.console.log){
            console.log(obj.size());
        }
    }
})(jQuery)

