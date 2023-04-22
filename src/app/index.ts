import { VueClipboard } from '@soerenmartius/vue3-clipboard'
import { createApp } from 'vue'

import App from '@/app/Index.vue'

import { router, store, vuetify, VueConnectWallet } from '@/app/providers'
require('dotenv').config()

export const app = createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .use(VueConnectWallet)
  .use(VueClipboard)
