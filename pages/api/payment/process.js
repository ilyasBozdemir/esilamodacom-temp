import axios from "axios";

export default async function handler(req, res) {
  try {
    const {
      amount, cardHolderName, cardNumber, expireMonth, expireYear, cvc, buyerId, buyerName, buyerSurname, buyerGsmNumber, buyerEmail, buyerIdentityNumber, buyerLastLoginDate, buyerRegistrationDate, buyerRegistrationAddress, buyerIp, buyerCity, buyerCountry, buyerZipCode, shippingContactName, shippingCity, shippingCountry, shippingDescription, shippingZipCode, billingContactName, billingCity, billingCountry, billingDescription, billingZipCode, basketItemId, basketItemName, basketItemCategory
    } = req.body;

    // iyzico API isteği için gerekli olan bilgiler
    const data = {
      Amount: amount,
      CardHolderName: cardHolderName,
      CardNumber: cardNumber,
      ExpireMonth: expireMonth,
      ExpireYear: expireYear,
      Cvc: cvc,
      BuyerId: buyerId,
      BuyerName: buyerName,
      BuyerSurname: buyerSurname,
      BuyerGsmNumber: buyerGsmNumber,
      BuyerEmail: buyerEmail,
      BuyerIdentityNumber: buyerIdentityNumber,
      BuyerLastLoginDate: buyerLastLoginDate,
      BuyerRegistrationDate: buyerRegistrationDate,
      BuyerRegistrationAddress: buyerRegistrationAddress,
      BuyerIp: buyerIp,
      BuyerCity: buyerCity,
      BuyerCountry: buyerCountry,
      BuyerZipCode: buyerZipCode,
      ShippingContactName: shippingContactName,
      ShippingCity: shippingCity,
      ShippingCountry: shippingCountry,
      ShippingDescription: shippingDescription,
      ShippingZipCode: shippingZipCode,
      BillingContactName: billingContactName,
      BillingCity: billingCity,
      BillingCountry: billingCountry,
      BillingDescription: billingDescription,
      BillingZipCode: billingZipCode,
      BasketItemId: basketItemId,
      BasketItemName: basketItemName,
      BasketItemCategory: basketItemCategory
    };

    // iyzico API'si ile iletişim kurmak için gereken ayarlar
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${process.env.IYZICO_API_KEY}`
      },
    };

    // iyzico API'si için ödeme isteği gönderimi
    const response = await axios.post(
      process.env.IYZICO_BASE_URL,
      //data,
      //config
    );

    res.status(200).json(response.data);

  } catch (error) {
    console.error(error);
    res.status(405).json(
      {
        message:
          "Ödeme işlemi gerçekleştirilemedi.Tekrar deneyiniz."
      });
  }
}