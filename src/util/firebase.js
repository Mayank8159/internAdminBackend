var admin = require("firebase-admin");

const admin = require('firebase-admin');

const decoded = Buffer.from(process.env.FIREBASE_ADMIN_BASE64, 'base64').toString('utf-8');
const serviceAccount = JSON.parse(decoded);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;