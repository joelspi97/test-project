import { ReactElement } from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

export function NotFound(): ReactElement {
  return (
    <div className='not-found'>
      404 Error - Page Not Found

      <Link to='/'>Back to home page</Link>
    </div>
  );
}
