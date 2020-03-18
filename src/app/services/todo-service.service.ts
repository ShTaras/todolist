import { StorageService } from './storage.service';
import { TodoItem } from './../interfaces/todo-item';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs'
import { map, filter } from 'rxjs/operators'
import { MetaService } from './meta.service';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private subj: BehaviorSubject<any> = new BehaviorSubject([]);
  private todos: Array<TodoItem> = [];

  constructor(private storageSvc: StorageService) {
    this.load();
  }

  get items() {
    return this.subj.asObservable();
  }

  load() {
    this.todos = this.storageSvc.load();
    this.subj.next(this.todos);
  }
  save(data: any) {
    this.storageSvc.save(data);
  }

  addTodo(todoText: string): void {
    this.todos.unshift({
      date: new Date(),
      importance: 1,
      text: todoText,
      done: false,
      id: this.createId()
    })
    this.subj.next(this.todos);
  }

  createId(): string {
    return `f${(+new Date).toString(16)}`
  }
  deleteTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.subj.next(this.todos);
  }
  editTodo(todo: TodoItem, newText) {
    todo.text = newText;
    this.subj.next(this.todos);
  }
  upImportance(todo: TodoItem) {
    if (todo.importance < 5) todo.importance++;
    this.subj.next(this.todos);
  }
  downImportance(todo: TodoItem) {
    if (todo.importance > 1) todo.importance--;
    this.subj.next(this.todos);
  }
  done(todo: TodoItem) {
    todo.done = !todo.done;
    this.subj.next(this.todos);
  }
  todosSort(sort:string) {
    switch (sort) {
      case 'done':
        this.todos = this.todos.sort((prevTodo, nextTodo) => Number(nextTodo.done) - Number(prevTodo.done));
        break;
      case 'importance':
        this.todos = this.todos.sort((prevTodo, nextTodo) => nextTodo.importance - prevTodo.importance);
        break;
      case 'date':
        this.todos = this.todos.sort((prevTodo, nextTodo) => Number(new Date(nextTodo.date)) - Number(new Date(prevTodo.date)));
        console.log(this.todos);
        break;
      default:
        break;
    }
  }
  search(text:string) {
    this.subj.next(this.todos.filter(todo => todo.text.indexOf(text) >= 0));
  }
}
