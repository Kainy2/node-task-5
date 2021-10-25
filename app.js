const express = require('express')
const UserRequests = require('./controller/UserRequests')
const upload = require('./config')

const app = express()
app.use(express.json({ urlencoded: false }))


// Get all users
app.get('/user/all', UserRequests.getAllUsers)

// Get one user
app.get('/user/:id', UserRequests.getOneUser)

// Post request to add new users
app.post('/user', UserRequests.postReq)

// Delete request to add new users
app.delete('/user/:id', UserRequests.deleteUser)

// Put request to add new users
app.put('/user/:id', upload.single('avatar'), UserRequests.putReq)


const port = process.env.PORT || 3000

app.listen(port, () => { console.log(`Server is running on port ${port}`) })