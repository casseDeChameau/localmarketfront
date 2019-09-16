import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductResearchComponent } from './product-research.component';

describe('ProductResearchComponent', () => {
  let component: ProductResearchComponent;
  let fixture: ComponentFixture<ProductResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
