import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteractivitiesComponent } from './filteractivities.component';

describe('FilteractivitiesComponent', () => {
  let component: FilteractivitiesComponent;
  let fixture: ComponentFixture<FilteractivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteractivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilteractivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
