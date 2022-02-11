import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSaqueComponent } from './dialog-saque.component';

describe('DialogSaqueComponent', () => {
  let component: DialogSaqueComponent;
  let fixture: ComponentFixture<DialogSaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
