import { MongoHelper } from "./helpers/mongo-helper";
import dotenv from "dotenv";
import app from "./config/app";

dotenv.config({ path: ".env" });

const port = process.env.PORT;

MongoHelper.connect(process.env.MONGO_URL)
  .then(async () => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(console.error);
