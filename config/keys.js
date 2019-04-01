// module.exports = {
//   mongoURI:
//     "mongodb+srv://admin:admin@cluster0-p27oq.mongodb.net/test?retryWrites=true",
//   secretOrKey: "secret"
// };

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}
