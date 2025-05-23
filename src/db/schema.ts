import { pgSchema, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

// Define minimal auth schema for relationships
export const authSchema = pgSchema("auth");

// Define minimal auth.users table structure (only what we need for relations)
export const users = authSchema.table("users", {
    id: uuid("id").primaryKey(),
    // We don't need to define other fields from auth.users
    // since we're only using this for the foreign key relationship
});

// profiles table definition (public schema)
export const profiles = pgTable("profiles", {
    id: uuid("id").primaryKey().defaultRandom(),
    email: text("email").notNull().unique(),
    name: text("name"),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
    user_id: uuid("user_id").references(() => users.id).notNull(),
});
