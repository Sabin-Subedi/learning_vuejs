<template>
  <p>Result: {{ score }} ms</p>
  <p class="comment">{{ comment }}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return { comment: "" };
  },
  mounted() {
    if (this.score < 250) {
      this.comment = "Ninja Fingers";
    } else if (this.score < 400) {
      this.comment = "Rapid Reflexes";
    } else {
      this.comment = "Snail pace....";
    }
  },
};
</script>

<style>
.comment {
  font-size: 1.4rem;
  color: #0faf87;
  font-weight: bold;
}
</style>
