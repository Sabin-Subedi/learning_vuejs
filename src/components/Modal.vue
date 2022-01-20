<template>
  <div class="backdrop">
    <div class="modal">
      <p>modal content</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style scoped>
.modal {
  width: 400;
  padding: 20px;
  margin: 100px auto;
  background: #fff;
  border-radius: 5px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.527);
  width: 100%;
  height: 100%;
}
</style>
