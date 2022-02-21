let cnt = 1;    //liにNOを振るため
let str = 0;    

function addTask() {
        
    let textbox = document.getElementById("todoList_message");
    let message = textbox.value; //タスク内容
    
    if(message == null || message == ''){
        ;       //空白なら何もしない
    }else {

        str = `<li id="${cnt}">${message}<button onclick="deleteTask(${cnt});" value="${cnt++}">削除</button></li>`;
        
        
        document.getElementById("My_ul").innerHTML += str;
       
        textbox.value = '';
        
    }
}


function deleteTask(cnt){
    
    let deleteNO = document.getElementById(cnt)

    deleteNO.remove();
    
}




