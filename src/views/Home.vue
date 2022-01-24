<template>
  <div class="home">{{ age }}</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  setup() {
    let name = "mario";
    let age = 30;

    return {
      name,
      age,
    };
  },
};
</script>
