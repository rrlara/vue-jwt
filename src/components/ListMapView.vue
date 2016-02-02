<template>
  <div class="news-view" :class="">
    <!-- item list -->

      <!-- Modal compnent -->
      <modal-view :show.sync="showModalFull" :item.sync="item"></modal-view>

    <div class="page-content col-xs-12 col-md-12">
    <!-- List View Component -->
        <list-view :surveys="surveys" :item.sync="item"></list-view>
    </div>

    <!-- <div class="page-content mapWrapper col-xs-12 col-md-9">
        <map-view :surveys="surveys" :item.sync="item"></map-view>
    </div> -->
    
  </div>
</template>

<script>
// import store from '../store'
import ModalView from './ModalView.vue'
import ListView from './ListView.vue'
import MapView from './MapView.vue'
import store from '../store'

var map;

export default {

  name: 'ListMapView',

  props:{
    showModalFull: false,
    item: {}
  },

  watch: {
    item: function(){
      var self = this;
      self.showModalFull = true
    }
    
  },

  components: {
    ListView,
    MapView,
    ModalView
  },
  
  data () {
    return {
      surveys: {}
    }
  },
  
  route: {
    data (){
      return store.fetchDataFromParse().then(surveys => ({
         surveys
      }))

    }
  },

  created () {

  },

  ready (){

  },

  destroyed () {
    
  },

  methods: {

    
  }
}
</script>

<style lang="stylus">

.mapWrapper {
    /*width:350px;*/
    /*float:left;*/
    /*padding:10px;*/
    height: calc(100vh - 0px);
    background-color: darkgrey;
}

#map{
    width: 100%;
    height: 100%;
    /*background-color: aqua;*/
}

</style>
