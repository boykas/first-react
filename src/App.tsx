import React from 'react';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Main } from './components/mainPage/Main';

export function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
