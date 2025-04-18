import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOrderComponent } from './section-order.component';

describe('SectionOrderComponent', () => {
  let component: SectionOrderComponent;
  let fixture: ComponentFixture<SectionOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
