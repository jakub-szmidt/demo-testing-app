import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from '../component/info.component';
import {
  InfoContainerProps,
  StoreActions,
  StoreSelectors,
} from '@demo-testing-app/shared';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-info-container',
  standalone: true,
  imports: [CommonModule, InfoComponent],
  templateUrl: './info.container.html',
  styleUrl: './info.container.scss',
})
export class InfoContainer implements OnInit {
  props!: InfoContainerProps;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.props = {
      componentProps: {
        textToDisplay$: this.store.select(
          StoreSelectors.selectInfoTextToDisplay,
        ),
        onBackClick: (): void =>
          this.store.dispatch(StoreActions.navigateToRootPage()),
      },
    };
  }
}
