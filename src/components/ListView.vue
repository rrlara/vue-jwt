<template>
  <div class="news-view row">

  
      <h1>Survey List</h1>
      <h4>(click on one)</h4>
      <!-- List of items from Parse.com -->
      <div v-for="item in surveys.features">
        <!-- Trigger the Modal compnent -->
        <!-- <span @click="clickedItem(item)" :class="[item.properties.attributes.active ? 'activeItem' : '']">{{item.properties.id}}</span>
        <div> -->

        <card :item='item'></card>

          <!-- <img width="200" style="padding: 10px 0px"
               class="dialogImages" src="{{ item.properties.attributes.photo._url }}">
        </div> -->
        <!-- <img v-if="item.properties.attributes.photo._url" v-lazy="item.properties.attributes.photo._url" width="200" style="padding: 10px 0px"> -->
      </div>
    <!-- </div> -->
    
  </div>
</template>

<script>
// import store from '../store'
import Modal from './ModalView.vue'
// import Button from './ui/Button.vue'
// import FormInput from './ui/FormInput.vue'
import store from '../store' 
import Card from './CardView.vue'

export default {

  name: 'ListView',

  props:{
    surveys: {},
    item: {}
  },

  components: {
    Modal,
    Card
  },
  
  created () {

  },
  ready (){
    

  },

  destroyed () {
    
  },

  methods: {
  
      clickedItem: function(itemclicked){
        
        var self = this;
        self.item = itemclicked;

      }
    
  }
}
</script>

<style lang="stylus">


.listContainer {
    height: 400px;
    padding-top: 101px;
}
.padTop10{
  padding-top:10px;
}

.activeItem{
  font-size: 14px;
  color: red;
}

img[lazy=loading]{
    /*your style here*/
    .loading{
      opacity: 0.1;
    }
  }
  img[lazy=error]{
    /*your style here*/
    background-color: red;
  }
  .loading:after{
  content: "1";
  display: block;
  width: 40px!important;
  height: 40px;
  margin: 100px auto;
  background-color: #333;
 
  border-radius: 100%; 
  -webkit-animation: scaleout 1.0s infinite ease-in-out;
  animation: scaleout 1.0s infinite ease-in-out;
}
 
@-webkit-keyframes scaleout {
  0% { -webkit-transform: scale(0.0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}
 
@keyframes scaleout {
  0% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 100% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}


</style>
