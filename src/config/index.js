if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  server: {
    port: process.env.PORT,
  },
};
