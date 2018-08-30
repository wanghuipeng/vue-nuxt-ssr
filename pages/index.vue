<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <nuxt-link to="/hello"   style="margin-right:30px">hello{{data}}</nuxt-link>
        <nuxt-link to="/about"  style="margin-right:30px">nuxt-link跳转</nuxt-link>
        <nuxt-link to="/about"  style="margin-right:30px">name</nuxt-link>
        <nuxt-link to="/about"  style="margin-right:30px">shut</nuxt-link>
        <nuxt-link to="/about"  style="margin-right:30px">next</nuxt-link>
        <el-button type="primary" @click="link">路由跳转</el-button>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Api from '~/utils/api'

export default {
  components: {
    AppLogo
  },
  data(){
    return {
      data:[]
    }
  },
  asyncData ({ params }) {
    return Api.login()
    .then((res) => {
      return { data: res.data.data }
    })
  },
  created(){
    Api.logout().then(res=>{
      
    })
  },
  methods:{
    link(){
      this.$router.push({path:"/home"})
    }
  }
}
</script>

<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

