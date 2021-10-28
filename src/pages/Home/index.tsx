// components
import { ROUTES } from '@/routers';
import { Link } from 'react-router-dom';
import InitProjectBtn from './components/atoms/InitProjectBtn';

/**
 * Home
 */
export default function Home() {
  return (
    <>
      <InitProjectBtn />
      <Link to={ROUTES.BUILDER} />
    </>
  );
}
