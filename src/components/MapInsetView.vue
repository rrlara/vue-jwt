<template>
  <div class="news-view" :class="">
    <!-- item list -->

    <div class="page-content mapWrapper"><!-- Your content goes here -->
        <div id="map-inset"></div>
    </div>
    
  </div>
</template>

<script>
// import store from '../store'
import Survey from './ListView.vue'
// import Modal from './ModalView.vue'
import store from '../store'

var map;

export default {

  name: 'MapView',

  props:{
    item: {}
  },

  watch: {
    item: function(){
      this.updateLayer();
    }
  },

  components: {
    
  },
  created () {

    
  },
  ready (){

    var self = this
    L.mapbox.accessToken = 'pk.eyJ1IjoicnJsYXJhIiwiYSI6IjNjSlJmUkkifQ.PlJc5PGK-7-EDMmsfqYKfg';

    map = L.mapbox.map('map-inset', 'spatialdev.map-4o51gab2', { zoomControl: false });
    map.setView([47.68021, 10.350101], 4);

    map.invalidateSize();

    self.Point = L.mapbox.featureLayer().addTo(map);

    /**
     * target the point to highlight
     */
    self.Point.on('click', function(e) {
        
        resetColors();
        e.layer.feature.properties['marker-color'] = '#3f51b5';
        e.layer.feature.properties['marker-size'] = "large";
        e.layer.feature.properties['active'] = true;
        self.layer.setGeoJSON(self.surveys);

        self.item =  e.layer.feature;


        //map.setView([e.layer.feature.geometry.coordinates[1], e.layer.feature.geometry.coordinates[0]]);
    });
    function onMapClick(e) {
        resetColors();
    }
    map.on('click', onMapClick);
    /**
     * reset survey layer after there's a click
     */
    function resetColors() {
        for (var i = 0; i < self.surveys.features.length; i++) {
            self.surveys.features[i].properties['marker-size'] = "small";
            self.surveys.features[i].properties['marker-color'] = "#3bb2d0";
            self.surveys.features[i].properties['active'] = false;
        }
        self.Point.setGeoJSON(self.surveys);
    }

  },

  destroyed () {
    
  },

  methods: {

    updateLayer: function(){
        var self = this;

        //console.log(JSON.stringify(self.surveys));

        self.Point.setGeoJSON(self.surveys);

        map.fitBounds(self.Point);

    }
    
  }
}
</script>

<style lang="stylus">

.mapWrapper {
    /*width:350px;*/
    /*float:left;*/
    /*padding:10px;*/
    height: 100vh;
    background-color: darkgrey;
}

#map{
    width: 100%;
    height: 100%;
    /*background-color: aqua;*/
}

</style>
