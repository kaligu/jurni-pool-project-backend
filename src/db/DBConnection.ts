// import mongoose
import mongoose from "mongoose";
// import environment variables
import dotenv from 'dotenv';
dotenv.config();

// create a class to implement the singleton pattern
class Database {
  private static instance: Database | null = null;

  private constructor() {
    // private constructor to prevent instantiation
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
      Database.instance.connectToDatabase();
    }
    return Database.instance;
  }

  private async connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGODB_URL as string);
      console.log("DB Connected Successfully");
    } catch (error) {
      console.error("DB Connection Error:", error);
    }
  }

  // additional methods or properties can be added as needed
  getMongooseInstance(): typeof mongoose {
    return mongoose;
  }
}

// call the getInstance method to get the singleton instance
const databaseInstance = Database.getInstance();

// export the mongoose instance from the singleton instance
export const mongooseInstance = databaseInstance.getMongooseInstance();
