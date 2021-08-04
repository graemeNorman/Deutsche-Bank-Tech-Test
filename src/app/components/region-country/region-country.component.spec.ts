// Core
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegionCountryComponent } from "./region-country.component";

describe('RegionCountryComponent', () => {
  let component: RegionCountryComponent;
  let fixture: ComponentFixture<RegionCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(RegionCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.compileComponents();
  });

  describe('setup and title check', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });
  });

  it('should render text label above select', () => {
    component.label = 'Test Label';
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('label').textContent)
      .toContain('Test Label');
  });
});
