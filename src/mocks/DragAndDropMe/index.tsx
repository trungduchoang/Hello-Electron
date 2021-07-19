// libs
import * as fs from 'fs';
import { Button } from '@material-ui/core';
// others
import { useCSS } from './style';

export default function DragAndDropMe() {
  const classes = useCSS();
  return (
    <Button
      className={classes.root}
      onClick={async () => {
        fs.copyFile(
          'C:\\Users\\ducht\\OneDrive\\Documents\\abc.tsx',
          'C:\\Users\\ducht\\OneDrive\\Documents\\Trash\\rdfghj.tsx',
          () => {}
        );
      }}
    >
      Click me
    </Button>
  );
}
