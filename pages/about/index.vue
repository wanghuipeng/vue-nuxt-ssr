<template>
<div>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
</div>
    
</template>
<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>