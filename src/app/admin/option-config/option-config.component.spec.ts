import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionConfigComponent } from './option-config.component';

describe('OptionConfigComponent', () => {
  let component: OptionConfigComponent;
  let fixture: ComponentFixture<OptionConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
