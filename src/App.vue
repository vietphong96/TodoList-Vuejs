<template>
 <div>
   <router-link class="todolist_link" to="/todolist">TodoList</router-link>
 </div>
  <router-view/>


</template>

<script>


export default {
  name: 'App',
}
</script>

<style>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
}



</style>
