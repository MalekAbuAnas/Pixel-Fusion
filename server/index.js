import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));

const PORT = 3001;

/*=== Routing ===*/

app.get("/", async (req, res) => {
    res.send("Hello From Pixel Fusion");
})


/*=== Run Server ===*/
const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }


    
}
startServer();