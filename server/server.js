const express = require("express");
const cors = require("cors");

const UserRoutes = require("./routes/userRoutes");

const PORT = 5001;

const app = express();

const rooms = ["general", "tech", "finance", "crypto"];

// bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB
require("./connectDB");

// cross origin
app.use(cors());

app.use("/users", UserRoutes);

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: { orgin: "http://localhost:3000", methods: ["GET", "POST"] },
});

server.listen(PORT, () => console.log(`server is running on PORT: ${PORT} `));
