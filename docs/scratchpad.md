# Lessons Learned

- [2025-05-23] In Next.js, revalidatePath should not be used in authentication flows (login, logout, signup) unless the main page is personalized per user. Only use revalidatePath when shared, cached content actually changes for all users. This prevents unnecessary cache invalidation and improves performance.
- [2025-05-23] Colocating Zod schemas and inferred types in the same file (e.g., src/lib/schemas/auth.ts) improves maintainability and ensures type safety across both client and server usage. This pattern allows for single-source-of-truth validation and type inference.
