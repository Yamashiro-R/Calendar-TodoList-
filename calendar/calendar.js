
function makeCalendar(year,month) {
  
  const monthDays = new Date(year,month,0).getDate();
  const firstDay = new Date(year,month-1,1).getDay();
  const lastDay = new Date(year,month-1,monthDays).getDay();
  

  let day0fWeek = firstDay;
  let daycount = [0,0,0,0,0,0,0]; //第〇　曜日カウント
  let hairetu_soeji = 0;
  //カレンダー用文字列作成
  
  let str = '';
  str += '<table>';
  str += '<tr>';
  str += '<th id="sun">日</th>';
  str += '<th id="mon">月</th>';
  str += '<th id="tue">火</th>';
  str += '<th id="wed">水</th>';
  str += '<th id="thu">木</th>';
  str += '<th id="fri">金</th>';
  str += '<th id="sat">土</th>';
  str += '</th>';
  str += '<tr>';

  //その月の第１日目が始まる曜日まで空白で埋める
  for(let i=0;i<firstDay;i++){
    str += '<td>&nbsp;</td>';
  }
    //その月の日数分ループ
  for(let j=1;j<=monthDays;j++){
      //週の終わりには改行
    if((firstDay + j) % 7 == 1){
      day0fWeek = 0; //日曜日に戻す
      str += '</tr>';
      str += '<tr>';
    }
    str += '<td';
    str += ' year  = "' + year + '"';
    str += 'month  = "' + month + '"';
    str += 'day   = "' + j + '"';
    str += 'day0fWeek ="' + day0fWeek + '"';

    //当月かどうか判断
    if( year == new Date().getFullYear()
        && month == new Date().getMonth() +1
        && j == new Date().getDate()
    ) { 
      str += 'id = "today"'; 
    
    }
/*
    switch(day0fWeek) {
      case 0:
      daycount[day0fWeek] += 1;
      break;

      case 1:
      daycount[day0fWeek] += 1;
      break;

      case 2:
      daycount[day0fWeek] += 1;
      break;

      case 3:
      daycount[day0fWeek] += 1;
      break;

      case 4:
      daycount[day0fWeek] += 1;
      break;

      case 5:
      daycount[day0fWeek] += 1;
      break;

      case 6:
      daycount[day0fWeek] += 1;
      break;
    } 
    
    hairetu_soeji = daycount[day0fWeek];
    str += `dai="${hairetu_soeji}"`;
    第〇週の処理これでもうまくいかない...。
*/
    

    //日曜または休日であるかどうか判定
    if( day0fWeek == 0 || checkHoliday(year,month,j,hairetu_soeji) || checkFurikae(year,month,j,hairetu_soeji)) {
      str += 'class="holiday"';
    }
    //土曜にclass="holiday2"を付加 css用
    if(day0fWeek == 6 ) {
      str += 'class="holiday2"';
    }

    str += 'onclick="selectDay(this);"';
    
    

    str += '>' + j + '</td>';
    
    day0fWeek++;
  }
    //その月の最終日移行を空白で埋める
    for(let k = 0;k<(6 - lastDay);k++) {
      str += '<td>&nbsp;</td>';
    }

  str += '</tr>';
  str += '</table>';

  //カレンダーヘッダの書き出し
  document.getElementById("HeaderYear").innerHTML = year;
  document.getElementById("HeaderMonth").innerHTML = month;
  document.getElementById("calendar").innerHTML = str;  

}



//日付選択時の処理
function selectDay(e) {
  //選択された日付の年月日を取得
  let year = e.getAttribute("year");
  let month = e.getAttribute("month");
  let day = e.getAttribute("day");
  let day0fWeek = '日月火水木金土'[e.getAttribute("day0fWeek")];

  //選択した日付を表示
  showinputArea();
  document.getElementById("selectInfo").innerHTML = '<h2>' + month + '月' 
  + day + '日 (' +day0fWeek + ')の予定</h2>';
}
//カレンダー＆入力エリアのスタイル変更
//カレンダーを表示、入力エリアを非表示
function showCalendar() {
  document.getElementById('calendar').style.display = "inline";
  document.getElementById('inputArea1').style.display = "none";
  document.getElementById('mainCalender').style.backgroundColor = "white"
}
//カレンダーを非表示、入力エリアを表示
function showinputArea() {
  document.getElementById('calendar').style.display = "none";
  document.getElementById('inputArea1').style.display = "inline-block";
  document.getElementById('mainCalender').style.backgroundColor = "#59f8f0"
}
