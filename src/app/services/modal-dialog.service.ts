import { Injectable } from '@angular/core';
import { TodoServiceService } from './../services/todo-service.service';
import { TodoItem } from '../interfaces/todo-item';
@Injectable({
  providedIn: 'root'
})
export class ModalDialogService {

  private visibleDltMsg: boolean = false;
  private visibleEditMsg: boolean = false;
  private eclipseBackground:boolean = false;

  private id: string;
  private todo: any;
  constructor(public todoSvc: TodoServiceService) { }

  get oldText() {
    return this.todo.text;
  }
  get isVisibleDltMsg(){
    return this.visibleDltMsg;
  }
  get isVisibleEditMsg(){
    return this.visibleEditMsg;
  }
  get isEclipseBackground(){
    return this.eclipseBackground;
  }

  showDialogDelete(todo:TodoItem) {
    this.eclipseBackground = true;
    this.visibleDltMsg = true;
    this.id = todo.id;
  }

  showDialogEdit(todo:TodoItem) {
    this.eclipseBackground = true;
    this.visibleEditMsg = true;
    this.todo = todo
  }

  isConfirmDelete($event: boolean) {
    if ($event) {
      this.todoSvc.deleteTodo(this.id);
    }
    this.visibleDltMsg = false;
    this.eclipseBackground = false;
  }

  isConfirmEdit($event:any) {
    if ($event) {
      this.todoSvc.editTodo(this.todo, $event);
    }
    this.visibleEditMsg = false;
    this.eclipseBackground = false;
  }
  search(text:string){
    console.log(text);
  }

}
