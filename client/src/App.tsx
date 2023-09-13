import { ReactElement, useState } from 'react';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';

export function App(): ReactElement {
  const [number, setNumber] = useState<number | null>(null);

  return (
   <>
    <Header setNumber={ setNumber } />

    <main className='main'>
      <h3 className='number-counter'>
        { number !== null ? `Current number is: ${ number }.` : 'No number has been selected.' }
      </h3>
      
      <Outlet />
    </main>

    <Footer />
   </>
  );
}
