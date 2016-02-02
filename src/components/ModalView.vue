<template>
  
<div class="modal-mask" v-show="show" transition="modal">


        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <h3 class="t-header-sub" slot="header">Modal</h3>
                    <div class="modal-close" @click="show = false">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="modal-body">
                    <slot name="content">
                        <div>
                            <div class="">Id: <span style="color: #999999; font-size: 13px">{{item.properties.id}}</span></div>

                            <div class="">Survey Name: <span style="color: #999999; font-size: 13px">{{item.properties.attributes.surveyName}}</span></div>

                            <div class="" v-if="item.properties.attributes.approved">Approved: <span style="color: #999999; font-size: 13px">Yes</span></div>
                            <div class="" v-else>Approved: <span style="color: #999999; font-size: 13px">No</span></div>

                            <div>
                              <img width="200" style="padding: 10px 0px"
                                   class="dialogImages" src="{{ item.properties.attributes.photo._url }}">
                            </div>

                            </div>
                    </slot>
                </div>

                <div class="modal-footer cf">
                    <!--<button class="button button-warning" @click="show = false">Confirm action</button>-->
                </div>
            </div>
        </div>
    </div>

</template>

<script>
// import store from '../store'
// import Item from './Item.vue'

export default {

  name: 'ModalView',

  props: {
      show: {
          type: Boolean,
          required: true,
          twoWay: true
      },
      item: {}
  },


  components: {

    
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
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity .16s linear;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    max-width: 480px;
    margin: 0px auto;
    padding: 1.5rem 2rem 1.8rem 2rem;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px #C5C5C5;
    transition: all .12s ease-in;
    overflow: auto;
    max-height: 600px;
}

.modal-header {
    position: relative;
}

.modal-full {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    display: table;
    transition: opacity .12s linear;
}

.modal-full-wrapper {
    padding: 6rem 2rem;
    margin: 0 auto;
    max-width: 640px;
    box-sizing: inherit;
    position: relative;
    transition: all .12s ease-in;
}

.modal-full-wrapper .modal-close {
    top: 6.2rem;
    right: -4rem;
    transform: translate(0, 0);
}

.modal-close {
    height: 25px;
    width: 25px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
}

.modal-close:hover {
    cursor: pointer;
}

.modal-close:hover span {
    background-color: black;
}

.modal-close span {
    position: absolute;
    Z-index: 1;
    width: 2px;
    height: 28px;
    top: -1px;
    margin-left: 12px;
    background-color: gray;
    transition: all .12s linear;
    display: block;
}

.modal-close span:first-child {
    transform: rotate(45deg);
}

.modal-close span:last-child {
    transform: rotate(135deg);
}

.modal-body {
    padding: 1rem 0 2rem 0;
}

.modal-default-button {
    float: right;
}

.modal-enter, .modal-leave {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    opacity: 0;
}

.modal-enter .modal-full-wrapper,
.modal-leave .modal-full-wrapper {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
    opacity: 0;
}

</style>
