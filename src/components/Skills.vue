<template>
  <div class="hello">
    <div class="holder">


      <ul>
        <transition-group name="list" enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft">
          <li v-for="(data, index) in skills" :key='data' class="skills-container">
            <div class="li-item">{{ data.name }}</div>
            <div class="li-item">{{ data.surname }}</div>
            <div class="li-item">{{ data.phone }}</div>
            <div class="li-item">{{ data.skill }}</div>
            <router-link class="btn btn-warning btn-xs align-when-small-screen" :to="{name: 'product-edit', params: {product_id: index + 1}}">Edit</router-link>
            <i class="fa fa-minus-circle" @click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>

      
        <p>These are the skills that you possess</p>
        <h1 style="display: none;">Users: {{ skills.length }}</h1>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      
    }
  },
  props: ['skill', 'skills'],
  methods: {
    addSkill() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.skills.push({skill: this.skill})
          this.skill = '';
        } else {
          console.log('Not valid')
        }
      })
    },
    remove(id) {
      this.skills.splice(id,1);
      // if (true) {

      // } else {
      //   this.skills.splice(id,1);
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

  .holder {
    background: #fff;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  ul li {
    padding: 40px;
    font-size: 1.3em;
    background-color: #e0edf4;
    border-left: 5px solid #3eb3f6;
    margin-bottom: 2px;
    color: #3e5252;
    word-wrap: break-word;
  }
  p {
    text-align: center;
    padding: 30px 0;
    color: gray;
  }
  .container {
    box-shadow: 0px 0px 40px lightgray;
    transition: all ease 5s;
  }
  .skills-container {
    display: grid;
    grid-template-columns: 5fr 5fr 5fr 5fr 1fr 1fr;
  }
  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687f7f;
  }
  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
  }
  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
    .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  i {
    float: right;
    cursor: pointer;
    align-self: end
  }

  button {
    padding: 10px;
    text-decoration: none;
    background: #fff;
    border-radius: 3px;
    color: rgb(0, 110, 255);
    font-weight: bold;
    margin-right: 15px;
  }
  div {
  -webkit-transition: all 2s ease;
  -moz-transition: all 2s ease;
  -o-transition: all 2s ease;
  transition: all 2s ease;
  }
  @media (max-width: 1100px){
    .skills-container{
      /* change the code below this line */
    
      grid-template-columns: 3fr 3fr 1fr;
    
    /* change the code above this line */
    }
    .align-when-small-screen {
      grid-row:  1 / 2;
      grid-column: 3 / 4;
    }
  }
  @media (max-width: 600px){
    .skills-container{
      /* change the code below this line */
    
      grid-template-columns: 1fr;
    
    /* change the code above this line */
    }
    .align-when-small-screen {
      grid-row:  6 / 7;
      grid-column: 1 / 1;
    }
  }
</style>
