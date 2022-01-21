<template>
  <h1>Reaction Timer</h1>
  <button @click="play" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @reaction="endGame" />
  <Results v-if="showResults" :score="score" />
</template>

<script>
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";

export default {
  name: "App",

  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  components: {
    Block,
    Results,
  },
  methods: {
    play() {
      this.delay = Math.random() * 5000 + 2000;
      this.showResults = false;
      this.isPlaying = true;
    },
    endGame(reactionTime) {
      this.isPlaying = false;
      this.score = reactionTime;
      this.showResults = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}

button {
  background-color: #0faf87;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
