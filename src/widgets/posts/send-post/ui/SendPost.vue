<template>
  <div class="send-post border-sm pa-4 d-flex flex-column">
    <v-textarea
      v-model="textPost"
      label=""
      placeholder="What’s happening?"
      variant="solo"
      class="elevation-0 text-subtitle-1"
      rows="2"
      no-resize
    >
      <template #prepend-inner>
        <div class="avatar cursor-pointer">
          <v-avatar v-if="avatarUrl" >
            <v-img :src="avatarUrl" alt="avatar" />
          </v-avatar>
          <v-avatar v-else color="grey" size="64">
            <v-icon icon="mdi-account-circle" size="64"></v-icon>
          </v-avatar>
        </div>
      </template>
    </v-textarea>
    <v-btn
      color="green-1"
      size="large"
      rounded="lg"
      class="align-self-end"
      :disabled="isDisabled"
    >
      {{textBtn}}
    </v-btn>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'SendPost',
  props: {
    avatarUrl: String
  },
  data () {
    return {
      textPost: ''
    }
  },
  computed: {
    textBtn (): string {
      return 'Croak'
    },
    isDisabled (): boolean {
      return !this.textPost
    }
  }
})
</script>
