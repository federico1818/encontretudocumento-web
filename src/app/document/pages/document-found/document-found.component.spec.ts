import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentFoundComponent } from './document-found.component';

describe('DocumentFoundComponent', () => {
  let component: DocumentFoundComponent;
  let fixture: ComponentFixture<DocumentFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
