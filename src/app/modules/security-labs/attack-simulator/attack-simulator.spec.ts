import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackSimulator } from './attack-simulator';

describe('AttackSimulator', () => {
  let component: AttackSimulator;
  let fixture: ComponentFixture<AttackSimulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttackSimulator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttackSimulator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
