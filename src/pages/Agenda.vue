<template>
<div class="agenda">
  <Provinces></Provinces>
  <router-view></router-view>
</div>

</template>

<script>

// Import the needed views so we can use them in this view
import Provinces from '../pages/Provinces.vue'

export default {
  components:{
    Provinces
  }
}
</script>
