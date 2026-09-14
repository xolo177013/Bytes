# Bytes — Agency Portfolio

Bytes is a software engineering agency based in Dhanbad, India. This codebase contains:

- `frontend/` — React + Vite portfolio with responsive multi-page routing.
- `backend/` — Django + Django REST Framework starter API for contact submissions.
- Responsive design for mobile, tablet, laptop and large desktop.
- CSS-driven editorial visual system with lightweight reveal and pointer interactions.
- Project data lives in one file so replacing placeholder projects is straightforward.

## 1. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`.

## 2. Run the Django API

Create a virtual environment:

```bash
cd backend
python -m venv .venv
```

Windows:

```bash
.venv\Scripts\activate
```

macOS/Linux:

```bash
source .venv/bin/activate
```

Install:

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`.

## 3. Connect the frontend to Django

The contact form is already written to POST to:

`/api/contact/`

During local development, Vite proxies `/api` to Django. If you change the backend URL, edit `frontend/vite.config.js`.

## Project structure

```text
bytes-portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── config/
│   ├── contact/
│   ├── manage.py
│   └── requirements.txt
└── README.md
```

## How to add your real projects

Edit:

`frontend/src/data/projects.js`

Each project has:

```js
{
  slug: "my-project",
  number: "04",
  category: "SAAS / FULL-STACK",
  title: "Your real project title",
  summary: "What the client needed and what Bytes built.",
  problem: "The actual business or technical problem.",
  solution: "What you designed and implemented.",
  stack: ["React", "Django", "PostgreSQL"],
  architecture: [
    { title: "Experience", text: "..." },
    { title: "Application", text: "..." },
    { title: "Data", text: "..." },
    { title: "Delivery", text: "..." }
  ],
  liveUrl: "https://...",
  githubUrl: "https://github.com/..."
}
```

### Important

Do not claim metrics, clients, revenue, users, performance improvements, or technologies you did not actually use.

For client work where the source code cannot be public:

- Say `Client project — NDA` instead of inventing a repository.
- Use screenshots that you are allowed to publish.
- Explain your role and contribution honestly.
- If the project is confidential, describe the technical problem without exposing sensitive information.

## Replacing placeholder project previews

The current portfolio uses CSS-built previews so it has no image dependency. To use real screenshots:

1. Put images in `frontend/public/projects/`.
2. Add an `image` field to the project object.
3. Render `<img src={project.image} ... />` in `ProjectPreview.jsx`.
4. Prefer WebP/AVIF and keep screenshots reasonably sized.

## Changing the agency copy

Main positioning is in:

`frontend/src/data/site.js`

The current positioning is:

> Bytes is a software engineering agency that helps businesses turn ideas, operational problems, and AI opportunities into reliable digital products.

Edit that file rather than searching through every page.

## Backend

The Django API currently provides:

`POST /api/contact/`

Payload:

```json
{
  "name": "Jane",
  "email": "jane@example.com",
  "company": "Acme",
  "message": "We need a customer portal."
}
```

The API stores submissions in PostgreSQL-compatible Django models. The development settings use SQLite to keep local setup simple. For production, replace the database configuration with PostgreSQL environment variables.

## Deployment

Frontend:
- Build with `npm run build`.
- Deploy `frontend/dist/` to your preferred static host.

Backend:
- Deploy Django with Gunicorn/Uvicorn-compatible infrastructure.
- Set `DJANGO_SECRET_KEY`, `DJANGO_DEBUG=false`, `DJANGO_ALLOWED_HOSTS`, and production database settings.
- Configure CORS for the frontend domain.
- Use PostgreSQL in production.

## Hatchable note

Hatchable does not run a normal Vite/React/Django build pipeline. The live Hatchable project therefore uses its platform-compatible static implementation. This ZIP is the cleaner conventional React + Django source version for local development or deployment to infrastructure that supports those frameworks.
