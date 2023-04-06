<script setup lang="ts">
const props = defineProps({
  context: Object,
})
</script>
<template>
  <a-select
    :value="props.context?._value"
    @update:value="props.context?.node.input($event)"
    v-bind="context?.attrs"
    style="width: 100%; height: 100%"
    :id="props.context?.id"
    :name="props.context?.node.name"
    @blur="props.context?.handlers.blur()"
    :disabled="props.context?.disabled"
  />
</template>
