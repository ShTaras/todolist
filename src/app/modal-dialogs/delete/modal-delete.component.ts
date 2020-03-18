import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {

  constructor() { }

  @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
  }
  close() {
    this.isConfirmed.emit(false);
  }
  confirm() {
    this.isConfirmed.emit(true);
  }
}
