import { Observable } from 'rxjs';
import { IUser } from './user.model';

export interface UserListComponentProps {
  users$: Observable<IUser[]>;
  onAddClick: () => void;
  onRemoveClick: () => void;
}
