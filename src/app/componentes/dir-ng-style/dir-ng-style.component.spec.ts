import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirNgStyleComponent } from './dir-ng-style.component';

describe('DirNgStyleComponent', () => {
  let component: DirNgStyleComponent;
  let fixture: ComponentFixture<DirNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirNgStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
