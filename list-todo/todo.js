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
                   <span onclick="gg(event)">Done</span>
                   <span onclick="gg(event)">close</span>
               </span>
               <div class="sp-date">
                   tanggal: ${e.dateStamp}
               </div>
            </div>
        `
    })
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