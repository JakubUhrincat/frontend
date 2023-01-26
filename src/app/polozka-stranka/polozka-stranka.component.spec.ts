import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolozkaStrankaComponent } from './polozka-stranka.component';

describe('PolozkaStrankaComponent', () => {
  let component: PolozkaStrankaComponent;
  let fixture: ComponentFixture<PolozkaStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolozkaStrankaComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolozkaStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
