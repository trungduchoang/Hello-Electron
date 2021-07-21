// libs
import { ReactNode } from 'react';
// others
import { useStyles } from './style';

type TProps = {
  children: ReactNode;
};
/**
 * AppLayout
 * @param children
 */
export default function AppLayout({ children }: TProps) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}
