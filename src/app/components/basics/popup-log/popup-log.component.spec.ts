import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupLogComponent } from './popup-log.component';

describe('PopupLogComponent', () => {
  let component: PopupLogComponent;
  let fixture: ComponentFixture<PopupLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
