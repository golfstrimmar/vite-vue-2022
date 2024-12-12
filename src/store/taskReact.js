export const useReact = {
  dataReact: [
    [
      { title: "Common" },
      {
        dataText: `npx create-react-app my-chat-app
cd my-chat-app
`,
        description: " ",
      },
      { dataText: ``, description: " " },
      {
        dataText: `props:
      // Родительский компонент
import React from "react";
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
  const message = "Hello from parent!";
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent greeting={message} />
    </div>
  );
};
export default ParentComponent;
// Дочерний компонент
import React from "react";
const ChildComponent = ({ greeting }) => {
  return <p>{greeting}</p>;
};
export default ChildComponent;
      `,
        description: " ",
      },
      {
        dataText: `state в функциональном компоненте:
      import React, { useState } from "react";
const Counter = () => {
  // Инициализация состояния
  const [count, setCount] = useState(0);
  // Обработчик клика
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
export default Counter;
      `,
        description: " ",
      },
      {
        dataText: `дочерний компонент изменяет состояние родительского компонента
      // Родительский компонент
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
  const [message, setMessage] = useState("Hello from Parent!");
  // Функция для изменения состояния
  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent updateMessage={updateMessage} />
      <p>{message}</p>
    </div>
  );
};
export default ParentComponent;
// Дочерний компонент
import React, { useState } from "react";
const ChildComponent = ({ updateMessage }) => {
  const [newMessage, setNewMessage] = useState("");
  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };
  const handleSubmit = () => {
    updateMessage(newMessage); // Вызываем функцию родителя для обновления состояния
  };
  return (
    <div>
      <input
        type="text"
        value={newMessage}
        onChange={handleInputChange}
        placeholder="Enter new message"
      />
      <button onClick={handleSubmit}>Update Message</button>
    </div>
  );
};
export default ChildComponent;
      `,
        description: " ",
      },
      { dataText: ``, description: " " },
    ],
    [
      { title: "Работа с событиями" },
      {
        dataText: `обработка клика
      import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  // Обработчик клика
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Количество кликов: {count}</h1>
      <button onClick={handleClick}>Нажми на меня!</button>
    </div>
  );
};

export default ClickCounter;

      `,
        description: " ",
      },
      {
        dataText: `передача параметров в обработчик
      import React, { useState } from 'react';
const ColorChanger = () => {
  const [color, setColor] = useState("red");
  // Обработчик, который меняет цвет
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };
  return (
    <div>
      <h1 style={{ color }}>Цвет текста: {color}</h1>
      <button onClick={() => handleColorChange("blue")}>Синий</button>
      <button onClick={() => handleColorChange("green")}>Зеленый</button>
    </div>
  );
};
export default ColorChanger;

      `,
        description: " ",
      },
      {
        dataText: `обработка изменений в поле ввода
      import React, { useState } from 'react';

const FormExample = () => {
  const [inputValue, setInputValue] = useState("");

  // Обработчик изменения в input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Введенное значение: {inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите что-то..."
      />
    </div>
  );
};

export default FormExample;

      `,
        description: " ",
      },
      {
        dataText: `обработка отправки формы
      import React, { useState } from 'react';

const FormSubmit = () => {
  const [name, setName] = useState("");

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();  // Останавливаем стандартное поведение (перезагрузку страницы)
    alert(\`Форма отправлена! Ваше имя: ${name}\`);
  };

  // Обработчик изменения в input
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Введите ваше имя:</h1>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Ваше имя"
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default FormSubmit;

      `,
        description: " ",
      },
      {
        dataText: `обработка события нажатия клавиши
      import React, { useState } from 'react';

const KeyPressExample = () => {
  const [keyPressed, setKeyPressed] = useState("");

  // Обработчик нажатия клавиши
  const handleKeyDown = (event) => {
    setKeyPressed(event.key);  // Получаем нажатую клавишу
  };

  return (
    <div>
      <h1>Нажата клавиша: {keyPressed}</h1>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Нажми клавишу..."
      />
    </div>
  );
};

export default KeyPressExample;

      `,
        description: " ",
      },
      {
        dataText: `обработка событий мыши
      import React, { useState } from "react";

const MouseEventsExample = () => {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Вы кликнули по кнопке!");
  };

  const handleDoubleClick = () => {
    setMessage("Вы дважды кликнули по кнопке!");
  };

  const handleMouseEnter = () => {
    setMessage("Вы навели курсор на кнопку!");
  };

  const handleMouseLeave = () => {
    setMessage("Вы убрали курсор с кнопки!");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Наведи на меня и кликай!
      </button>
    </div>
  );
};

export default MouseEventsExample;

      `,
        description: " ",
      },
      {
        dataText: `обработка событий клавиатуры
      import React, { useState } from "react";

const KeyBoardEventsExample = () => {
  const [key, setKey] = useState("");
  const [inputValue, setInputValue] = useState("");

  // Обработчик нажатия клавиши
  const handleKeyDown = (event) => {
    setKey(event.key);
  };

  // Обработчик изменения в input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Последняя нажатая клавиша: {key}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Нажми клавишу..."
      />
    </div>
  );
};

export default KeyBoardEventsExample;

      `,
        description: " ",
      },
      {
        dataText: `обработка фокуса
      import React, { useState } from "react";

const FocusEventsExample = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleFocus = () => {
    setMessage("Вы фокусировались на поле ввода.");
  };

  const handleBlur = () => {
    setMessage("Вы покинули поле ввода.");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>{message}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Фокусируйтесь на мне!"
      />
    </div>
  );
};

export default FocusEventsExample;

      `,
        description: " ",
      },
      {
        dataText: `select событие onChange
      import React, { useState } from "react";
const ChangeEventExample = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <h1>Вы выбрали: {selectedOption}</h1>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Выберите...</option>
        <option value="apple">Яблоко</option>
        <option value="orange">Апельсин</option>
        <option value="banana">Банан</option>
      </select>
    </div>
  );
};
export default ChangeEventExample;
      `,
        description: " ",
      },
      {
        dataText: `drag-and-drop
      import React, { useState } from "react";

const DragAndDropExample = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragStart = () => {
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    alert("Элемент был сброшен!");
  };

  return (
    <div>
      <h1>{dragging ? "Перетаскивайте объект!" : "Отпустите элемент!"}</h1>
      <div
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "skyblue",
          margin: "20px auto",
          textAlign: "center",
          lineHeight: "200px",
        }}
      >
        Перетащи меня!
      </div>
    </div>
  );
};

export default DragAndDropExample;

      `,
        description: " ",
      },
      { dataText: ``, description: " " },
    ],
    [
      { title: "Hooks" },
      {
        dataText: `useState
      import React, { useState } from 'react';

const Counter = () => {
  // Объявление состояния 'count' и функции для обновления этого состояния 'setCount'
  const [count, setCount] = useState(0);

  // Функция для увеличения значения
  const increment = () => setCount(count + 1);
  
  // Функция для уменьшения значения
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Счетчик: {count}</h1>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
    </div>
  );
};

export default Counter;

      `,
        description: " ",
      },
      {
        dataText: `useEffect
      import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  // useEffect, который выполняется при изменении значения \`seconds\`
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Очистка при размонтировании компонента
    return () => clearInterval(interval);
  }, []); // Пустой массив — эффект срабатывает только при монтировании и размонтировании компонента

  return (
    <div>
      <h1>Прошло секунд: {seconds}</h1>
    </div>
  );
};

export default Timer;

      `,
        description:
          "В этом примере useEffect используется для обновления счётчика времени каждую секунду.\n" +
          "Внутри useEffect мы создаем интервал с помощью setInterval, который обновляет состояние seconds каждую секунду.\n" +
          "Важно, что в useEffect возвращается функция для очистки, которая вызывается при размонтировании компонента (чтобы остановить интервал). ",
      },
      {
        dataText: `useContext
      import React, { useState, useContext, createContext } from 'react';

// Создаем контекст
const ThemeContext = createContext();

const ThemedComponent = () => {
  const theme = useContext(ThemeContext); // Используем useContext для получения значения контекста
  return <h1 style={{ color: theme.color }}>Тема: {theme.name}</h1>;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({ name: 'Светлая', color: 'black' });

  const toggleTheme = () => {
    setTheme(prevTheme => ({
      name: prevTheme.name === 'Светлая' ? 'Тёмная' : 'Светлая',
      color: prevTheme.color === 'black' ? 'white' : 'black',
    }));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>Переключить тему</button>
      {children}
    </ThemeContext.Provider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};
export default App;
      `,
        description:
          " это хук, который позволяет подключаться к контексту и " +
          "получать данные из него. Контексты обычно используются для передачи " +
          "данных через несколько уровней компонентов, не передавая их явно через пропсы." +
          "ThemeContext создаёт контекст для хранения информации о текущей теме.\n" +
          "В ThemedComponent мы используем useContext(ThemeContext), чтобы получить доступ к текущему значению контекста и отобразить информацию о теме.\n" +
          "ThemeProvider предоставляет значение контекста через ThemeContext.Provider и предоставляет возможность переключать тему.",
      },
      {
        dataText: `useReducer
      import React, { useReducer } from 'react';

// Определим редьюсер
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Счётчик: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Увеличить</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Уменьшить</button>
    </div>
  );
};

export default Counter;

      `,
        description:
          "это хук для управления более сложным состоянием, " +
          "когда логика изменения состояния зависит от множества разных действий, " +
          "подобно тому, как это происходит в Redux." +
          "В этом примере мы используем хук useReducer, который принимает два аргумента: " +
          "редьюсер и начальное состояние.\n" +
          "Редьюсер определяет, как изменяется состояние " +
          "в ответ на определённые действия.\n" +
          "Для обновления состояния мы вызываем dispatch " +
          "с объектом действия (например, { type: 'increment' }).",
      },
      {
        dataText: `useRef
      import React, { useState, useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Фокусируемся на инпуте
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Нажмите на кнопку, чтобы фокусировать поле" />
      <button onClick={handleFocus}>Фокусировать инпут</button>
    </div>
  );
};

export default FocusInput;

      `,
        description:
          "это хук, который позволяет хранить и " +
          "изменять ссылки на DOM-элементы или любые другие значения, " +
          "которые не требуют повторного рендеринга компонента. " +
          "В этом примере мы используем useRef, чтобы получить ссылку на элемент input.\n" +
          "При клике на кнопку вызывается метод focus() для " +
          "фокусировки на поле ввода, не изменяя состояния и не вызывая повторного рендеринга компонента.",
      },
      {
        dataText: `useMemo
      import React, { useState, useMemo } from 'react';

const ExpensiveCalculation = ({ num }) => {
  const calculateFactorial = (n) => {
    console.log("Вычисление факториала...");
    if (n <= 1) return 1;
    return n * calculateFactorial(n - 1);
  };

  // Используем useMemo для мемоизации результата вычислений
  const factorial = useMemo(() => calculateFactorial(num), [num]);

  return <h1>Факториал числа {num} равен {factorial}</h1>;
};

const App = () => {
  const [num, setNum] = useState(5);

  return (
    <div>
      <ExpensiveCalculation num={num} />
      <button onClick={() => setNum(num + 1)}>Увеличить число</button>
    </div>
  );
};

export default App;

      `,
        description:
          " это хук для оптимизации производительности. Он позволяет мемоизировать вычисления, " +
          "которые могут быть дорогими, и повторно использовать их, " +
          "если входные данные не изменяются.В этом примере вычисление факториала является " +
          "дорогой операцией, и мы используем useMemo, чтобы вычислить факториал только тогда, " +
          "когда значение num изменяется.\n" +
          "Если num остаётся неизменным, " +
          "то результат факториала будет использован из предыдущих вычислений, " +
          "что улучшает производительность.",
      },
      {
        dataText: `useLayoutEffect
      import React, { useLayoutEffect, useState } from 'react';

const LayoutEffectExample = () => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth); // Очистка эффекта
  }, []);

  return <h1>Ширина окна: {width}px</h1>;
};

export default LayoutEffectExample;

      `,
        description:
          " useLayoutEffect — это хук, который работает аналогично useEffect, но с тем отличием," +
          " что его вызов происходит синхронно," +
          " до того как браузер отобразит изменения на экране. " +
          "Обычно используется для манипуляций с DOM перед рендером. " +
          "В отличие от useEffect, useLayoutEffect выполняется синхронно," +
          " до того как браузер нарисует экран.\n" +
          "Это полезно, если вам нужно измерить или манипулировать " +
          "DOM до того, как браузер обновит экран.",
      },
      { dataText: ``, description: " " },
      { dataText: ``, description: " " },
    ],
    [
      { title: "Кастомный хук" },
      {
        dataText: `useFetch
      import { useState, useEffect } from 'react';
// Кастомный хук для фетчинга данных
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result); // Устанавливаем полученные данные
      } catch (error) {
        setError(error); // Устанавливаем ошибку, если что-то пошло не так
      } finally {
        setLoading(false); // Сбрасываем флаг загрузки
      }
    };

    fetchData();
  }, [url]); // Перезапускать запрос при изменении URL

  return { data, loading, error };
};

export default useFetch;
Как использовать кастомный хук:
import React from 'react';
import useFetch from './hooks/useFetch';
const Posts = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  if (loading) {
    return <h1>Загрузка...</h1>;
  }
  if (error) {
    return <h1>Произошла ошибка: {error.message}</h1>;
  }
  return (
    <div>
      <h1>Список постов</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Posts;
      `,
        description:
          "Предположим, вам нужно часто делать запросы к API для получения данных в нескольких компонентах." +
          " Вместо того, чтобы писать одинаковый код в каждом компоненте, " +
          "можно создать кастомный хук для работы с запросами. " +
          "Пример: useFetch — хук для фетчинга данных" +
          "Мы создаём кастомный хук useFetch, который принимает URL, " +
          "выполняет запрос и возвращает данные, ошибку и состояние загрузки.\n" +
          "В компоненте Posts мы используем этот хук," +
          " что позволяет нам легко получать данные с сервера и отображать их, не повторяя логику фетчинга в каждом компоненте.",
      },
      {
        dataText: `useLocalStorage
import { useState } from 'react';
// Кастомный хук для работы с localStorage
const useLocalStorage = (key, initialValue) => {
  // Получаем значение из localStorage или устанавливаем начальное значение
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState(parsedValue);

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue)); // Сохраняем в localStorage
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
Как использовать:
import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';

const TodoApp = () => {
  const [todos, setTodos] = useLocalStorage('todos', []); // Получаем и сохраняем список задач в localStorage

  const addTodo = () => {
    const newTodo = prompt('Введите задачу:');
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Мои задачи</h1>
      <button onClick={addTodo}>Добавить задачу</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

      
      `,
        description:
          "useLocalStorage — это кастомный хук, который сохраняет состояние в localStorage " +
          "и синхронизирует его с состоянием компонента.\n" +
          "Мы используем JSON.parse для обработки данных," +
          "которые были сохранены в localStorage, и JSON.stringify для их сохранения. ",
      },
      {
        dataText: `useWindowWidth
      import { useState, useEffect } from 'react';

// Кастомный хук для отслеживания ширины окна
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth); // Обновляем ширину при изменении размера окна
    };

    window.addEventListener('resize', handleResize);

    // Очистка эффекта при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Этот эффект работает только один раз при монтировании

  return width;
};

export default useWindowWidth;
Как использовать:
import React from 'react';
import useWindowWidth from './hooks/useWindowWidth';

const ResponsiveComponent = () => {
  const width = useWindowWidth();

  return (
    <div>
      <h1>Текущая ширина окна: {width}px</h1>
      {width < 600 ? <p>Мобильный режим</p> : <p>Десктопный режим</p>}
    </div>
  );
};

export default ResponsiveComponent;

      `,
        description:
          "Пример 2: Хук для отслеживания ширины окна (useWindowWidth)\n" +
          "Этот хук будет отслеживать текущую ширину окна браузера и обновлять состояние, " +
          "когда размер окна изменяется." +
          "Кастомный хук useWindowWidth отслеживает изменения ширины окна и возвращает актуальную ширину, " +
          "чтобы компонент мог реагировать на изменение размера экрана.",
      },
    ],
    [
      { title: "React Router" },
      {
        dataText: ` Основные компоненты React Router
BrowserRouter — оборачивает всё приложение и управляет маршрутизацией с использованием истории браузера.
Routes — контейнер для определения маршрутов.
Route — компонент, который описывает соответствие URL и компонента.
Link — компонент для создания ссылок, которые позволяют навигировать между маршрутами.
Navigate — компонент для перенаправления на другой маршрут.
useNavigate — хук для программного навигационного перехода.
useParams — хук для работы с параметрами в URL.
useLocation — хук для получения текущего состояния и местоположения.
      `,
        description: " ",
      },
      {
        dataText: `Создание простого приложения
      // App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/posts/1">Пост 1</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// pages/Home.js
import React from 'react';

const Home = () => {
  return <h2>Главная страница</h2>;
};

export default Home;
// pages/About.js
import React from 'react';

const About = () => {
  return <h2>О нас</h2>;
};

export default About;
// pages/PostDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();  // Получаем параметр "id" из URL

  return <h2>Детали поста с ID: {id}</h2>;
};
export default PostDetail;
      `,
      },
      {
        dataText: `Динамические маршруты и параметры в URL
      // Путь с параметром в URL
<Route path="/posts/:id" element={<PostDetail />} />
import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();  // Получаем параметр id из URL

  return <h2>Детали поста с ID: {id}</h2>;
};

export default PostDetail;

      `,
        description:
          "Одним из мощных механизмов React Router является поддержка динамических маршрутов. " +
          "Это позволяет создавать URL с переменными частями (параметрами), " +
          "которые могут изменяться в зависимости от данных. " +
          "Здесь :id — это динамический параметр, который будет доступен в компоненте, связанном с этим маршрутом.\n" +
          "\n" +
          "Как получить параметры из URL?\n" +
          "Для получения значений параметров из URL используется хук useParams." +
          "useParams — это хук, который позволяет извлекать параметры маршрута из URL.\n" +
          "Как будут выглядеть URL-ы:\n" +
          "Путь /posts/1 отобразит компонент PostDetail с параметром id = 1.\n" +
          "Путь /posts/2 отобразит компонент PostDetail с параметром id = 2.",
      },
      {
        dataText: `Программная навигация  useNavigate
      import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();  // Хук для программной навигации

  const handleLogin = () => {
    // Псевдопроверка логина
    if (username === 'admin') {
      navigate('/dashboard');  // Перенаправление на страницу "/dashboard"
    } else {
      alert('Неверный логин');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Введите логин"
      />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};

export default Login;

      `,
        description:
          " Кроме навигации через <Link>, " +
          "можно выполнять переходы программно, например, " +
          "после выполнения каких-либо действий (например, после отправки формы).",
      },
      {
        dataText: ` Перенаправление  Navigate
      import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <h1>Вы на защищенной странице</h1>;
};

export default ProtectedRoute;

      `,
        description:
          " <Navigate /> — компонент для программного перенаправления пользователя на другой маршрут." +
          "В примере, если пользователь не авторизован, " +
          "его перенаправляют на страницу логина.",
      },
      {
        dataText: `Обработка ошибок 404
      import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />  {/* Страница 404 */}
      </Routes>
    </Router>
  );
};

export default App;

      `,
        description: " ",
      },
      {
        dataText: `import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />  {/* Страница 404 */}
      </Routes>
    </Router>
  );
};
export default App;
      `,
        description:
          " Если пользователь пытается перейти на несуществующую страницу, важно отобразить страницу ошибки 404." +
          ' Для этого можно использовать маршрут с path="*",' +
          " который будет перехватывать все неизвестные пути.",
      },
    ],
    [
      { title: "State Management" },
      {
        dataText: ``,
        description:
          "Локальное состояние (State) с использованием useState и useReducer",
      },
      {
        dataText: `Redux
      Создание редьюсера — описывает, как состояние должно изменяться в ответ на действия.
      // src/redux/counterReducer.js

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
Создание хранилища (Store) — связываем редьюсер с хранилищем состояния.
// src/redux/store.js
import { createStore } from 'redux';
import { counterReducer } from './counterReducer';

const store = createStore(counterReducer);

export default store;
Подключение Store к приложению — используем Provider из react-redux, чтобы доступ к состоянию был у всех компонентов приложения.
// src/App.js
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';

const Counter = () => {
  const count = useSelector((state) => state.count);  // Доступ к состоянию
  const dispatch = useDispatch();  // Диспетчер для отправки действий

  return (
    <div>
      <p>Текущий счёт: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Увеличить</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Уменьшить</button>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;

      `,
        description:
          " Redux/Мы создаём редьюсер для управления счётом.\n" +
          "Используем хук useSelector для получения состояния из Redux Store.\n" +
          "Используем хук useDispatch для отправки действий в Redux Store (например, увеличения или уменьшения счёта).",
      },
      {
        dataText: `Context API
      Создание контекста:
      // src/context/CounterContext.js
import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const useCounter = () => {
  return useContext(CounterContext);
};

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
Использование контекста в компоненте:
// src/App.js
import React from 'react';
import { CounterProvider, useCounter } from './context/CounterContext';

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <p>Текущий счёт: {count}</p>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
    </div>
  );
};

const App = () => (
  <CounterProvider>
    <Counter />
  </CounterProvider>
);

export default App;

      `,
        description:
          "Context API встроен в React и позволяет передавать данные через дерево компонентов без необходимости пропсами. " +
          "Это удобно для глобального состояния, но не так масштабируемо, " +
          "как Redux, особенно при большом количестве состояний. " +
          "Мы создаём CounterContext, чтобы управлять состоянием счёта.\n" +
          "useCounter — это хук для доступа к состоянию из контекста.\n" +
          "Все компоненты, использующие useCounter, могут изменять и читать глобальное состояние.",
      },
      {
        dataText: `Recoil
      Установка Recoil:
      npm install recoil
      
      Создание атома и селектора:
      // src/recoil/atoms.js
import { atom } from 'recoil';

export const countState = atom({
  key: 'countState', // уникальный ключ
  default: 0,        // начальное значение
});
Использование атома в компоненте:
// src/App.js
import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { countState } from './recoil/atoms';

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <p>Текущий счёт: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
      <button onClick={() => setCount(count - 1)}>Уменьшить</button>
    </div>
  );
};

const App = () => (
  <RecoilRoot>
    <Counter />
  </RecoilRoot>
);

export default App;

      `,
        description:
          " Она позволяет разделять глобальное состояние на более мелкие атомы и использовать их в разных компонентах." +
          "atom создаёт атом — единицу состояния.\n" +
          "useRecoilState используется для получения и изменения состояния атома.\n" +
          "RecoilRoot — компонент-обертка, который должен охватывать приложение, чтобы использовать Recoil.",
      },
      { dataText: ``, description: " " },
      { dataText: ``, description: " " },
    ],
    [
      { title: "Производительность и оптимизация" },
      {
        dataText: `Lazy Loading
      import React, { Suspense } from 'react';

// Используем React.lazy для ленивой загрузки компонента
const About = React.lazy(() => import('./About'));

function App() {
  return (
    <div>
      <h1>Главная страница</h1>
      
      {/* Suspense оборачивает лениво загружаемые компоненты и показывает fallback (например, лоадер) */}
      <Suspense fallback={<div>Загрузка...</div>}>
        <About />
      </Suspense>
    </div>
  );
}

export default App;

      `,
        description:
          "React.lazy позволяет динамически загружать компонент только тогда, когда он действительно нужен (например, когда пользователь переходит на соответствующую страницу). " +
          "Это особенно полезно для разделения кода (code splitting) " +
          "и ускорения начальной загрузки. " +
          "Как это работает:\n" +
          "React.lazy принимает функцию, которая возвращает промис с компонентом.\n" +
          "Suspense используется для ожидания загрузки компонента. Пока компонент загружается, отображается указанный в fallback элемент (например, индикатор загрузки).\n" +
          "Когда пользователь переходит к компоненту, который загружается с помощью React.lazy, React подгружает его асинхронно, что снижает начальное время загрузки страницы.\n" +
          "\n" +
          "Преимущества:\n" +
          "Уменьшение времени начальной загрузки: Ленивая загрузка позволяет загружать только те компоненты, которые реально нужны на странице.\n" +
          "Снижение объема загружаемого JavaScript: Код не загружается полностью сразу, а только по мере необходимости.\n" +
          "Важно:\n" +
          "React.lazy работает только с компонентами, которые экспортированы через default export. В случае с именованным экспортом нужно будет использовать другие методы.",
      },
      {
        dataText: `//React.memo

import React from 'react';

// Компонент с React.memo
const ExpensiveComponent = React.memo(({ count }) => {
  console.log('Ререндер компонента!');
  return <div>Счёт: {count}</div>;
});

const ParentComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <ExpensiveComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
};

export default ParentComponent;

      
      `,
        description:
          "Оптимизация ререндеринга с помощью React.memo и useMemo" +
          "React.memo — это компонент высшего порядка, который предотвращает перерендеринг компонента, если его пропсы не изменились. " +
          "Это полезно для компонентов, " +
          "которые получают одни и те же данные и не требуют обновления, если данные не изменяются. " +
          "Как это работает:\n" +
          "React.memo проверяет пропсы компонента. Если они не изменились, компонент не будет перерисовываться.\n" +
          "Если пропсы изменяются, компонент будет перерисован, как обычно.\n" +
          "Когда использовать React.memo:\n" +
          "Для функциональных компонентов, которые получают пропсы, которые не изменяются часто.\n" +
          "Для компонентов с тяжелыми рендерингами (например, сложные визуальные элементы или дорогие вычисления).",
      },
      {
        dataText: `useMemo
      import React, { useMemo, useState } from 'react';

const ExpensiveComputation = ({ num }) => {
  const computeFactorial = (n) => {
    console.log('Вычисление факториала...');
    return n <= 0 ? 1 : n * computeFactorial(n - 1);
  };

  const factorial = useMemo(() => computeFactorial(num), [num]);

  return <div>Факториал числа {num}: {factorial}</div>;
};

const ParentComponent = () => {
  const [num, setNum] = useState(5);

  return (
    <div>
      <ExpensiveComputation num={num} />
      <button onClick={() => setNum(num + 1)}>Увеличить число</button>
    </div>
  );
};

export default ParentComponent;

      `,
        description:
          "useMemo — это хук, который позволяет мемоизировать (запоминать) результат вычислений между рендерами, " +
          "чтобы не выполнять дорогостоящие вычисления, если зависимости не изменились." +
          "Как это работает:\n" +
          "useMemo позволяет вычислить результат функции только в том случае, если зависимости (например, переменная num) изменились.\n" +
          "Если зависимость не изменяется, useMemo возвращает закэшированное (мемоизированное) значение, избегая повторных вычислений.\n" +
          "Когда использовать useMemo:\n" +
          "Для мемоизации сложных вычислений, которые не должны выполняться при каждом рендере компонента.\n" +
          "Для оптимизации рендеринга в случае работы с большими списками, фильтрацией или сортировкой данных. ",
      },
      { dataText: ``, description: " " },
      { dataText: ``, description: " " },
    ],
    [
      { title: "Работа с API" },
      {
        dataText: `fetch
      import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);  // Для хранения данных
  const [loading, setLoading] = useState(true);  // Для отображения индикатора загрузки
  const [error, setError] = useState(null);  // Для обработки ошибок

  // Используем useEffect для асинхронного запроса
  useEffect(() => {
    // Функция для получения данных с API
    const fetchData = async () => {
      try {
        // Отправляем запрос на сервер
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Сеть не отвечает');
        }
        const result = await response.json();  // Преобразуем ответ в JSON
        setData(result);  // Устанавливаем полученные данные в состояние
      } catch (err) {
        setError(err.message);  // Если ошибка, устанавливаем сообщение об ошибке
      } finally {
        setLoading(false);  // Завершаем загрузку
      }
    };

    fetchData();  // Выполняем функцию получения данных
  }, []);  // Пустой массив зависимостей, запрос выполняется только один раз при монтировании компонента

  // Рендерим разные состояния
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <h1>Список постов</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

      `,
        description:
          "useEffect с пустым массивом зависимостей выполняет запрос при монтировании компонента.\n" +
          "fetch используется для получения данных с API. Мы обрабатываем запрос через async/await и преобразуем ответ в формат JSON.\n" +
          "setData обновляет состояние с полученными данными, а setLoading и setError позволяют управлять состоянием загрузки и ошибок. ",
      },
      {
        dataText: `axios
      npm install axios
      import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);  // Для хранения данных
  const [loading, setLoading] = useState(true);  // Для индикатора загрузки
  const [error, setError] = useState(null);  // Для обработки ошибок

  useEffect(() => {
    // Функция для получения данных с API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);  // Ответ приходит в объекте \`data\`
      } catch (err) {
        setError(err.message);  // Обработка ошибки
      } finally {
        setLoading(false);  // Завершаем загрузку
      }
    };

    fetchData();  // Выполняем запрос
  }, []);  // Пустой массив зависимостей

  // Рендерим разные состояния
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <h1>Список постов</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

      `,
        description:
          " axios.get выполняет GET-запрос, и результат доступен через response.data.\n" +
          "setData, setLoading и setError работают аналогично, как и в примере с fetch.\n" +
          "Преимущества axios:\n" +
          "Автоматическое преобразование ответа в JSON — вам не нужно вручную вызывать response.json().\n" +
          "Отличная обработка ошибок — библиотека имеет встроенную поддержку ошибок и отмены запросов.\n" +
          "Поддержка interceptors — возможность перехватывать запросы и ответы для добавления, например, токенов аутентификации.",
      },
      {
        dataText: `Обработка асинхронных запросов с useEffect
      import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;  // Флаг, чтобы отслеживать, размонтирован ли компонент

    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        if (isMounted) {
          setData(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Очистка: если компонент размонтирован, изменим флаг
    return () => {
      isMounted = false;
    };
  }, []);  // Пустой массив зависимостей

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <h1>Список постов</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

      `,
        description:
          " Когда мы выполняем асинхронные запросы в React, важно понимать, как управлять состоянием, когда компонент размонтирован, или когда запрос выполняется длительное время.\n" +
          "\n" +
          "Проблема с асинхронными запросами и размонтированием компонента:\n" +
          "Если компонент размонтирован до того, как запрос завершится, это может привести к утечке памяти или попытке обновить состояние на размонтированном компоненте. " +
          "Чтобы этого избежать, можно использовать флаг, " +
          "который указывает, что компонент ещё не размонтирован." +
          "isMounted — флаг, который проверяет, не был ли компонент размонтирован до завершения асинхронного запроса. " +
          "Если запрос завершается после размонтирования, данные не обновляются.\n" +
          "Очистка useEffect: В функции очистки (return внутри useEffect) мы меняем флаг isMounted, " +
          "чтобы избежать попыток обновить состояние после размонтирования компонента.",
      },
      { dataText: ``, description: " " },
    ],
    [
      { title: "React с TypeScript/Типизация компонентов, хуков и состояний" },
      {
        dataText: `Типизация компонентов в React
      import React, { FC } from 'react';

// Типизация пропсов с помощью интерфейса
interface MyComponentProps {
  title: string;
  count: number;
  onClick: () => void;
}

// Функциональный компонент с типизированными пропсами
const MyComponent: FC<MyComponentProps> = ({ title, count, onClick }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Счёт: {count}</p>
      <button onClick={onClick}>Нажми меня</button>
    </div>
  );
};

export default MyComponent;

      `,
        description:
          "В React с TypeScript компоненты могут быть типизированы как функциональные и классовые. " +
          "Рассмотрим примеры обоих типов компонентов.\n" +
          "\n" +
          "Функциональные компоненты\n" +
          "Типизация функциональных компонентов в TypeScript достаточно простая. " +
          "Мы можем использовать тип FC (или FunctionComponent) из пакета react " +
          "для типов пропсов компонента. FC (FunctionComponent) — это тип, " +
          "который добавляет типизацию для children по умолчанию. " +
          "В нашем примере мы не используем children, но если бы использовали, " +
          "TypeScript уже автоматически подразумевал бы этот тип.\n" +
          "Пропсы компонента типизируются с помощью интерфейса MyComponentProps" +
          ", который определяет, что пропсы title, count и onClick должны быть строкой, числом и функцией соответственно.",
      },
      {
        dataText: `Типизация без FC
      import React from 'react';

// Типизация пропсов через интерфейс
interface MyComponentProps {
  title: string;
  count: number;
  onClick: () => void;
}

// Функциональный компонент без использования FC
const MyComponent = ({ title, count, onClick }: MyComponentProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Счёт: {count}</p>
      <button onClick={onClick}>Нажми меня</button>
    </div>
  );
};

export default MyComponent;

      `,
        description:
          "Хотя FC удобен, его использование не обязательно. Вы можете типизировать компонент напрямую, используя тип props: ",
      },
      {
        dataText: `Типизация состояний с useState
      import React, { useState } from 'react';

const Counter: React.FC = () => {
  // Типизация состояния для числа
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Счёт: {count}</h1>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};

export default Counter;

      `,
        description:
          "TypeScript позволяет задавать типы для состояния с помощью хука useState. " +
          "Вы можете указать тип состояния при инициализации через generic (обобщение)." +
          "useState<number>(0) — мы явно указываем, что состояние count будет иметь тип number. Изначальное значение состояния — 0.\n" +
          "Благодаря этому TypeScript понимает, " +
          "что count должен быть числом, и будет выдавать ошибку компиляции, " +
          "если вы попытаетесь присвоить ему строку или другой тип данных. ",
      },
      {
        dataText: `Типизация состояния с объектами:

import React, { useState } from 'react';

// Типизация состояния для объекта
interface User {
  name: string;
  age: number;
}

const UserProfile: React.FC = () => {
  // Инициализация состояния с типом User
  const [user, setUser] = useState<User>({ name: '', age: 0 });

  const updateUser = () => {
    setUser({ name: 'Иван', age: 30 });
  };

  return (
    <div>
      <h1>Имя: {user.name}</h1>
      <p>Возраст: {user.age}</p>
      <button onClick={updateUser}>Обновить данные</button>
    </div>
  );
};

export default UserProfile;
`,
        description:
          "Мы определяем интерфейс User, чтобы типизировать объект user, который хранит данные пользователя. В useState<User> передаем тип состояния как User. ",
      },
      {
        dataText: `3. Типизация хуков
import React, { useEffect, useState } from 'react';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);  // Очистка интервала
    };
  }, []);  // Пустой массив зависимостей, эффект сработает один раз

  return <div>Прошло {seconds} секунд</div>;
};

export default Timer;

      `,
        description:
          " TypeScript позволяет вам правильно типизировать хуки, такие как useEffect, useContext, useRef, и другие.\n" +
          "\n" +
          "Типизация useEffect\n" +
          "useEffect часто используется для побочных эффектов, таких как запросы на сервер, изменение DOM или подписка на события. " +
          "В случае с TypeScript, важно правильно типизировать возвращаемое значение или аргументы эффекта." +
          "Тип для seconds задается через useState<number>.\n" +
          "В useEffect мы устанавливаем интервал, который обновляет состояние каждую секунду. " +
          "Для очистки интервала используется функция возврата из useEffect, которая отменяет интервал, когда компонент размонтируется.",
      },
      {
        dataText: `Типизация useRef
import React, { useRef, useEffect } from 'react';

const FocusInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);  // Типизация для DOM-элемента

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();  // Фокусируем инпут при монтировании
    }
  }, []);

  return <input ref={inputRef} />;
};

export default FocusInput;
`,
        description:
          "useRef<HTMLInputElement>(null) — это правильная типизация для ссылки на DOM-элемент input. " +
          "TypeScript понимает, что это может быть либо null, либо элемент типа HTMLInputElement. ",
      },
      {
        dataText: `Типизация событий в React
      import React from 'react';

const ClickButton: React.FC = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    alert('Кнопка нажата!');
  };

  return <button onClick={handleClick}>Нажми меня</button>;
};
export default ClickButton;
      `,
        description:
          " Когда вы работаете с событиями, такими как обработчики кликов или изменений, " +
          "TypeScript помогает точно указать типы для этих событий." +
          "Тип React.MouseEvent<HTMLButtonElement, MouseEvent> описывает событие клика по кнопке, " +
          "где HTMLButtonElement — это тип целевого элемента (кнопки), а MouseEvent — это тип самого события.",
      },
    ],
  ],
};
