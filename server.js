const express = require("express");
const routes = require("./routes");
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); //allows us to pass json objects in html body
app.use(express.urlencoded({ extended: true })); //allows us to pass query information within url

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
