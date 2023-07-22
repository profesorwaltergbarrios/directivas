import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirNgModelComponent } from './dir-ng-model.component';

describe('DirNgModelComponent', () => {
  let component: DirNgModelComponent;
  let fixture: ComponentFixture<DirNgModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirNgModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
