export const splitEllipsis = (value: string, countFirst = 4, countLast = 4): string => {
  return `${value.substring(0, countFirst)}...${value.substring(value.length - countLast, value.length)}`
}
