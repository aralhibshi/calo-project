var admin = require("firebase-admin");

var serviceAccount = require("./calo-project-firebase-adminsdk-z8up0-9a3205781a.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});