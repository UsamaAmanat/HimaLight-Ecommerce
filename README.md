# HimaLight

HimaLight is a React-based e-commerce storefront. It includes product listing, product pages, admin product management, authentication flows, and integrations with Firebase (Firestore). The project uses Vite for development, Redux + redux-saga for state and side-effects, Formik + Yup for forms, and SCSS for styling.

This README documents how to get the project running locally, how uploads work (AWS S3), and troubleshooting notes specific to this repository.

---

## Tech stack
- React 17
- Vite
- Redux + redux-saga
- Firebase (Firestore)
- AWS S3 (image hosting)
- Formik + Yup
- SCSS (Sass)
- React Router v5

---

## Repository layout (high level)

- `src/` - application source
  - `components/` - reusable UI components and common layout pieces (`Footer`, `Navigation`, etc.)
  - `views/` - page views (home, shop, featured, recommended, admin pages, etc.)
  - `redux/` - actions, reducers, sagas
  - `services/` - `firebase.js` wrapper used to interact with Firestore and Auth
  - `helpers/` - small helpers (example: `s3Upload.js`) used by the admin form
  - `styles/` - SCSS partials and component styles
- `public/` - static public assets
- `package.json` - scripts & dependencies

---

## Quick start (Windows PowerShell)

Prerequisites:
- Node.js >= 16 (recommended) and npm

1. Install dependencies

```powershell
npm install
```

2. Start dev server

```powershell
npm run dev
```

The site runs via Vite (default port 5173). Open `http://localhost:5173`.

3. Build for production

```powershell
npm run build

# preview the built app
npm run serve
```

---

## Image uploads (important)

All product thumbnails and gallery images are uploaded to AWS S3 via the `s3Upload.js` helper. The admin product form uploads images to your configured S3 bucket (via the helper endpoint or direct S3 API), and the returned public URLs are stored in Firebase Firestore as part of the product record.

Key points:
- Ensure your S3 bucket policy allows uploads from your app or that your upload endpoint is correctly configured.
- Update `src/helpers/s3Upload.js` with the correct endpoint or S3 configuration for your environment.
- The sagas and Firestore store expect image URLs (strings) for product `image` and `imageCollection` fields.

Recommendation:
- Centralize uploads to a single backend (S3) to keep the flow simple: the admin form uploads to S3 and passes back URLs to be saved in Firestore.

---

## Setup guide

1. Create Firebase Project
Login to your Google account and create a new Firebase project here.

Create an `.env` file in your project root and add the following variables:

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_DB_URL=https://your-database-url.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_MSG_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Enable Cloud Firestore and start in test mode.

2. Configure AWS S3 for Images

- Create an S3 bucket in AWS.
- Update your `s3Upload.js` helper file with your S3 credentials and bucket details.
- Ensure your bucket policy allows uploads from your app.

All product thumbnails and gallery images are uploaded to AWS S3 and their URLs are saved in Firebase Firestore.

3. Admin Panel Setup

- Sign up at `/signup`.
- Go to Firestore `users` collection and change your account role from `USER` to `ADMIN`.
- Log in again to access admin features.

Firebase Admin integration is planned for future updates.

---


## Development notes & troubleshooting

- Styling: SCSS partials live in `src/styles/` — use the component name conventions for new partials.
- Routing: React Router v5 is used; routes are defined in `AppRouter.jsx` and views are re-exported from `src/views/index.js`.
- State: Redux + redux-saga handle async flows. Sagas are in `src/redux/sagas/` and action creators in `src/redux/actions/`.
- Uploads: Images are hosted on AWS S3; update `s3Upload.js` for your bucket/credentials.
- Footer not showing: check `AppRouter.jsx` to ensure `<Footer />` is present (it should be after the `<Switch>`), then inspect CSS, especially `.content` and page-level wrappers (e.g., `.featured`, `.home`) for `min-height` or `position` rules.

---

## Contributing

1. Fork the repo and create a branch for your feature/fix
2. Implement changes and ensure lint/tests pass
3. Create a pull request with a clear description of your changes

---


## Contact

If you have questions about this codebase or want help setting up deployment / Firebase, open an issue or contact the maintainer listed in the repository.
