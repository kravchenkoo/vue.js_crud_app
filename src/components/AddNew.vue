<template>
	<div>
         <form @submit.prevent="addSkill">

        <input type="text" placeholder="Enter your name..." v-model="name" v-validate="'min:5'" name="name">
        <input type="text" placeholder="Enter your surname..." v-model="surname" name="surname">
        <input type="text" placeholder="Enter your phone..." v-model="phone" name="phone">
        <input type="text" placeholder="Enter a skill you have..." v-model="skill" name="skill">
        <button class="add-button">add</button>

        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
        </transition>

      </form> 
  </div>
</template>

<script>

export default {
  name: 'AddNew',
  data() {
    return {
      
    }
  },
  props: ['name', 'surname', 'phone', 'skill', 'skills'],
  methods: {
    // addSkill() {
    //   this.$validator.validateAll().then((result) => {
    //     if (result) {
    //       this.skills.push({name: this.name, surname: this.surname, phone: this.phone, skill: this.skill})
    //     } else {
    //       console.log('Not valid')
    //     }
    //   })
    // },
    addSkill() {
          this.skills.push({name: this.name, surname: this.surname, phone: this.phone, skill: this.skill})
    },
    remove(id) {
      this.skills.splice(id,1);
    }
  }
}

</script>



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
  input {
    margin-top: 5px;
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
  }
  .li-item {
    width: 23%;
    float: left;
    height: 100%;
  }
  .add-button {
    padding: 10px;
    text-decoration: none;
    background: #fff;
    border-radius: 3px;
    color: rgb(0, 110, 255);
    font-weight: bold;
    margin-right: 15px;
    margin-top: 10px;
    font-family: 'Montserrat', sans-serif;
    border: none;
    cursor: pointer;
  }


</style>