<template>
<div class="activities">
  <h2>Activiteiten</h2>
  <div class="filter">
    <form action="" >
      <input type="radio" v-on:change="fetchData" v-model="audienceID" name="audience" value="1"> Kinderen<br>
      <input type="radio" v-on:change="fetchData" v-model="audienceID" name="audience" value="31"> Familie<br>
      <input type="radio" v-on:change="fetchData" v-model="audienceID" name="audience" value="0"> Jonge kinderen<br>
      <input type="radio" v-on:change="fetchData" v-model="audienceID" name="audience" value="11"> Jongeren<br>
      <input type="radio" v-on:change="fetchData" v-model="audienceID" name="audience" value="21"> Volwassenen<br>
    </form>
  </div>
  <ul>
    <li v-for="activity in activities">
      <div class="title">{{ activity.title }}</div>
      <div class="subtitle">{{ activity.subtitle }}</div>
      <div class="text">{{ activity.lead }}</div>
      <div class="province">{{ activity.provinces[0].name }}</div>
    </li>
  </ul>
</div>
</template>

<script>

export default {
  data() {
    return {
      activities: null,
      audienceID: "1"
    }
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  // when the view is created this function will run.
  created: function () {
    this.fetchData()
  },
  methods: {
    /*
    this method fecthes the API with the selected parameters.
    this.$route.params.id return the id of the router or the province id in this case.
    this.picked is the variable which the system gets from the radio button.
    */
    fetchData() {
      this.$http.jsonp('activiteiten.json?sleutel=sgrjhjnjm6' + '&province=' + this.$route.params.id + '&audience=' + this.audienceID).then((response) => {
        this.activities = response.body.results;
      })
    }
  }
}
</script>
