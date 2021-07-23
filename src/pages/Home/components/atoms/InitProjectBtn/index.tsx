// libs
import fs from 'fs-extra';
import path from 'path';
import { remote } from 'electron';
import { Button } from '@material-ui/core';
// hooks
import { useConfirm } from '@/hooks/views/useConfirm';
// others
import { walkThroughDirectory } from '@/utils/fileSystem';
import { useStyles } from './style';

const TEMPLATE_PATH = 'assets/templates';

export default function DragAndDropMe() {
  const classes = useStyles();
  const { confirm } = useConfirm();

  return (
    <Button
      className={classes.root}
      onClick={async () => {
        const newProjectDirectory = await remote.dialog.showOpenDialog({
          properties: ['openDirectory'],
          title: 'Select directory for initialize Project',
          buttonLabel: 'Select Directory',
        });
        const newProjectPath = newProjectDirectory.filePaths[0];
        const appPath = remote.app.getAppPath();
        const boilerplatePath = remote.app.isPackaged
          ? path.join(process.resourcesPath, TEMPLATE_PATH)
          : path.join(appPath, '../', TEMPLATE_PATH);
        const { filePaths: existedFiles } = await walkThroughDirectory(
          newProjectPath
        );

        if (existedFiles.length > 0) {
          confirm({
            description: 'Empty directory then initialize Project?',
            onOk: async () => {
              await fs.rmdir(newProjectPath, {
                maxRetries: 2,
                recursive: true,
              });
              fs.copy(boilerplatePath, newProjectPath);
            },
          });
        }
        if (existedFiles.length === 0) {
          fs.copy(boilerplatePath, newProjectPath);
        }
      }}
    >
      Initialize Project
    </Button>
  );
}
