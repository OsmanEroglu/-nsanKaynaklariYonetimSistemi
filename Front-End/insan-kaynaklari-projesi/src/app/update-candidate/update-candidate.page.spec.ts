import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateCandidatePage } from './update-candidate.page';

describe('UpdateCandidatePage', () => {
  let component: UpdateCandidatePage;
  let fixture: ComponentFixture<UpdateCandidatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCandidatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
