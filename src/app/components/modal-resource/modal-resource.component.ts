import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { PostsService } from 'src/app/shared/services/posts.service';
import * as alertify from 'alertifyjs';
import { TranslateService } from '@ngx-translate/core';

interface UpdatePostEvent {
  id?: number,
  saved: boolean
}

@Component({
  selector: 'app-modal-resource',
  templateUrl: './modal-resource.component.html',
  styleUrls: ['./modal-resource.component.scss']
})
export class ModalResourceComponent implements OnInit {
  resource: any;
  edit: boolean;
  postForm: FormGroup;
  @Output() closed: EventEmitter<UpdatePostEvent>;

  constructor(@Inject(MAT_DIALOG_DATA) data, private posts: PostsService, private translate: TranslateService ) {
    this.edit = data.edit;
    this.closed = new EventEmitter<UpdatePostEvent>();
    this.resource = data.dataRow;
  }

  ngOnInit() {
    this.createFormControls();
  }

  createFormControls() {
    this.postForm = new FormGroup({
      user: new FormControl({value: this.resource.user.name, disabled: true} ),
      id: new FormControl({value: this.resource.id, disabled: true} ),
      title: new FormControl({value: this.resource.title, disabled: !this.edit} ),
      body: new FormControl({value:this.resource.body, disabled: !this.edit} ),
    })
  }

  async onSubmit(event, id){
    await this.posts.updatePost(id, event).toPromise().then(reponse => {
      this.closed.emit({id, saved: true});
      alertify.success(this.translate.instant('update_success')
      );
    },
      // Error
      () => {
      alertify.error(this.translate.instant('action_cancel'));
    }
   );    
  }


}
