const fetch = require("node-fetch");

const utils = {
  greetings: to => {
    if (!to) {
      throw new Error("Argument expected");
    }

    return `Hello ${to} 👋👋`;
  },

  makeHeading: text => (text ? `<h1>${String(text).trim()}</h1>` : ""),

  formatCodeBlock: text => (text ? `<pre>${text}</pre>` : ""),

  fetchQuote: async function() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hey there bud"), 500);
    });
    let result = await promise;
    return result;
  },

  fetchZen: async function() {
    const response = await fetch("https://api.github.com/octocat");
    const message = await response.text();
    if (response.status != 200) {
      throw new Error(
        `Received ${response.status} status code. Reason: ${message}`
      );
    }
    return message;
  }
};

module.exports = utils;
