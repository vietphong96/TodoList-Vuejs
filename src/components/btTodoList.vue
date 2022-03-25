<template>
  <div id="todolist" >
          <div class="container_todolist">
             Todo List
          </div>
  </div>
</template>

<script>
export default {
  name: "btTodoList"
}
</script>

<style scoped>
#todolist{
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
}
.container_todolist{
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%,-25%);
  width: 30rem ;
  height: 30rem;
  background-color: #FF6666;

}
</style>