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
      {
        dataText: `
import express from "express";
import http from "http";
import { connectDB } from "./config/db.js";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import Auction from "./models/Auction.js";

dotenv.config();
const app = express();
connectDB();
const server = http.createServer(app);

// ===========================
// Подключаем Socket.io
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  },
});

// ===========================
// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(
    \`Incoming request: method=${req.method} url=${
          req.url
        } body=${JSON.stringify(req.body, null, 2)}\`
  );
  next();
});

// ===========================
// Маршрут для получения всех активных аукционов
app.get("/api/auctions", async (req, res) => {
  try {
    const auctions = await Auction.find({ status: "active" });
    res.json(auctions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ===========================
// Слушаем подключение клиентов через WebSocket
io.on("connection", (socket) => {
  console.log(\`Client connected: ${socket.id}\`);

  socket.on("getAuctions", async () => {
    const auctions = await Auction.find({ status: "active" });
    socket.emit("auctionsList", auctions);
  });

  socket.on("addAuction", async (auctionData) => {
    console.log("===Adding new auction:====", auctionData);
    // Извлекаем вложенный объект auctionData
    const data = auctionData.auctionData || auctionData;
    console.log("===Extracted data:====", data);

    const sanitizedData = {
      title: String(data.title),
      startPrice: Number(data.startPrice),
      endTime: new Date(data.endTime),
      imageUrl: data.imageUrl || "",
    };

    try {
      const existingAuction = await Auction.findOne({
        title: sanitizedData.title,
        status: "active",
      });

      if (existingAuction) {
        const errorMessage = \`Auction with title "${
          sanitizedData.title
        }" already exists\`;
        console.log("===Validation error:====", errorMessage);
        return io.emit("erroraddingauction", errorMessage);
      }

      const newAuction = new Auction(sanitizedData);
      console.log("===New auction instance:====", newAuction);

      await newAuction.save();
      console.log("===Auction saved:====", newAuction);

      // Получаем обновленный список аукционов
      const auctions = await Auction.find({ status: "active" });
      console.log("===Sending auctions list:====", auctions);
      // Рассылаем обновленный список всем клиентам
      io.emit("auctionsList", auctions);
      io.emit("auctionAdded", { message: "Auction added successfully" });
    } catch (error) {
      console.error("Error adding auction:", error);
      io.emit("erroraddingauction", error.message);
    }
  });

  socket.on("disconnect", () => {
    console.log(\`Client disconnected: ${socket.id}\`);
  });
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(\`Server is running on port ${PORT}\`);
});
        
`,
        description: "server.ts",
      },
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
