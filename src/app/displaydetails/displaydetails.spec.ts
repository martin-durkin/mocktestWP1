import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Displaydetails } from './displaydetails';

describe('Displaydetails', () => {
  let component: Displaydetails;
  let fixture: ComponentFixture<Displaydetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Displaydetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Displaydetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
