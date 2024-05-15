import { IUser } from '../models/user.model';

export interface StoreRootModel {
  users: IUser[];
}

export const initialStoreState: StoreRootModel = {
  users: [],
};
