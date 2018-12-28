import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-resource',
  templateUrl: './modal-resource.component.html',
  styleUrls: ['./modal-resource.component.scss']
})
export class ModalResourceComponent implements OnInit {
  resource: any;
  constructor(@Inject(MAT_DIALOG_DATA) data) {
    console.log('en modal', data);
    this.resource = data.dataRow;
  }

  ngOnInit() {
  }

}
