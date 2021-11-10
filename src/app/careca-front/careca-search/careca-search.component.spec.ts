import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarecaSearchComponent } from './careca-search.component';

describe('CarecaSearchComponent', () => {
  let component: CarecaSearchComponent;
  let fixture: ComponentFixture<CarecaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarecaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarecaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
