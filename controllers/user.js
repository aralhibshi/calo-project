var firebaseAdmin = require("../firebase.js");

const {getFirestore, Timestamp, FieldValue, Filter} = require('firebase-admin/firestore');
const db = getFirestore();

// GET - User Index
exports.getUsers = async (req, res) => {

    try {
        const usersRef = db.collection('Users');
        const snapshot = await usersRef.get();
        
        res.json(snapshot.docs)

    } catch (e) {
        console.error('Error creating user:', e);
        throw new Error('Error creating user');
    }
}

// POST - User Create
exports.createUser = async (req, res) => {

    try {
        const usersRef = db.collection('Users');
        await usersRef.add(req.body);

        console.log('user has been created successfully')
    } catch (e) {
        console.error('Error creating user:', e);
        throw new Error('Error creating user');
    }
}

// POST - User Delete
exports.deleteUser = async (req, res) => {

    try {
        const usersRef = db.collection('Users').doc(req.body.id)
        await usersRef.delete();

        console.log('user has been deleted successfully')
    } catch (e) {
        console.error('Error deleting user:', e);
        throw new Error('Error deleting user');
    }
}
