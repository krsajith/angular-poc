import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterScrollComponent } from './outer-scroll.component';

describe('OuterScrollComponent', () => {
  let component: OuterScrollComponent;
  let fixture: ComponentFixture<OuterScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OuterScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OuterScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
