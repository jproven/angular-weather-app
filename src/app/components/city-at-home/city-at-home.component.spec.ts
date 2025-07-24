import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAtHomeComponent } from './city-at-home.component';

describe('CityAtHomeComponent', () => {
  let component: CityAtHomeComponent;
  let fixture: ComponentFixture<CityAtHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityAtHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityAtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
