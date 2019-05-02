const { fetchQuote, fetchZen } = require("./lib/utils");
const https = require("https");

(async () => {
  console.log("Fetching remote message... please wait.");
  const msg = await fetchZen();
  console.log(msg);
})().catch(err => console.log("Oh noes!", err));
