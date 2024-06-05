import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoContainer } from './info.container';
import { Component, DebugElement, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing/index';
import {
  InfoComponentProps,
  StoreActions,
  StoreSelectors,
} from '@demo-testing-app/shared';

@Component({
  selector: 'module-lib-info-component',
  template: `
    <button id="back-button" (click)="props.onBackClick()">Back</button>
  `,
})
class MockInfoComponent {
  @Input() props!: InfoComponentProps;
}

describe('InfoContainer', () => {
  let component: InfoContainer;
  let fixture: ComponentFixture<InfoContainer>;
  let debugElement: DebugElement;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoContainer, MockInfoComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoContainer);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    store = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  afterEach(() => {
    store.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Info Component', () => {
    const component = debugElement.query(
      By.css('module-lib-info-component'),
    ).nativeElement;

    expect(component).toBeVisible();
  });

  it('should retrieve info text from Store on init', (done) => {
    const text = 'info text';
    store.overrideSelector(StoreSelectors.selectInfoTextToDisplay, text);

    component.props.componentProps.textToDisplay$.subscribe((result) => {
      expect(result).toEqual(text);
      done();
    });
  });

  it('should dispatch navigateToRootPage action on Back button click', () => {
    jest.spyOn(store, 'dispatch');
    const backButton = debugElement.query(By.css('#back-button')).nativeElement;

    backButton.click();

    expect(store.dispatch).toHaveBeenCalledWith(
      StoreActions.navigateToRootPage(),
    );
  });
});
