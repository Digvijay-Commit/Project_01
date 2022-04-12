import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigvijayComponent } from './digvijay.component';

describe('DigvijayComponent', () => {
  let component: DigvijayComponent;
  let fixture: ComponentFixture<DigvijayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigvijayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigvijayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
