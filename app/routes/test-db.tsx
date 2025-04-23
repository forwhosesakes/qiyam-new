import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function loader() {
  try {
    const testResult = await prisma.$queryRaw`SELECT 1+1 AS result`;
    return { status: "success", testResult };
  } catch (error) {
    return { status: "error", error: (error as Error).message };
  }
}

export default function TestDB() {
  return <div>Database test route</div>;
}