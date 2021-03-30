<template>
  <div>
    <slot></slot
    ><input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "這是一個 Vue 組件檔！",
    };
  },
};
</script>