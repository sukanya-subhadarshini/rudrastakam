import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudrastakamComponent } from './rudrastakam.component';

describe('RudrastakamComponent', () => {
  let component: RudrastakamComponent;
  let fixture: ComponentFixture<RudrastakamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RudrastakamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RudrastakamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
