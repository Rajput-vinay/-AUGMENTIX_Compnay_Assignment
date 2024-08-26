const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/db');
const PostRoutes = require('./routes/Post.routes');
const UserRoutes = require('./routes/User.routes');
const { errorHandler,notFound } = require('./middlewares/ErrHandler.middleware');
require("dotenv").config();
const app = express()
const port = process.env.PORT || 4000;

dbConnect();

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.use("/api/user/",UserRoutes)
app.use("/api/post/",PostRoutes);

app.use( notFound )
app.use(errorHandler);


const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
