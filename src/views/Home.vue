<template>
  <div class="home">
    <HomeHero/>

    <h3 class="title"> Browse Certified Digital Assets</h3>

    <div class="browse-container">

      <div class="filters-container">
        <div class="">
          <small>{{this.filter}}</small> <br>
          <b><small>{{itemsFound}} items found in the search</small></b>
        </div>
        <div class="filter-box">
          <h4>Filters</h4>

          <div class="filter-collection">
            <h6 class="filter-subheader">Collections</h6>
            <ul>
              <li class="" @click="collectionSelect('Roots of Knowledge')">Roots of Knowledge</li>
              <li class="" @click="collectionSelect('Roots of Humanity')">Roots of Humanity</li>
              <li class="" @click="collectionSelect('7 Pillars of Humanity')">7 Pillars of Humanity</li>

            </ul>
          </div>

          <div class="filter-price">
            <h6 class="filter-subheader">Price</h6>
            <ul>
              <li class="" @click="priceSelect([0,200])">Less than $200</li>
              <li class="" @click="priceSelect([200,399])">$200 to $399<li>
              <li class="" @click="priceSelect([400,599])">$400 to $599</li>
              <li class="" @click="priceSelect([600,799])">$600 to $799</li>
              <li class="" @click="priceSelect([800,1200])">$800 to $1200</li>
            </ul>
          </div>

        </div>
      </div>
      <div  class="results-container">

          <div v-for="item in this.list" :key="item.id">
            <router-link :to="'/assets/' + item.id">
              <Card :item="item" />
            </router-link>
          </div>

      </div>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from '@/components/HomeHero.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    HomeHero,
    Card,
  },
  props: {
    searchText: String,
  },
  data() {
    return {
      price: 0,
      list: this.$root.$data.nftList,
      filter: '',
    }
  },
  watch: {
    searchText(searchText){
      if(searchText.length > 1) {
        this.searchNFTs(searchText)
      }
    }
  },
  computed: {
    itemsFound() {
      return this.list.length
    }
  },
  methods: {
    searchNFTs(searchText){
      this.filter = `Showing items matching ${this.searchText}`
      this.list = this.$root.$data.nftList.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
    },
    collectionSelect(collection) {
      this.filter = `Showing items from ${collection}`
      this.list = this.$root.$data.nftList.filter(item => item.parentPiece === collection)
    },
    priceSelect(range) {
      this.filter = `Showing items $${range[0]} to $${range[1]}`;
      this.list = this.$root.$data.nftList.filter(item => {
        if(parseInt(item.price) >= range[0] && parseInt(item.price) <= range[1]){
          return true;
        } else {
          return false;
        }
      })
    },
  },
}
</script>

<style scoped>

.title{
color: #222F3E;
  font-weight: bold;
  width: 100%;
  margin-top: 2em;
}

.browse-container{
  margin-top: 2em;
  display: flex;
}

.filters-container{
  margin: 1em 1em;
  min-width: 250px;
}

.filter-box{
  text-align: left;
  box-shadow: 1px 1px 10px 1px lightgrey;
  border-radius: 8px;
  padding: 2px;
}

.filter-box div ul{
  list-style-type: none;
  padding-left: 0px;
  margin: 0px;
}

.filter-box div ul li{
  border-top: 1px solid grey;
  padding: 5px;
  height: auto;
  background-color: #FFFFFF;
}

.filter-box div ul li:hover{
  background-color: #F5F5F5;
  cursor: pointer;
}

.filter-box h4{
  background-color: #222F3E;
  margin: 0px;
  padding: 4px;
  color: white;
}

.filter-subheader{
  background-color: #8CB7DB;
  padding: 4px;
  color: black;
  font-weight: bold;
  margin: 0px;
}

.results-container{
  margin: 1em 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}


</style>
