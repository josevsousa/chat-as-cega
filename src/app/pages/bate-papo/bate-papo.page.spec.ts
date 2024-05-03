import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BatePapoPage } from './bate-papo.page';

describe('BatePapoPage', () => {
  let component: BatePapoPage;
  let fixture: ComponentFixture<BatePapoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BatePapoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
