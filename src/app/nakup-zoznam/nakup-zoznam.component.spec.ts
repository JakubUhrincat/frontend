import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NakupZoznamComponent } from './nakup-zoznam.component';

describe('NakupZoznamComponent', () => {
  let component: NakupZoznamComponent;
  let fixture: ComponentFixture<NakupZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NakupZoznamComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NakupZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
