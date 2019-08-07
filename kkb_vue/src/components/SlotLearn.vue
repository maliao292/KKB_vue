<template>
  <div class="slot">
   <my-li></my-li> 
   </div>
</template>
<script>
import MyLi from './MyLi'
export default {
  name: 'sloatLearn',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  display: inline-block;
  width:33%;
  background: yellowgreen
}
</style>
