import { Injectable } from '@angular/core';
import { TodoServiceService } from './todo-service.service';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor() { }

  private meta: any = {
    done: 0,
    all: 0
  }
  get all(){
    return this.meta.all;
  }
  get done(){
    return this.meta.done;
  }
  countAll(length:number){
    this.meta.all = length
  }
  countDone(length:number){
    this.meta.done = length
  }
}
