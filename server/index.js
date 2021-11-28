const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser');
const {swaggerUi,specs} = require('./swagger');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))
const port = 4000;
app.listen(port, () => {
    console.log("Server listening on port" , port)
})

// 프론트에서
app.use('/api/movie',require('./routes/movieRouter'));
app.use('/api/user',require('./routes/userRouter'));
app.use('/api/payment',require('./routes/paymentRouter'));
app.use('/api/admin',require('./routes/adminRouter'));
app.use('/api/util',require('./routes/utilRouter'));
app.use('/api/staff',require('./routes/staffRouter'));
app.use('/api/ticket',require('./routes/ticketRouter'));
app.use('/api/reserve',require('./routes/reserveRouter'));
app.use('/api/event',require('./routes/eventRouter'));
app.use('/api/store',require('./routes/storeRouter'));
app.use('/api/props',require('./routes/propsRouter'));
app.use('/api/upload', require('./routes/upload'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

