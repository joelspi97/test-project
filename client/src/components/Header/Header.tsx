import { Dispatch, ReactElement, SetStateAction } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

interface HeaderProps {
  setNumber: Dispatch<SetStateAction<number | null>>;
}

export function Header(props: HeaderProps): ReactElement {
  const { setNumber } = props;

  function handleButton(number: number): void {
    setNumber((prevValue): number => {
      if (prevValue === null) return 0;
      return prevValue + number;
    });
  }

  return (
    <header className='header'>
      <h2>Test App!</h2>

      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/test'>Test Component</Link></li>
        </ul>
      </nav>

      <div>
        <button type='button' onClick={ () => handleButton(1) } >Counter +1</button>
        <button type='button' onClick={ () => handleButton(-1) }>Counter -1</button>
      </div>
    </header>
  );
}
