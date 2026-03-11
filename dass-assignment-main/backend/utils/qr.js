import QRCode from "qrcode"

export const gen = async (d) => {
  return await QRCode.toDataURL(d.toString())
}