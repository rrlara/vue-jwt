<template>

<div class="cardContainer"  :item="item">
        <header>
            <div class="bio">
        <img  v-lazy="item.properties.attributes.thumbnail._url" alt="background" class="bg">
                <div class="desc">
                    <h3>@carlf</h3>
                    <p>{{item.properties.attributes.comment}}</p>
                    <!-- <mini-map @click="getMap()" :item="item"></mini-map> -->
                </div>

                <slider-view>
                  <img :src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/arch.jpg">
                  <img :src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/sunset.jpg">
                </slider-view>
            </div>
            
            <div class="avatarcontainer">
                <img src="https://avatars2.githubusercontent.com/u/4370150?v=3&s=140" alt="avatar" class="avatar">
                <div class="hover">
                        <div class="icon-twitter"></div>
                </div>
            </div>


        </header>

        <div class="content">
            <div class="data">
                <ul>
                    <li>
                        {{item.properties.attributes.latitude | short }}
                        <span>Latitude</span>
                    </li>
                    <li>
                        {{item.properties.attributes.longitude | short }}
                        <span>Longitude</span>
                    </li>
                    <li>
                        {{item.properties.attributes.altitude | short }}
                        <span>Altitude</span>
                    </li>
                </ul>
            </div>

            <div class="follow">
              <div class="icon-twitter"></div>Show Map
            </div>
        </div>

    </div>
  


</template>

<script>
// import store from '../store'
import MiniMap from './MapInsetView.vue'

export default {

  name: 'ModalView',

  props: {
      item: {}
  },


  components: {

    MiniMap
        
  },

  created () {
    
  },
  ready (){
    

  },

  destroyed () {
    
  },

  methods: {

    getMap: function(itemclicked){
        
        var self = this;
        self.item = itemclicked;

      }
    
    
  }
}
</script>

<style lang="stylus">
header {
  display: block;
  overflow: hidden;
  position: relative;
  //padding-bottom: 2em;
  -moz-border-radius-topleft: 8px;
  -webkit-border-top-left-radius: 8px;
  border-top-left-radius: 8px;
  -moz-border-radius-topright: 8px;
  -webkit-border-top-right-radius: 8px;
  border-top-right-radius: 8px; }

.cardContainer {
  min-width: 260px;
  max-width: 640px;
  margin: 3em auto 1em auto;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
  padding-bottom: 1.5em;
  background-color: #dde1e2;
  -webkit-box-shadow: #bdc3c7 0 5px 5px;
  -moz-box-shadow: #bdc3c7 0 5px 5px;
  box-shadow: #bdc3c7 0 5px 5px; }

.bg {
  border-bottom: 8px solid #5cc0ff;
  width: 100%;
  background-color:gray;
}

.bio:hover > .desc {
  cursor: pointer;
  opacity: 1; }

.avatarcontainer {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  //margin: auto;
  width: 50px;
  height: 50px;
  display: block; }
  .avatarcontainer:hover > .hover {
    opacity: 1; }

.avatar {
  width: 100%;
  border: 2px solid #5cc0ff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  overflow: hidden;
  position: relative; }
  .avatar img {
    width: 65px;
    height: 65px; }
  .avatar:hover + .hover {
    opacity: 1;
    cursor: pointer; }

.hover {
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: #3498db;
  top: 0;
  font-size: 1.8em;
  text-align: center;
  color: white;
  padding-top: 18%;
  opacity: 0;
  font-family: 'FontAwesome';
  font-weight: 300;
  border: 8px solid #5cc0ff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition-property: all;
  -moz-transition-property: all;
  -o-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease;
  -moz-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease; }

.data {
  margin-top: .6em;
  color: #81878b; }
  .data li {
    width: 32%;
    text-align: center;
    display: inline-block;
    font-size: 1.5em;
    font-family: 'Lato';
    border-right: solid 1px #bdc3c7; }
    .data li:last-child {
      border: none; }
    .data li span {
      display: block;
      text-transform: uppercase;
      font-family: 'Quicksand';
      font-size: .5em;
      margin-top: .6em;
      font-weight:700;
    }

.desc {
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  padding: 1.2em 1em 0 1em;
  color: white;
  text-align: center;
  opacity: 0;
  -webkit-transition-property: all;
  -moz-transition-property: all;
  -o-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-in;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in; }
  .desc h3 {
    font-family: "Lato";
    font-size: 1.2em;
    margin-bottom: .5em; }
  .desc p {
    font-size: .9em;
    font-family: 'Quicksand';
    line-height: 1.5em; }

.follow {
  margin: 1.5em auto 0 auto;
  background-color: #2589cc;
  width: 150px;
  color: white;
  font-family: "Lato";
  text-align: center;
  padding: .5em;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  -webkit-transition-property: all;
  -moz-transition-property: all;
  -o-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease;
  -moz-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease; }
  .follow:hover {
    background-color: #167abd;
    cursor: pointer; }
</style>
