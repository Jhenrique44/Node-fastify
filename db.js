import 'dotenv/config';
import postgres from "postgres";

require("dotenv").config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`

export const sql = postgres(URL, { 
    ssl: 'require'
})