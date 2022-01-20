const app = Vue.createApp({
  data() {
    return {
      title: "Hello Vue!",
      age: 10,
    };
  },
  methods: {
    changeTitle() {
      console.log(this);
      this.title = "Hi React !";
    },
  },
});

app.mount("#app");
