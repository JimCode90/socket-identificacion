import { config } from "dotenv";
config();

// Server
export const PORT = process.env.PORT || 3000;

// MYSQL
export const MYSQL_HOST = process.env.MYSQL_HOST || "localhost";
export const MYSQL_USER = process.env.MYSQL_USER || "root";
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "123456";
export const MYSQL_DATABASE = process.env.MYSQL_DATABASE || "bd_facereconition";
export const MYSQL_PORT = process.env.MYSQL_PORT || 3306;

