import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRequestCreateComponent } from './document-request-create.component';

describe('DocumentRequestCreateComponent', () => {
  let component: DocumentRequestCreateComponent;
  let fixture: ComponentFixture<DocumentRequestCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentRequestCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentRequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
