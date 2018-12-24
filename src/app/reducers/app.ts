import {User} from '../models/user.model';
import {Videos} from '../models/videos.model';
import {MyAction} from '../actions';



export interface AppState {

  user: User;
  videos: Videos[];
  email: any;


}

export const initialState: AppState = {

  user: null,
  videos: [],
  email: [],
}
export const appReducer = (CurrentState: AppState = initialState, action: MyAction): AppState => {

  console.log('appReducer is called', initialState, action);

  switch (action.type) {

    case 'USER_ADD':
    return{...CurrentState, user: action.payload};

    case 'USER_DELETE':

    return {...CurrentState, user: null};

    default:
      return CurrentState;


  }

}
