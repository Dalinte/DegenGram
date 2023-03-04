import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export const icons = {
  defaultSet: 'mdi',
  sets: {
    mdi,
  },
  aliases,
}

export const vuetifyConfig = {
  icons,
}

export const vuetify = createVuetify(vuetifyConfig)
