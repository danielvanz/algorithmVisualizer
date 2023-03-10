import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingAlgorithmsComponent } from './searching-algorithms.component';

describe('SearchingAlgorithmsComponent', () => {
  let component: SearchingAlgorithmsComponent;
  let fixture: ComponentFixture<SearchingAlgorithmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchingAlgorithmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchingAlgorithmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
