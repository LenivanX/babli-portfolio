import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mia } from './mia';

describe('Mia', () => {
  let component: Mia;
  let fixture: ComponentFixture<Mia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
