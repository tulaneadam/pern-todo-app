const {Pool} = require("pg");

// const pool = new Pool({
//   user: "cgizchrc",
//   password: "awjY9UuiowR0QKTu0mizoF9Gr2mVFeAo",
//   host: "castor.db.elephantsql.com",
//   port: 5432,
//   database: "cgizchrc"
// });

// module.exports = pool;
const pool = new Pool
module.exports = {
  query: (text, params) => pool.query(text, params),
}
