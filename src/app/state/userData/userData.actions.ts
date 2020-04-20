import { createAction, props } from '@ngrx/store';
import { UserOptions } from '../../types/user-options';

export const storeUserData = createAction('[UserData] Store User Data', props<{ data: UserOptions }>());
export const setContactPersons = createAction('[UserData] Set Contact Persons', props<{ contactPersons: Array<string>}>());
export const clearUserData = createAction('[UserData] Clear User Data');
