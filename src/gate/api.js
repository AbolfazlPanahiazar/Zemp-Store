import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "https://woocommerce.maktabsharif.ir",
  consumerKey: "ck_d81c9505db57e2634bcbbcfeb75ab5b7ef71bba5",
  consumerSecret: "cs_a8a54f4294bbd8208220a79764a9273c016db530",
  version: "wc/v3",
});

export default api;
