<template>
  <div class="container">
    <div id="taskApp">
      <h2>Vue Todo</h2>
      <input class="input-text" type="text" placeholder="Add item to todo list" @keyup="addTask">
      <ul class="todo-list">
        <li v-for="(task, index) in tasks" :key="index">
          <span class="taskCheckbox">
            <input @click="check" v-model="task.checked" type="checkbox">
          </span>
          <span class="taskTitle" :class="{done: isChecked(task)}">{{ task.title }}</span>
          <span class="taskDelete" @click="deleteTask(index)">Delete</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          title: "Eat",
          checked: false
        },
        {
          title: "Sleep",
          checked: false
        },
        {
          title: "Code",
          checked: false
        }
      ]
    };
  },
  methods: {
    addTask: function(e) {
      if (e.keyCode == 13 && e.target.value != "") {
        this.tasks.push({ title: e.target.value, checked: false });
        e.target.value = "";
      }
    },
    deleteTask: function(index) {
      this.tasks.splice(index, 1);
    },
    check: function(task) {
      task.checked = true;
    },
    isChecked: function(task) {
      return task.checked;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  height: 100vh;
  background: #138e99;
  background: linear-gradient(45deg, #138e99 0%, #590282 52%, #b50085 100%);
}
body {
  font-size: 12px;
  font-family: "Roboto", sans-serif;
}
h2 {
  color: #fff;
  margin: 0;
  margin-bottom: 20px;
  font-weight: normal;
}
input[type="text"] {
  padding: 10px;
  width: 100%;
  border: none;
  outline: none;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}
input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 20px;
}
li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 5px;
  margin: 5px 0;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}
li:nth-of-type(even) {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
}
.container {
  width: 40%;
  min-width: 400px;
  margin: 0 auto;
  padding: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
.done {
  text-decoration: line-through;
}
.taskCheckbox {
  width: 10%;
}
.taskDelete {
  width: 20%;
  text-align: right;
  cursor: pointer;
}
.taskTitle {
  width: 70%;
}
</style>
