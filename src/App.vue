<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/add-new">Add new user</router-link>
    </nav>
    <router-view :skill="skill" :skills="skills"></router-view>
  </div>
</template>

<script>
import Skills from './components/Skills.vue'

export default {
  name: 'app',
  components: {
    appSkills: Skills
  },
  data() {
    return {
      skill: '',
      skills: [
        {"name": "Oleksandr", "surname": "Kravchenko", "phone": "0936765689", "skill": "node.js"},
        {"name": "Petro", "surname": "Ivanov", "phone": "0633333223", "skill": "Vue.js"}
      ]
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

  body {
    background-color: #eeeeee;
    font-family: 'Montserrat', sans-serif;
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    padding-top: 50px;
  }
  body, html {
    margin: 0;
    height: 100%;
  }
  #app {
    width: 90%;
  }
  nav {
    padding: 20px 20px 20px 0;
  }
  nav a {
    padding: 10px;
    text-decoration: none;
    background: #fff;
    border-radius: 3px;
    color: rgb(0, 110, 255);
    font-weight: bold;
    margin-right: 15px;
  }
</style>
