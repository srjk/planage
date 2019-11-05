import { Action } from './sprint.actions';
import { Isprint } from '../model/ISprint';

export const INITIAL_STATE: Isprint = {
   product_id: '',
   product_name: '',
   sprint_id: '',
   sprint_name: '',
   list: []
};

export function rootReducer(lastState: Isprint, action): Isprint {
   switch (action.type) {
      case Action.UPDATE_LIST:
         
         return INITIAL_STATE;
      default: lastState;
   }
}

