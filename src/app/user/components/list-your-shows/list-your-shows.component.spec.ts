import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListYourShowsComponent } from './list-your-shows.component';

describe('ListYourShowsComponent', () => {
  let component: ListYourShowsComponent;
  let fixture: ComponentFixture<ListYourShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListYourShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListYourShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
