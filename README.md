# dbs_test

## Instructions

1. On macOS, install npm first if it's not installed.
2. Then, run run.sh

## Source Code

### dist folder 

/dist contains the build for a static Vue.js SPA using the Nuxt framework. It also contains the offline build for iProov dependencies.

### backup folder

There is also the /backup folder for the iProov dependencies we've manually installed

## How it works

We have a QuickStart backend portal where your frontend code can call to retrieve the iProov token and validate results.

Since this simple POC is using `http-server` to serve the static content, it serves through port `8080`. We've hard-coded `assets_url` to point to `assets_url="http://localhost:8080"`.

You could take a look at this implementation in the **/pages** folder.