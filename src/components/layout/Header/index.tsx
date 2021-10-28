// libs
import { Link } from 'react-router-dom';
// others
import { ROUTES } from '@/routers';
import { useStyles } from './styles';

/**
 * Header
 */
export default function Header() {
  const classes = useStyles('Header')();

  return (
    <div className={classes.root}>
      <Link to={ROUTES.HOME}>Home</Link>
      <div className={classes.functions}>Happy day :)</div>
    </div>
  );
}
