import { makeCSS } from '@/utils/common/css';

export const useCSS = makeCSS('DragAndDrop', () => ({
  root: {
    background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
    color: 'white',
    height: 48,
    position: 'fixed',
    padding: '0 27px',
  },
}));
