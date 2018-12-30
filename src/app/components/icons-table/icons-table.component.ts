import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icons-table',
  templateUrl: './icons-table.component.html',
  styleUrls: ['./icons-table.component.scss']
})
export class IconsTableComponent implements OnInit {
  @Input() showEdit: boolean;
  @Input() showDelete: boolean;
  @Input() showView: boolean;

  @Input() edit: boolean;
  @Input() delete: boolean;
  @Input() view: boolean;
  @Output() onclick: EventEmitter<string>;

  constructor() {
    this.onclick = new EventEmitter<string>();
   }

  ngOnInit() {
  }

  handleClickIcon(action: string, status: boolean) {
    if (status) {
      this.onclick.emit(action);
    }
  }

}
