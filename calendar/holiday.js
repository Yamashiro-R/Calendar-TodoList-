//祝日・休日の判定
function checkHoliday(year,month,day,dai) {
    let day0fWeek = new Date(year,month-1,day).getDay;
    let num0fWeek = Math.floor( (day-1) / 7 ) + 1; //第〇週カウント用
    //月ごとに確認
    switch(month){
        /*  1月1日:元旦
            1月第2日 成人の日
        */
            
        case 1:
            console.log(day);
            if(day == 1) return true;
            if(day0fWeek == 1 && num0fWeek == 2) return true;  
            //if(day0fWeek == 1 && dai == 2) return true;
            break;
            
        /*
            2月11日:建国記念日
            2月23日:天皇誕生日
        */
    case 2:
        if(day == 11) return true;
        if(year >= 2020 && day == 23  ) return true;
        break;
        //  3月21日:春分の日頃
        case 3:
            if(day == Math.floor(20.8431 + 0.242194 * (year -1980))
            - Math.floor((year -4)/4)) return true;
            break;
        //  4月29日:昭和の日
        case 4:
            if(day == 29) return true;
            break;
        /*
            5月3日:憲法記念日
            5月4日:みどりの日
            5月5日:こどもの日
        */
    case 5:
        if(day == 3) return true;
        if(day == 4) return true;
        if(day == 5) return true;
        break;
        //  8月11日:山の日:2016年以降、2020年除く
        case 8:
            if(year >= 2016 && year != 2020 && day == 11) return true;
            break;
        /*
            9月第3月曜:敬老の日
            9月23日頃:春分の日
        */
        case 9:
            if(day0fWeek == 1 && num0fWeek == 3) return true;
            if(day== Math.floor(year - 1980) / 4) return true;
            break;
        /*
            10月第2月曜:体育の日 2020年除く
        */
    case 10:
        if(day0fWeek == 1 && num0fWeek == 2 && year != 2020) return true;
        break;
        
        /*
            11月3日:文化の日
            11月23日:勤労感謝の日
        */
    case 11:
            if(day == 3) return true;
            if(day == 23) return true;
            break;
    }
    return false;    
}

//振替休日判定
function checkFurikae(year,month,day) {
    let day0fWeek = new Date(year,month -1,day).getDay;
    let furikaeFlag = false;

    //月曜
    if(day0fWeek == 1) {
        furikaeFlag =checkHoliday(year,month,day-1);
    }
    //火曜
    if(day0fWeek == 2) {
        furikaeFlag =  checkHoliday(year,month,day-1) 
                    && checkHoliday(year,month,day-2);
    }
    //水曜
    if(day0fWeek == 3 && furikaeFlag != true) {
        furikaeFlag =   checkHoliday(year,month,day -1)
                    &&  checkHoliday(year,month,day -2) 
                    &&  checkHoliday(year,month,day -3);
    }
    //祝日と祝日に挟まれてるかどうかの判定(国民の祝日)
    if((day0fWeek != 0 && day0fWeek != 6) && furikaeFlag != true) {
        let prevDate = new Date(year,month -1,day);
        let nextDate = new Date(year,month-1,day);
        prevDate.setDate(prevDate.getDate()-1); //前日
        nextDate.setDate(nextDate.getDate()+1); //翌日
        
        furikaeFlag = checkHoliday(prevDate.getFullYear()
                                    ,prevDate.getMonth()+1
                                    ,prevDate.getDay())
                    && checkHoliday(nextDate.getFullYear()
                                    ,nextDate.getMonth()
                                    ,nextDate.getDay())
    }
    return furikaeFlag;
}

