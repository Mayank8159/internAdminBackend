var admin = require("firebase-admin");

var serviceAccount = require("./FirebaseAdminSDK.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;