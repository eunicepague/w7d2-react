import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import routes from './routes';
import Header from './Components/Header/Header';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <main>
        <Header />
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={route.element}
                exact
              ></Route>
            );
          })}
        </Routes>
      </main>
    </>
  );
};

export default App;
