import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadtokenComponent } from './uploadtoken.component';

describe('UploadtokenComponent', () => {
  let component: UploadtokenComponent;
  let fixture: ComponentFixture<UploadtokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadtokenComponent]
    });
    fixture = TestBed.createComponent(UploadtokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
