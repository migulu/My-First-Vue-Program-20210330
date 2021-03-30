<template>
  <div>
    <p>
      Hi {{ name }}, I am <slot></slot> or <slot name="migulu"></slot> /
      <slot name="fuck"></slot>
    </p>
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