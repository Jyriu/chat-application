import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectToMongoDB from './db/connectToMongoDB.js ';

import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/messages.routes.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming request with JSON payloads (from req.body)
app.use(cookieParser()); // to parse the incoming request cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get('/', (req, res) => {
//      root route http://localhost:5000/
//     res.send('Hello !!');
// });


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});