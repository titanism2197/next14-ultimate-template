import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Supabase의 connection pooling을 사용할 때는 prepare를 false로 설정
const client = postgres(process.env.DATABASE_URL!, { prepare: false });

// drizzle 클라이언트 생성
export const db = drizzle(client, { schema });

// 타입 export
export type DbClient = typeof db;
