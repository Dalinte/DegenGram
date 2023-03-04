export const splitEllipsis = (value: string, countFirst = 5, countLast = 5): string => {
  return `${value.substring(0, countFirst)}...${value.substring(value.length - countLast, value.length)}`
}
