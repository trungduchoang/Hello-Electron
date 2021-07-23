// libs
import { useSnackbar } from 'notistack';
// dataSources
import {
  successSnackbarOptions,
  errorSnackbarOptions,
  warningSnackbarOptions,
  infoSnackbarOptions,
} from './dataSources';

/**
 * useAlert
 * @description Alert success/info/warning/error message, base on notistack-useSnackbar
 * @see https://www.npmjs.com/package/notistack
 * @returns Callback for alert messages
 */
export function useAlert() {
  const { enqueueSnackbar } = useSnackbar();

  return {
    alertSuccess: (message: string) => {
      enqueueSnackbar(message, successSnackbarOptions);
    },
    alertError: (message: string) => {
      enqueueSnackbar(message, errorSnackbarOptions);
    },
    alertWarning: (message: string) => {
      enqueueSnackbar(message, warningSnackbarOptions);
    },
    alertInfo: (message: string) => {
      enqueueSnackbar(message, infoSnackbarOptions);
    },
  };
}
