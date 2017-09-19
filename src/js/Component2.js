export const otherPage = new Vue({
  el: '#other-page',
  data: {
    greeting: "",
  },
  mounted() {
    this.initialize();
  },
  methods:{
    initialize: function(){
     this.greeting = "It this is Other Page ;)";
    }
  },
});