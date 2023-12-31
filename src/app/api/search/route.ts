import mysql2 from "mysql2/promise";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let connection = null;

  if (req.method === "POST") {
    const body = await req.json();

    const keyword = body.keyword;

    if (connection === null) {
      connection = await mysql2.createConnection({
        host: process.env.MYSQL_HOST,
        database: "wish",
        password: process.env.MYSQL_PASSWORD,
        user: "root",
      });
    }

    try {
      if (keyword !== undefined) {
        const SQLquery = `SELECT * FROM clothes WHERE title LIKE '%${keyword}%'`;

        const [data] = await connection.execute(SQLquery);

        return NextResponse.json({ data: data });
      }
    } catch (err) {
      return NextResponse.json({ err: err });
    }
  }
}
