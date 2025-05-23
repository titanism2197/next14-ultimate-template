import { createClient } from "@supabase/supabase-js";
import { db } from "@/db";
import { profiles } from "@/db/schema";
import { eq } from "drizzle-orm";

// Supabase 클라이언트 생성
export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

// // Drizzle과 Supabase를 함께 사용하는 예시 함수
// export async function getUserWithPosts(userId: string) {
//     // Supabase 실시간 구독 설정
//     const subscription = supabase
//         .channel("user-changes")
//         .on(
//             "postgres_changes",
//             {
//                 event: "*",
//                 schema: "public",
//                 table: "users",
//                 filter: `id=eq.${userId}`,
//             },
//             (payload) => {
//                 console.log("Change received!", payload);
//             },
//         )
//         .subscribe();

//     // Drizzle을 사용한 쿼리
//     const user = await db.select().from(users).where(eq(users.id, userId));

//     return { user, subscription };
// }
