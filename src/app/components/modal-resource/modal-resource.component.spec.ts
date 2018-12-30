import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResourceComponent } from './modal-resource.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MAT_DIALOG_DATA, MatDialogModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsService } from 'src/app/shared/services/posts.service';
import { of } from 'rxjs';

describe('ModalResourceComponent', () => {
  let component: ModalResourceComponent;
  let fixture: ComponentFixture<ModalResourceComponent>;
  let post: PostsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalResourceComponent ],
      imports: [
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        HttpClientModule,
        MatInputModule        
      ],
      providers: [
         {provide: MAT_DIALOG_DATA, useValue: {}},
         PostsService
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResourceComponent);
    component = fixture.componentInstance;
    post = TestBed.get(PostsService);
    component.resource = { 
      user: {
        name: 'nombre'
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createFormControls()', () => {
    component.createFormControls();
    expect(component.postForm).toBeDefined();
  });

  it('should call onSubmit()', async () => {
    const event = {
      title: 'tiutle',
      body: 'body'
    }
    const id = 1;
    const spy = spyOn(post, 'updatePost').and.callFake(() => of({}));
    const spyEmit = spyOn(component.closed, 'emit');
    await component.onSubmit(event, 1)
    expect(spy).toHaveBeenCalled();
    expect(spyEmit).toHaveBeenCalledWith({ id, saved: true });
  });
});
