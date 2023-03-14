import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationPageComponent } from './communication-page.component';

describe('IletisimComponent', () => {
  let component: CommunicationPageComponent;
  let fixture: ComponentFixture<CommunicationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
