var firebaseAdmin = require("../firebase.js");

const {getFirestore, Timestamp, FieldValue, Filter} = require('firebase-admin/firestore');
const db = getFirestore();

exports.getUsers = async (req, res) => {
    const usersRef = db.collection('Users');
    const snapshot = await usersRef.get();

    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });

    res.json('Welcome to the Root')
}
