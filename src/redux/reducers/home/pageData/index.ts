// others
import { API_LABELS } from '@/redux/actionLabels';

type TREDUCER = {
  isLoading: boolean;
  error?: any;
};

const initialState: ShallowExpand<TREDUCER> = {
  isLoading: false,
  error: undefined,
};

export function pageData(
  state = initialState,
  { type, payload }: { type: string; payload: TREDUCER },
): TREDUCER {
  switch (type) {
    case API_LABELS.GET_REPOS_ERROR: {
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
}
