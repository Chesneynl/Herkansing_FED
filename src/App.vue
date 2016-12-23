<template>
<div id="app">
  <div class="content">
    <Agenda></Agenda>
  </div>
</div>
</template>

<script>

import Agenda from './pages/Agenda.vue'

export default {
  components:{
      Agenda
  },
  name: 'app'
}
</script>

<style>

* {
  font-family: 'Open Sans', sans-serif;
}

.agenda {
  padding-bottom:100px;
}

.content {
  width:1000px;
  margin:0 auto;
}

.location {
  text-align:right;
  padding-right:20px;
}

.provinces {
  width:200px;
  float:left;
}

.provinces a {
  text-decoration:none;
  padding:5px 0px 5px 8px;
  color:black;
  display:block;
}

a.router-link-active {
background:#53c3ea;
color:white ;
}

.activities {
  width:800px;
  float:left;
}

.activities .title {
  font-weight:bold;
  font-size:22px;
  margin-bottom:3px;
}

.activities .subtitle {
  margin-bottom:10px;
  font-size:14px;
}

.activities .text {
  margin-bottom:10px;
  line-height:200%;
}

.activities .province {
  font-size:13px;
}

.activities ul,
.provinces ul {
  padding:0px;
}

.activities li {
  margin-bottom:10px;
  background:#f2f2f2;
  padding:20px;
}

.activities li,
.provinces li,
.activities ul,
.provinces ul   {
  list-style:none;
  list-style-position: inside;
}

</style>
