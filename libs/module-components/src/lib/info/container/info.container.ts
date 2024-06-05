import { Component, OnInit } from '@angular/core';
import {
  InfoContainerProps,
  StoreActions,
  StoreSelectors,
} from '@demo-testing-app/shared';
import { Store } from '@ngrx/store';

@Component({
  selector: 'module-lib-info-container',
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
