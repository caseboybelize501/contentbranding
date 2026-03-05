# ContentBranding - Brand Identity Generator

A SaaS platform for startups and solopreneurs to generate complete brand identities using AI.

## Features

- Generate brand names with availability checks
- Create taglines and brand voice guidelines
- Design color palettes with psychological rationale
- Typography recommendations
- Export full style guide as PDF/markdown

## Tech Stack

- **Frontend**: Next.js + Tailwind CSS
- **Backend**: Node/Express
- **Database**: PostgreSQL
- **AI**: LLaMA.cpp via POST http://llama:8000/generate
- **Queue**: BullMQ + Redis
- **Storage**: S3 (for style guide exports)

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository
2. Run `docker-compose up`
3. Access the application at http://localhost:3000

## API Endpoints

- `POST /api/brand/generate` - Generate brand identity
- `GET /api/brand/job/:id` - Poll for result
- `POST /api/brand/export` - Export as PDF/markdown
- `GET /api/brand/history` - Get past brands
- `GET /health` - Health check

## Project Structure


.
├── src/
│   ├── index.js
│   ├── routes/
│   │   └── brand.js
│   ├── workers/
│   │   └── brandWorker.js
│   ├── services/
│   │   ├── llamaClient.js
│   │   └── styleGuideExporter.js
│   └── models/
│       └── Brand.js
├── frontend/
│   └── src/pages/
│       ├── Builder.jsx
│       └── StyleGuide.jsx
├── Dockerfile
└── package.json


## License

MIT