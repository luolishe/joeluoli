// PC端爱计时
function loveSitetime(time) {
    window.setTimeout("loveSitetime('"+ time +"')", 1000);
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth() + 1;
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();
    // 时间设置
    var t1 = Date.UTC(2000, 01, 01, 09, 00, 00);
    if(time) {
        t1 = Date.UTC(time.split('-')[0], time.split('-')[1], time.split('-')[2], 09, 00, 00);
    }
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
    var diff = t2 - t1;
    var diffYears = Math.floor(diff / years);
    var diffDays = Math.floor((diff / days) - diffYears * 365);
    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours -
        diffMinutes * minutes) / seconds);
    if(document.getElementById("loveSitetime4Aside")) {
        document.getElementById("loveSitetime4Aside").innerHTML = "我们相恋了：</br>" + diffYears + "年" + diffDays + "天" +
            diffHours + "时" + diffMinutes + "分" + diffSeconds + "秒啦</br>";
    }
    if(document.getElementById("loveSitetime4Header")) {
        document.getElementById("loveSitetime4Header").innerHTML = "我们相恋了：</br>" + diffYears + "年" + diffDays + "天" +
            diffHours + "时" + diffMinutes + "分" + diffSeconds + "秒啦</br>";
    }
}




//PE端

function PEloveSitetime(time) {
    window.setTimeout("PEloveSitetime('"+ time +"')", 1000);
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth() + 1;
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();
    // 时间设置
    var t1 = Date.UTC(2000, 01, 01, 09, 00, 00);
    if(time) {
        t1 = Date.UTC(time.split('-')[0], time.split('-')[1], time.split('-')[2], 09, 00, 00);
    }
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
    var diff = t2 - t1;
    var diffYears = Math.floor(diff / years);
    var diffDays = Math.floor((diff / days) - diffYears * 365);
    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours -
        diffMinutes * minutes) / seconds);
    if(document.getElementById("PEloveSitetime4Aside")) {
        document.getElementById("PEloveSitetime4Aside").innerHTML = "我们相恋了：</br>" + diffYears + "年" + diffDays + "天" +
            diffHours + "时" + diffMinutes + "分" + diffSeconds + "秒啦</br>";
    }
    if(document.getElementById("PEloveSitetime4Header")) {
        document.getElementById("PEloveSitetime4Header").innerHTML = "我们相恋了：</br>" + diffYears + "年" + diffDays + "天" +
            diffHours + "时" + diffMinutes + "分" + diffSeconds + "秒啦</br>";
    }
}