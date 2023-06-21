const { db } = require('../firebase')

// POST - Create Job
exports.job_create_post = async (req, res) => {
    try {

    }
    catch (err) {
        console.log(err)
        res.status(500).json({error: 'Failed to create Job'})
    }
}

// GET - Job index
exports.job_index_get = async (req, res) => {
    try {
        const jobs = await db.collection('Jobs').get()
        // const documents = jobs.docs.map((doc) => doc.data())
        console.log('Fetching Jobs')
        res.json(jobs)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({error: 'Failed to retrieve Jobs'})
    }
}