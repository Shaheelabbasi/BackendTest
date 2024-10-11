require('dotenv').config();
const app = require('./app.js');
const { connectDb } = require('./Db/connect.js');
// console.log("mongourl is ",process.env.MONGO_URL)
connectDb()
  .then(() => {
    app.listen(5000, () =>
      console.log(`Auth Server is running on the port 5000`)
    );
  })
  .catch(err => console.log(err));
