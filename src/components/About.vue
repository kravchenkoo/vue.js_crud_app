<template>
	<div class="about">
		<h1>Hello, this is my crud app</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis magni iusto, modi nulla! Mollitia enim, libero! Adipisci ad, consequuntur tenetur!</p>
	</div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>