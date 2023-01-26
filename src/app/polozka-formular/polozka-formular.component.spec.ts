import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolozkaFormularComponent } from './polozka-formular.component';

describe('PolozkaFormularComponent', () => {
  let component: PolozkaFormularComponent;
  let fixture: ComponentFixture<PolozkaFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolozkaFormularComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolozkaFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
