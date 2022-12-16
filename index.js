import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';
import mongoose from 'mongoose';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));

mongoose.connect(
  `mongodb+srv://ehsan:<password>@cluster0.ayyilrp.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlparser: true, useUnifiedTopoloqy:true},
  () => {
    console.log('DB connected')
  }


)


/*{
    firstname: "Ehsan",
    lastName: "Hussain",
    age: 21
  },
  {
    firstname: "Jane",
    lastName: "Doe",
    age: 24
  }*/