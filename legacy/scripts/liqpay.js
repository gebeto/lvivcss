const data = {
  "version": "3",
  "public_key": "i60801407205",
  "action": "pay",
  "amount": "1500",
  "currency": "UAH",
  "description": "test",
  "order_id": cuid(),
  "sandbox": "1",
  "result_url": "lvivcss.com.ua"
};

const init = JSON.stringify(data)
const public = 'i60801407205';
const private = 'avMNEEaiOsY1AlfDMmKwsaeqqkjUV8weDKUXbxpW';

const payload = btoa(JSON.stringify(data));

sign_string = `${private}${payload}${private}`;
const SHA = new Hashes.SHA1;
const signature = SHA.b64(sign_string);

window.LiqPayCheckoutCallback = function () {
  console.log(1);
}

LiqPayCheckout.init({
  data: payload,
  signature,
  embedTo: "#widget",
  language: "en",
  paytypes: ["card","privat24"],
  mode: "popup" // embed || popup
}).on("liqpay.callback", function (data) {
  console.log(data.status);
  console.log(data);
}).on("liqpay.ready", function (data) {
  // ready
  console.log(data);
}).on("liqpay.close", function (data) {
  // close
  console.log(data);
});