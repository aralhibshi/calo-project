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

// GET - User Sign Up Page
exports.user_create_get = (req, res) => {
    res.render('user/signup')
}

// POST - User Create
exports.createUser = async (req, res) => {

    try {
        const usersRef = db.collection('Users');
        await usersRef.add(req.body);

        res.redirect('/user/signin')

        console.log('user has been created successfully')
    } catch (e) {
        res.json({ "message": "Error Creating User"})
        throw new Error('Error creating user');
    }
}

// GET - User Sign In page
exports.user_signin_get = (req, res) => {
    res.render('user/signin')
}

// POST - User Signin
exports.user_signin_post = async (req, res) => {
    try {
        const user = await db.collection('Users')
        const snapshot = await user.where('emailAddress', '==', req.body.emailAddress).get()
        console.log(snapshot)
        console.log(req.body.emailAddress)
    }
    catch (err) {
        console.log(err)
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
