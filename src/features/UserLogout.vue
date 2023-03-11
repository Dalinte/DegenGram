<template>
  <div class="user-logout d-flex align-center">
    <div class="rounded-circle bg-grey mr-2">
      <v-icon class="ma-2" icon="mdi-account" size="large" />
    </div>
    <SplitText :text="address"/>
    <v-icon class="ml-2" icon="mdi-exit-to-app" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {SplitText} from '@/shared/ui'

export default defineComponent({
  name: 'UserLogout',
  components: {
    SplitText
  },
  props: {
    address: {
      type: String,
      required: true,
    }
  }
})
</script>

<style lang="scss" scoped>
  .user-logout {
    cursor: pointer;
  }
</style>

