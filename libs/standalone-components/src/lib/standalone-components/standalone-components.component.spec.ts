import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StandaloneComponentsComponent } from './standalone-components.component';

describe('StandaloneComponentsComponent', () => {
  let component: StandaloneComponentsComponent;
  let fixture: ComponentFixture<StandaloneComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StandaloneComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
