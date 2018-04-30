// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import * as firebase from "firebase";
if (!firebase.apps.length) {
  firebase.initializeApp({});
}
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyB2qSPiAXRb-mPW6uDQ21O2VcKVtMPoiCQ",
    authDomain: "capex-81906.firebaseapp.com",
    databaseURL: "https://capex-81906.firebaseio.com",
    projectId: "capex-81906",
    storageBucket: "",
    messagingSenderId: "41938723753"
  }
};

export default !firebase.apps.length ? firebase.initializeApp(environment) : firebase.app();
