import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NakupStrankaComponent } from './nakup-stranka.component';

describe('NakupStrankaComponent', () => {
  let component: NakupStrankaComponent;
  let fixture: ComponentFixture<NakupStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NakupStrankaComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NakupStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
