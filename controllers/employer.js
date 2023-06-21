var firebaseAdmin = require("../firebase.js");

const {getFirestore, Timestamp, FieldValue, Filter} = require('firebase-admin/firestore');
const db = getFirestore();

// POST - Employer Create
exports.employer_create_post = async (req, res) => {

    try {
        const usersRef = db.collection('Employers');
        await usersRef.add(req.body);

        console.log('Employer has been created successfully')
    } catch (e) {
        console.error('Error creating Employer:', e);
        throw new Error('Error creating Employer');
    }
}

// POST - Emplyer Delete
exports.employer_delete = async (req, res) => {

    try {
        const usersRef = db.collection('Employers').doc(req.body.id)
        await usersRef.delete();

        console.log('Employer has been deleted successfully')
    } catch (e) {
        console.error('Error deleting Employer:', e);
        throw new Error('Error deleting Employer');
    }
}