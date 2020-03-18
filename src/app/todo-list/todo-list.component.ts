
import { TodoServiceService } from './../services/todo-service.service';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { trigger, transition, style, animate } from '@angular/animations';

import { Observable } from 'rxjs';
import{ModalDialogService} from './../services/modal-dialog.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0px)' }))
      ]),
      transition(':leave', [
        animate(200, style({ opacity: 0, transform: 'translateY(30px)' }))
      ])
    ])
  ]
})
export class TodoListComponent implements OnInit {

  items: Observable<any>;

  constructor(public todoSvc: TodoServiceService,public modalSvc: ModalDialogService) { }

  ngOnInit(): void {
    this.items = this.todoSvc.items;
  }
  


}
