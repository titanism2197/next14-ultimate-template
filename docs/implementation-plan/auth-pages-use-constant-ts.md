## Project Status Board

- [x] Update login page to use constants from constant.ts for error messages and URLs
- [x] Update register page to use constants from constant.ts for error messages and URLs
- [x] Update email-verification page to import constants from constant.ts
- [x] Remove unnecessary revalidatePath calls from auth actions (login, logout, signup) per Next.js best practices

## Executor's Feedback or Assistance Requests

- Updated all relevant (auth) pages to use constants from constant.ts. Error message display is now consistent in login and register pages when searchParams.message is present. Email-verification page only required import update, as it does not display errors.
- [2025-05-23] Reviewed Next.js official documentation and best practices. Determined that revalidatePath is not needed in auth flows unless the main page is personalized per user. Removed all unnecessary revalidatePath calls from src/app/(auth)/actions.ts. This ensures cache is only invalidated when shared content actually changes, improving performance and correctness.
- [2025-05-23] Created src/lib/schemas directory and added auth.ts with Zod schemas and inferred types for sign-in and sign-up. Refactored signInWithEmailPassword and signUp in (auth)/actions.ts to use these schemas for input validation. Both schema and types are colocated for maintainability and type safety. All changes tested and verified for correct error handling and data validation.
