$(document).ready(function(){
        var log = function(){
            console.log(arguments)
        }
        // logout
        $('.logout').on('click', function(){
            log('logout')
            alert('是否退出')
        })


        dateDiff = function(){
            /**
             * [dateDiff 算时间差]
             * @param  {[type=Number]} hisTime [历史时间戳，必传]
             * @param  {[type=Number]} nowTime [当前时间戳，不传将获取当前时间戳]
             * @return {[string]}         [string]
             */
            var arg = arguments,
            now =arg[1]?arg[1]: new Date().getTime()/1000;   //秒
            diffValue = now - arg[0],
            result='',

            minute = 1 * 60,
            hour = minute * 60,
            day = hour * 24,
            halfamonth = day * 15,
            month = day * 30,
            year = month * 12,

            _year = diffValue/year,
            _month =diffValue/month,
            _week =diffValue/(7*day),
            _day =diffValue/day,
            _hour =diffValue/hour,
            _min =diffValue/minute;

            if(_year>=1) result=parseInt(_year) + "年前";
            else if(_month>=1) result=parseInt(_month) + "个月前";
            else if(_week>=1) result=parseInt(_week) + "周前";
            else if(_day>=1) result=parseInt(_day) +"天前";
            else if(_hour>=1) result=parseInt(_hour) +"个小时前";
            else if(_min>=1) result=parseInt(_min) +"分钟前";
            else result="刚刚";
            return result;
        }

       // 更新时间戳
        // jQuery 遍历 - each() 方法
        $('stamp').each(function(){
            var date = Number($(this).text())
            var stamp = dateDiff( date )
            $(this).text( stamp )
        })

        // jQuery 遍历 - each() 方法
        $('.jq-html-content').each(function(){
            var str = $(this).text()
            $(this).html(str)
        })
})