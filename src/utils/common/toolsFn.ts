/**
 * hex转Rgb(a)
 * @param hex 要转换的hex值,如#333、#3338、#a1b2c3、#a1b2c388
 * @returns rgb(a)值，如 '91, 97, 255'或'91, 97, 255, 0.53'
 * @example hexToRgb('#333') // '51, 51, 51'
 */
export function hexToRgb(hex: string) {
  const throwError = () => {
    throw new Error('传入了错误的Hex值')
  }
  const isHexColor = (value: string) => {
    return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(value)
  }
  if (!isHexColor(hex)) {
    throwError()
  }
  const cleanHex = hex.replace('#', '')
  const length = cleanHex.length
  const parseHex = (offset: number) => {
    return parseInt(cleanHex.substring(offset, offset + 2), 16)
  }

  const getRgb = () => {
    switch (length) {
      case 3:
        return [parseHex(0), parseHex(1), parseHex(2)]
      case 4:
        return [parseHex(0), parseHex(1), parseHex(2), parseHex(3) / 255]
      case 6:
        return [parseHex(0), parseHex(2), parseHex(4)]
      case 8:
        return [parseHex(0), parseHex(2), parseHex(4), parseHex(6) / 255]
      default:
        return throwError()
    }
  }
  const [r, g, b, a = 1] = getRgb()
  return `${r}, ${g}, ${b}${a !== 1 ? `, ${a}` : ''}`
}
