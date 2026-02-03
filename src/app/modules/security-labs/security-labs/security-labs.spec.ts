import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityLabs } from './security-labs';

describe('SecurityLabs', () => {
  let component: SecurityLabs;
  let fixture: ComponentFixture<SecurityLabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityLabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityLabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
