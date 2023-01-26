import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NakupFormularComponent } from './nakup-formular.component';

describe('NakupFormularComponent', () => {
  let component: NakupFormularComponent;
  let fixture: ComponentFixture<NakupFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NakupFormularComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NakupFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
