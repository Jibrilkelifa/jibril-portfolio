import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertCard } from './cert-card';

describe('CertCard', () => {
  let component: CertCard;
  let fixture: ComponentFixture<CertCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
