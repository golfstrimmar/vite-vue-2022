export const useNext = {
  dataNext: [
    [
      {
        title:
          "инициализация проекта Next.js + TypeScript + Tailwind CSS + Express + Node.js + MongoDB + Socket.IO + Docker",
      },
      {
        dataText: `
auction-app/ ├── frontend/ # Next.js + TS + Tailwind 
├── backend/ # Express + Node.js + MongoDB + Socket.IO 
├── docker-compose.yml # Для Docker 
└── README.md",
`,
      },
      { title: "Инициализация фронтенда" },
      {
        dataText: `
npx create-next-app@latest frontend --typescript 
npm install socket.io-client
cd frontend
npm install @reduxjs/toolkit react-redux axios
npm install --save-dev @types/socket.io-client
npm install @reduxjs/toolkit react-redux socket.io-client sass  axios
npm run dev --turbo
`,
        description: `
    - Ответы:
        - ESLint: Yes.
        - Tailwind: Yes.
        - src/ directory: Yes.
        - App Router: Yes.`,
      },
      // ========================
      { title: "Инициализация бэкенда (Express)" },
      {
        dataText: `
cd backend
npm install express socket.io mongoose typescript ts-node dotenv
npm install --save-dev @types/express @types/socket.io @types/node @types/mongoose nodemon
npm install cors jsonwebtoken
npm install --save-dev @types/cors @types/jsonwebtoken
`,
        description: " ",
      },
      // ========================
      {
        dataText: `
"name": "backend", 
"version": "1.0.0", 
"main": "index.js",
"type": "module",
"scripts": { 
"start": "node dist/index.js", 
"build": "tsc",
"dev": "npx ts-node index.ts"
 },
`,
        description: "добавить в package.json",
      },
      // ========================

      // ========================
      {
        dataText: `
{
   "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", "src/next.config.js", "next.config.ts"],
  "exclude": ["node_modules"]
}
`,
        description: "tsconfig.json",
      },
      {
        dataText: `
npx tsc
`,
        description: "потом компилируем",
      },
      {
        dataText: `npm run start
`,
        description: "запускаем",
      },
      {
        dataText: `
version: "3.8"
services:
  frontend:
    build: ./fronten
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
    command: npm run dev

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    volumes:
      - ./backend:/app
    command: npm run dev
    environment:
      - MONGO_URI=mongodb://mongo:27017/auction

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
`,
        description: "docker-compose.yml в корне:",
      },
      // ========================
    ],
    [
      { title: "Common" },
      {
        dataText: `
`,
        description: " ",
      },
    ],
    [
      { title: "Common" },
      {
        dataText: `
`,
        description: " ",
      },
    ],
  ],
};
