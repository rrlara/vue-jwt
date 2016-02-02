<template>

<div class="row">
  <div class="loginContainer col-md-6 col-md-offset-3">

        <div id="alerts" v-if="messages.length > 0">
          <div v-for="message in messages" class="alert alert-{{ message.type }}" role="alert">
            {{ message.message }}
          </div>
        </div>


      <validator name="validation">
        <form novalidate>
          <p class="validate-field col-xs-6" v-for="field in fields">
          <label :for="field.id">{{field.label}}</label><br>
          <input type="text" :id="field.id" :placeholder="field.placeholder" field="{{field.name}}" v-validate="field.validate" class="form-input" v-model="field.value">
          </p>
          <!-- <pre class="col-xs-12">{{ $validation | json }}</pre> -->

          <!-- <pre class="col-xs-12">{{ fields | json }}</pre> -->
          <!-- <input type="submit" value="send" v-if="$validation.valid"> -->
          <div class="col-xs-6 padTop10">
            <button-view @click="attempLogginIn()" class="button" :class="[$validation.valid ? 'button-general' : 'button-disabled']">Login</button-view>
          </div>
        </form>
      </validator>

  </div>
</div>
  

</template>

<script>
// import store from '../store'
import ButtonView from './ui/Button.vue'

export default {

  name: 'Login',

  props: {
      
  },

  components: {

    ButtonView
  
  },
  data () {
    return {
      fields: [{
        id: 'username',
        label: 'username',
        name: 'username',
        placeholder: 'input your username',
        validate: { required: true },
        value:""
      }, {
        id: 'password',
        label: 'password',
        name: 'password',
        placeholder: 'input your password',
        validate: { required: true },
        value:""
      }],
      user: {
        email: null,
        password: null
      },
      messages: [],
      creds: {
        usrname: "admin",
        passw: "admin"
      },
      authorized: false
    }
  },

  computed: {



  },

  created () {
    
  },
  ready (){
    

  },

  destroyed () {
    
  },

  methods: {

    attempLogginIn: function (){

      var that = this

      that.messages = []
      that.messages.push({type: 'success', message: 'Welcome'})


      if (that.fields[0].value === that.creds.usrname && that.fields[1].value === that.creds.passw){
          setTimeout(function () {
            that.$route.router.go('/listmap');
          }, 1000);

          that.authorized = true;

          that.$dispatch('child-msg', that.authorized);
          
      }else{

        that.authorized = false;

        that.$dispatch('child-msg', that.authorized);

          that.messages = []
          that.messages.push({type: 'danger', message: 'Sorry, you provided invalid credentials'})

      }

    }
  }
}
</script>

<style lang="stylus">
.loginContainer {
    height: 400px;
    padding-top: 101px;
}
.padTop10{
  padding-top:10px;
}


</style>
