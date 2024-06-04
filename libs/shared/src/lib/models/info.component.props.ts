import { Observable } from 'rxjs';

export interface InfoComponentProps {
  textToDisplay$: Observable<string>;
  onBackClick: () => void;
}
