import { makeCSS } from '@/tools/css';

export const useCSS = makeCSS('AppLayout', () => ({
  root: {
    margin: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'auto',
    background: '#fcfcfc',
  },
}));
