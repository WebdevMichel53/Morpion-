
<template>


  <div class="hello"></div>
  <div>
    <h1>Morpion V1.0</h1>


  </div>
  <button>
    <h3 v-on:click='GamesRules'>Games Rules</h3>
  </button><br>
  <button>
    <h3> Play </h3>
  </button>

</template>
<script>
export default {
  name: "JSTicTacToe"
}
</script>
<style scoped>
h3 {
  margin: 10px 0 2;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
