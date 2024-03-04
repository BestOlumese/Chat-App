const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const connectToMongoDB = require('./db/connectToMongoDB')
const authRoutes = require('./routes/auth.routes')
const cookieParser = require('cookie-parser')
const messageRoutes = require('./routes/message.routes')
const userRoutes = require('./routes/user.routes')
const { app, server } = require('./socket/socket')

dotenv.config()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/users', userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Listening at port ${PORT}`);
})