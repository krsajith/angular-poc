import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerScrollComponent } from './inner-scroll.component';

describe('InnerScrollComponent', () => {
  let component: InnerScrollComponent;
  let fixture: ComponentFixture<InnerScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InnerScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
