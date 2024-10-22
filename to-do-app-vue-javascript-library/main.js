new Vue({
    el : "#app",
    data: {
        newTodo: '',
        todos: []
    },
    methods: {
        addTodo() {
            if(this.newTodo.trim()){
                this.todos.push({ text: this.newTodo });
                this.newTodo = '';
            }
        },
        removeTodo(index){
            this.todos.splice(index,1);
        }
    }
});