<template>
  <p>{{splitText}}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { splitEllipsis } from '@/shared/lib'

export default defineComponent({
  name: 'SplitText',
  props: {
    text: {
      type: String,
      required: true,
    }
  },
  computed: {
    splitText() {
      return splitEllipsis(this.text)
    }
  }
})
</script>

