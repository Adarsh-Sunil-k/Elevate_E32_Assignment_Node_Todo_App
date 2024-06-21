const express = require('express');
const dotenv = require('dotenv').config();
const todosRoutes = require("./routes/todosRoutes");


const app = express();

app.use(express.json());
app.use('/api/todos',todosRoutes );

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server running on the port${port}`);
});
  