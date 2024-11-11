import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTravelComponent } from './page-travel.component';

describe('PageTravelComponent', () => {
  let component: PageTravelComponent;
  let fixture: ComponentFixture<PageTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageTravelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
