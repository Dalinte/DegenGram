type TColor = {[key: string]: string}

const green: TColor = {
  1: '#74B94C',
  2: '#68835B',
  3: '#EDF0EB',
  4: '#EDF0EB',
  5: '#F8FAF7',
  6: '#33691e',
  7: '#5FE453',
}

const pink: TColor = {
  1: '#F4245E',
}

const gray: TColor = {
  1: '#ACACAC',
}

const dark: TColor = {
  1: '#0F1419',
}

const neutral: TColor = {
  white: '#FFFFFF',
  black: '#000000',
}

export default Object.freeze({
  pink,
  green,
  gray,
  dark,
  neutral,
})
