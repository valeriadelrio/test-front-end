import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-row-table',
  templateUrl: './row-table.component.html',
  styleUrls: ['./row-table.component.scss']
})
export class RowTableComponent implements OnInit {
  @Input()
  data: any;
  @Input()
  bg: string;
  @Output()
  clickIcon: EventEmitter<any>;
  constructor() {
    this.clickIcon = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  clickIconTable(event: string, id: any) {
    console.log('hola', event, id);
    this.clickIcon.emit({ event: event, id: id });
  }
}
