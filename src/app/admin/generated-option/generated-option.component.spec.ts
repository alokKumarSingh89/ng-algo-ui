import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedOptionComponent } from './generated-option.component';

describe('GeneratedOptionComponent', () => {
  let component: GeneratedOptionComponent;
  let fixture: ComponentFixture<GeneratedOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratedOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratedOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
