
// OOP
var node = {
    todo:[],
    done:[],
    todoBox: document.querySelector("#todo-list"),
    doneBox: document.querySelector("#done-list"),
    addTodo: function(a){
        this.todo.push(a)
        return this.todo;
    },
    removeTodo: function(i){
        if(i>=0 && i<this.todo.length){
            this.todo.splice(i,1)
            return this.todo
        } else {
            return null
        }
    },
    moveToDone: function(i){
        if(i>=0 && i<this.todo.length){
            var temp = this.todo[i];
            this.todo.splice(i,1)
            this.done.push(temp)
            return this.todo
        } else {
            return null
        }
    },
    updateTodo: function(){
        this.todoBox.innerHTML = "";
        this.todo.forEach((e,i)=>{
            
        });
    }
}