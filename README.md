[![Board Status](https://dev.azure.com/kapilchadha/89106925-0a6d-41be-9c2f-e509b10b068e/8002c415-a227-490c-9be8-ce3115f3a6a2/_apis/work/boardbadge/726d22ae-a82d-4f03-a54e-a6899f59a3ad)](https://dev.azure.com/kapilchadha/89106925-0a6d-41be-9c2f-e509b10b068e/_boards/board/t/8002c415-a227-490c-9be8-ce3115f3a6a2/Microsoft.RequirementCategory)
## Welcome


This repository contains the base project part of our on-site GitHub Verified Partner workshop program. It is meant to be used for in-classroom training under the supervision of GitHub coaches. Change by balbir

This is the NodeJS version of our "Tonkotsu" workshop webapp. The codebase is pretty simple: it's a NodeJS app that will connect to GitHub's [Octocat API endpoint](https://api.github.com/octocat) and return the Zen quote of the day. E.g.:

### Demo (sucess) 

![out](https://user-images.githubusercontent.com/1078545/57860397-bc7ff380-77ec-11e9-80f8-39e02ef3c035.gif)


### Demo (failure)

![out](https://user-images.githubusercontent.com/1078545/57860396-bc7ff380-77ec-11e9-8f55-83b879e667d2.gif)


There are some built-in unit tests to ensure that everything can be verified.

### Instructions

Please fork this repository and ensure you have a local working copy. You will need a working NodeJS environment. Get the latest stable version from https://nodejs.org/en/download/ or via your OS package manager (e.g. `brew` on Mac or `chocolatey` on Windows). 

Setup:

```
npm install 
```

Tests:

```
npm run test
```

Run server (defaults to localhost:3000):

```
npm start
```

Follow the coach instructions and good luck!
