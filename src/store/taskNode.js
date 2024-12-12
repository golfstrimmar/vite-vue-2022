export const useNode = {
  dataNode: [
    [
      { title: "Создание проекта backend" },
      {
        dataText: `mkdir backend
cd backend
`,
        description: "Создайте папку для сервера и перейдите в неё",
      },

      {
        dataText: `npm init -y
`,
        description: "Инициализируйте проект для сервера",
      },

      {
        dataText: `npm install express socket.io mongoose cors
`,
        description: `Установите зависимости для сервера:express: для создания REST API.
socket.io: для реального времени (сокеты).
mongoose: для работы с MongoDB (если планируете использовать базу данных).
cors: для решения проблемы с кросс-доменные запросами между сервером и клиентом.`,
      },

      {
        dataText: ``,
        description: "",
      },

      {
        dataText: ``,
        description: "",
      },

      {
        dataText: ``,
        description: "",
      },
    ],
  ],
};
