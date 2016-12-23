<template>
<div class="provinces">
  <h2>Provincies</h2>
  <li v-for="province in provinces">
      <router-link :to="'/Activities/' + province.id" exact> {{ province.name }} {{ province.amount }} </router-link>
  </li>
</div>
</template>

<script>

export default {
  data() {
    return {
      amountOfAct: [],
      // Set provinces name and id as liste in the API.
      provinces: [
        {
          id : 1,
          name : "Drenthe",
          amount: 0
        },
        {
          id : 11,
          name : "Flevoland",
          amount: 0
        },
        {
          id : 21,
          name : "Friesland",
          amount: 0
        },
        {
          id : 31,
          name : "Gelderland",
          amount: 0
        },
        {
          id : 41,
          name : "Groningen",
          amount: 0
        },
        {
          id : 51,
          name : "Limburg",
          amount: 0
        },
        {
          id : 61,
          name : "Noord-Brabant",
          amount: 0
        },
        {
          id : 71,
          name : "Noord-Holland",
          amount: 0
        },
        {
          id : 111,
          name : "Overijssel",
          amount: 0
        },
        {
          id : 81,
          name : "Utrecht",
          amount: 0
        },
        {
          id : 91,
          name : "Zeeland",
          amount: 0
        },
        {
          id : 101,
          name : "Zuid-Holland",
          amount: 0
        }
      ]
    }
  },
  created: function () {
    this.fetchCount()
  },
  methods: {
    //this method fetches the api and places the province id after is as a parameter.
    fetchCount() {
      for (let province of this.provinces) {
        this.$http.jsonp('activiteiten.json?sleutel=sgrjhjnjm6' + '&province=' + province.id).then((response) => {
            province.amount = response.body.count
        })
      }
    },
  }
}
</script>
