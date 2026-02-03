import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabNode } from './lab-node';

describe('LabNode', () => {
  let component: LabNode;
  let fixture: ComponentFixture<LabNode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabNode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabNode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
