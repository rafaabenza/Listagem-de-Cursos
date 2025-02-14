import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouseDetailComponent } from './couse-detail.component';

describe('CouseDetailComponent', () => {
  let component: CouseDetailComponent;
  let fixture: ComponentFixture<CouseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouseDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
