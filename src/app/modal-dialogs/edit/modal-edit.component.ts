import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import{ModalDialogService} from '../../services/modal-dialog.service'



@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {

  newText:string

  constructor(public modalSvc: ModalDialogService) { }

  ngOnInit(): void {
    this.newText = this.modalSvc.oldText; 
  }

  @Output() isConfirmed: EventEmitter<any> = new EventEmitter<any>();

  cancel() {
    this.isConfirmed.emit(false);
  }
  save() {
    this.isConfirmed.emit(this.newText);
  }
}
