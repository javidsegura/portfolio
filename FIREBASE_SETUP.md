# Firebase Configuration

## Overview
The Firebase configuration is now managed through environment variables with fallback defaults.

## How It Works

### Local Development
The app uses the default Firebase configuration hardcoded in `frontend/src/firebase.ts` as fallbacks. This works out of the box with no setup needed.

If you want to use different values locally:
1. Create a `frontend/.env` file (already in .gitignore)
2. Add your custom values:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_domain
   VITE_FIREBASE_PROJECT_ID=your_project
   VITE_FIREBASE_STORAGE_BUCKET=your_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

### GitHub Actions / Production
The workflow is configured to use GitHub Secrets if you want different values in production.

**Optional Setup** (only if you need different prod values):
1. Go to your GitHub repository Settings → Secrets and variables → Actions
2. Add repository secrets (if desired):
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`

**Important**: If secrets are not set, the workflow will use the default values from `firebase.ts`, which is perfectly fine for most use cases.

## Security Note
Firebase client-side credentials (API keys, project IDs, etc.) are **safe to expose** in client-side code. They will be visible in your built JavaScript bundle anyway. 

Real security is enforced through:
- Firebase Security Rules
- App Check (if configured)
- Authentication requirements

This is why the defaults in the code are acceptable for public repositories.

