const firebaseAdmin = require('../firebase')

const {getFirestore, Timestamp, FieldValue, Filter} = require('firebase-admin/firestore');
const db = getFirestore();

// POST - Create Job
exports.job_create_post = async (req, res) => {
    try {
        const jobs = await db.collection('Jobs')
        await jobs.add(req.body)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({error: 'Failed to create Job'})
    }
}

// GET - Job index
exports.job_index_get = async (req, res) => {
    try {
        const jobs = await db.collection('Jobs')
        const snapshot = await jobs.get()
        const allJobs = snapshot.docs

        const jobsArray = []
        allJobs.forEach((doc) => {
            jobsArray.push(doc.data())
        })
        res.render('job/index', {jobsArray})
    }
    catch (err) {
        console.log(err)
        res.status(500).json({error: 'Failed to retrieve Jobs'})
    }
}