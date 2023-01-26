import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolozkaZoznamComponent } from './polozka-zoznam.component';

describe('PolozkaZoznamComponent', () => {
  let component: PolozkaZoznamComponent;
  let fixture: ComponentFixture<PolozkaZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolozkaZoznamComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolozkaZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
