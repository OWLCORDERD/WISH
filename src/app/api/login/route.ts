import mysql2 from "mysql2/promise";
import { NextResponse } from "next/server";

interface example {
  userEmail: string;
  password: string;
}

export async function POST(request: Request) {
  let connection = null;

  const body: example = await request.json();

  const email = body.userEmail;

  if (connection === null) {
    connection = await mysql2.createConnection({
      host: process.env.MYSQL_HOST,
      user: "root",
      database: "wish",
      password: process.env.MYSQL_PASSWORD,
    });
  }

  try {
    const query = "select username, password from User where email = ?";

    const values = [email];

    const [data] = await connection.execute(query, values);

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ message: "error database" });
  }
}
