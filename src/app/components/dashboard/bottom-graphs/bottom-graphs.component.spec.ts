import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomGraphsComponent } from './bottom-graphs.component';

describe('BottomGraphsComponent', () => {
  let component: BottomGraphsComponent;
  let fixture: ComponentFixture<BottomGraphsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomGraphsComponent]
    });
    fixture = TestBed.createComponent(BottomGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
