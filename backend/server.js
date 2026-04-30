const express = require('express')
const path = require('path')
const cors = require('cors')
const dotenv = require('dotenv')
const session = require('express-session')
const healthRoutes = require('./src/routes/healthRoutes')
const productRoutes = require('./src/routes/productRoutes')
const adminRoutes = require('./src/routes/adminRoutes')

dotenv.config()

const app = express()

const PORT = Number(process.env.PORT || 4000)
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173'

app.use(
	cors({
		origin: CLIENT_ORIGIN,
	}),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'view'))

app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use(
    session({
        secret: process.env.SESSION_SECRET || 'asan_session_secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            sameSite: 'lax',
        },
    }),
)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/api', healthRoutes)
app.use('/api', productRoutes)
app.use('/api', adminRoutes)

app.get('/', (_req, res) => {
    res.redirect('/admin/login')
})

app.listen(PORT, () => {
	console.log(`Backend running on http://localhost:${PORT}`)
})
