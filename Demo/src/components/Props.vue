<template>
  <div>
    <p>Message from Parent: {{ parentMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'PropsDemo',
  props: {
    parentMessage: {
      type: String,
      default: 'Default Parent Message'
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

p {
  font-size: 18px;
  color: #fff;
}
</style>
