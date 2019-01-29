<template>
  <div class="hello">

    <section>
  <h2>Edit product</h2>
  <form @submit.prevent="updateProduct">
    <div class="form-group">
      <label for="edit-name">Name</label>
      <input class="form-control" id="edit-name" v-model="skills[skill_id].name" required/>
    </div>
    <div class="form-group">
      <label for="edit-name">Surname</label>
      <input class="form-control" id="edit-name" v-model="skills[skill_id].surname" required/>
    </div>
    <div class="form-group">
      <label for="edit-name">Phone</label>
      <input class="form-control" id="edit-name" v-model="skills[skill_id].phone" required/>
    </div>
    <div class="form-group">
      <label for="edit-name">Skill</label>
      <input class="form-control" id="edit-name" v-model="skills[skill_id].skill" required/>
    </div>
    <router-link  class="btn btn-default add-button" tag="button" type="submit" to="/">Save</router-link>    <router-link to="/" class="btn btn-default add-button">Cancel</router-link>
  </form>
</section>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skill_id: this.$route.params.product_id - 1
    }
  },
  props: ['skill', 'skills'],
  methods: {
    updateProduct: function () {
      var skillp = this.skills[product_id];
      skills[findProductKey(skillp.name)] = {
        name: skillp.name
      };
      router.push('/');
    },
    remove(id) {
      this.skills.splice(id,1);
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
