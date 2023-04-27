import '@mdi/font/css/materialdesignicons.css'
import { createVuetify, ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import colors from '@/shared/config/colors'

export const icons = {
  defaultSet: 'mdi',
  sets: {
    mdi,
  },
  aliases,
}

const degenTheme: ThemeDefinition = {
  dark: false,
  colors: {
    'green-1': colors.green[1],
    'green-2': colors.green[2],
    'green-3': colors.green[3],
    'green-4': colors.green[4],
    'green-5': colors.green[5],
    'pink-1': colors.pink[1],
    'gray-1': colors.gray[1],
    'dark-1': colors.dark[1],
    white: colors.neutral.white,
    black: colors.neutral.black,
  },
}

export const theme = {
  defaultTheme: 'degenTheme',
  themes: {
    degenTheme,
  },
}

export const vuetifyConfig = {
  icons,
  theme,
}

export const vuetify = createVuetify(vuetifyConfig)
