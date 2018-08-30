<template>
    <div>
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
      <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {}
      }
    }
  </script>