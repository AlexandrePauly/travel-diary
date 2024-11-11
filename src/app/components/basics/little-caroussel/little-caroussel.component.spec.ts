import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleCarousselComponent } from './little-caroussel.component';

describe('LittleCarousselComponent', () => {
  let component: LittleCarousselComponent;
  let fixture: ComponentFixture<LittleCarousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LittleCarousselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LittleCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
