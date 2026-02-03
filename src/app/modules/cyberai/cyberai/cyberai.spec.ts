import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cyberai } from './cyberai';

describe('Cyberai', () => {
  let component: Cyberai;
  let fixture: ComponentFixture<Cyberai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cyberai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cyberai);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
