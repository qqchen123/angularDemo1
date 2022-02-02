import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercontentComponent } from './ordercontent.component';

describe('OrdercontentComponent', () => {
  let component: OrdercontentComponent;
  let fixture: ComponentFixture<OrdercontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdercontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
