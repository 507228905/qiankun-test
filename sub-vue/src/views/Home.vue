<template>
  <div class="home">
     <h1>This is an home page</h1>
     <h2>sub-vue页面进行发起全局的通信</h2>
     <h4>onGlobalStateChange=>msg: {{msg}}</h4>
     <input  style="dispaly:block" v-model="inputValue"/>
     <div @click="handlePost">提交</div>
  </div>
</template>

<script>
// @ is an alias to /src

import {setState} from './../utils//appStore'
import {mapGetters} from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
        inputValue:''
    }
  },
  computed:{
    ...mapGetters(['msg'])
  },

  methods:{
    handlePost(){
      setState({msg:"sub-vue:"+this.inputValue})
    }

  }

  
 
}
</script>
