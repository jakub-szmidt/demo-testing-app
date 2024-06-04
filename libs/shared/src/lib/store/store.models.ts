import { IUser } from '../models/user.model';

export interface StoreRootModel {
  users: IUser[];
  infoTextToDisplay: string;
}

export const initialStoreState: StoreRootModel = {
  users: [],
  infoTextToDisplay: '',
};
