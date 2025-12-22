import QRCode from "qrcode";

export const generateQR = async (productId) => {
  try {
    const qrData = await QRCode.toDataURL(productId.toString());
    return qrData;
  } catch (error) {
    console.error("QR Code generation failed:", error);
    return null;
  }
};
