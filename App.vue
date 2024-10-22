<template>
    <div id="app">
      <h1>Vue 2 To-Do List</h1>
      <div class="todo-app">
        <!-- Input to add a new task -->
        <input v-model="newTask" @keyup.enter="addTask" placeholder="Enter a new task" />
        <button @click="addTask">Add Task</button>
  
        <!-- Display list of tasks -->
        <ul>
          <li v-for="(task, index) in tasks" :key="index">
            <span :class="{ completed: task.completed }" @click="toggleTaskCompletion(index)">
              {{ task.text }}
            </span>
            <button @click="deleteTask(index)">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: '',
        tasks: []
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push({ text: this.newTask, completed: false });
          this.newTask = '';
        }
      },
      toggleTaskCompletion(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 60px;
  }
  
  .todo-app input {
    padding: 5px;
    font-size: 16px;
    width: 200px;
  }
  
  .todo-app button {
    margin-left: 10px;
    padding: 5px 10px;
    font-size: 16px;
  }
  
  .todo-app ul {
    list-style-type: none;
    padding: 0;
  }
  
  .todo-app li {
    margin: 10px 0;
  }
  
  .completed {
    text-decoration: line-through;
    color: gray;
    cursor: pointer;
  }
  
  .completed:hover {
    color: black;
  }
  </style>
  