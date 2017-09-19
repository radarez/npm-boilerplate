export const vueComponent = new Vue({
  el: '#vue-component',
  data: {
    greeting: "",
  },
  mounted() {
    this.initialize();
  },
  methods:{
    initialize: function(){
     this.greeting = "Hello :P";
    }
  },
});
