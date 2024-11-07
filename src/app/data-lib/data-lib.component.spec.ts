import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLibComponent } from './data-lib.component';

describe('DataLibComponent', () => {
  let component: DataLibComponent;
  let fixture: ComponentFixture<DataLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
