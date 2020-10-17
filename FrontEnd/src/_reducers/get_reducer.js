import {
    GETALL_REQUEST,
    GETALL_SUCCESS
} from '../_actions/types';

export function users(state = {}, action) {
    switch (action.type) {
      case GETALL_REQUEST:
        return {
          loading: true
        };
      case GETALL_SUCCESS:
        return {
          items: action.users
        };
        default:
      return state
    }
}