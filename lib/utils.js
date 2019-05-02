const fetch = require("node-fetch");

const utils = {
  greetings: to => {
    if (!to) {
      throw new Error("Argument expected");
    }

    return `Hello ${to} 👋👋`;
  },

  makeHeading: text => (text ? `<h1>${String(text).trim()}</h1>` : ""),

  fetchQuote: async function() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hey there bud"), 500);
    });
    let result = await promise;
    return result;
  },

  fetchZen: async function() {
    let response = await fetch("https://api.github.com/octocat");
    let quote = await response.text();
    return quote;
  }
};

module.exports = utils;
