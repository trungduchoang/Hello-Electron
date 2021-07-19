// libs
import { ReactNode } from 'react';
// others
// import { useCSS } from './style';

type TProps = {
  children: ReactNode;
};
/**
 * AppLayout
 * @param children
 */
export default function AppLayout({ children }: TProps) {
  // const classes = useCSS();

  return <div>{children}</div>;
}
