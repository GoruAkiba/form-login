var todo = [],
    done = [],
    todoBox = document.getElementById("todo-list"),
    doneBox = document.getElementById("done-list");

function execute(){
    var input = document.getElementById("inputan").value;
    if(!input) return alert("input kosong");
    // console.log(input);
    Add(input);
    updateTodo();
    document.getElementById("inputan").value = "";
}

function Add(a){
    var d = new Date();
    todo.push({
        name: a,
        dateStamp: d.toLocaleString()
    });
    return todo;
}


function updateTodo(){
    // mengkosongkan data pada elemen todo-list
    todoBox.innerHTML = "";

    // membaca data pada var todo dan memasukan ke todo-list
    todo.map((e,i)=>{
        todoBox.innerHTML += `
            <div class="list-item">
               <span>${i+1}. ${e.name}</span>
               <span data-list="${i}" class="sp-right">
                   <span onclick="moveToDone(event)">Done</span>
                   <span onclick="closeTodo(event)">close</span>
               </span>
               <div class="sp-date">
                   tanggal: ${e.dateStamp}
               </div>
            </div>
        `
    })
}

function closeTodo(event){
    var i = event.target.parentElement.getAttribute("data-list");
    todo.splice(i,1)
    updateTodo();
}

function moveToDone(event){
    var i = event.target.parentElement.getAttribute("data-list");
    var elm = todo[i];
    done.push(elm);
    todo.splice(i,1);
    updateTodo();
    updateDone();
}

function updateDone(){
    // mengkosongkan data pada elemen todo-list
    doneBox.innerHTML = "";

    // membaca data pada var todo dan memasukan ke todo-list
    done.map((e,i)=>{
        doneBox.innerHTML += `
            <div class="list-item">
               <span>${i+1}. ${e.name}</span>
               <span data-list="${i}" class="sp-right">
                   <span onclick="closeDone(event)">close</span>
               </span>
               <div class="sp-date">
                   tanggal: ${e.dateStamp}
               </div>
            </div>
        `
    })
}

function closeDone(event){
    var i = event.target.parentElement.getAttribute("data-list");
    done.splice(i,1)
    updateDone();
}
// OOP
// var node = {
//     todo:[],
//     done:[],
//     todoBox: document.querySelector("#todo-list"),
//     doneBox: document.querySelector("#done-list"),
//     addTodo: function(a){
//         this.todo.push(a)
//         return this.todo;
//     },
//     removeTodo: function(i){
//         if(i>=0 && i<this.todo.length){
//             this.todo.splice(i,1)
//             return this.todo
//         } else {
//             return null
//         }
//     },
//     moveToDone: function(i){
//         if(i>=0 && i<this.todo.length){
//             var temp = this.todo[i];
//             this.todo.splice(i,1)
//             this.done.push(temp)
//             return this.todo
//         } else {
//             return null
//         }
//     }
// }