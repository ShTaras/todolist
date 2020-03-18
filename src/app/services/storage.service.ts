import { TodoItem } from './../interfaces/todo-item';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  storage: any = window.localStorage;
  
  readonly KEY: string = "todo";
  
  save(data:TodoItem[]){
    let dataStr = JSON.stringify(data);
    this.storage.setItem(this.KEY, dataStr);
  }

  load(){
    let dataStr = this.storage.getItem(this.KEY);
    return dataStr ? JSON.parse(dataStr) : [];    
  }
}
