import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  list: any;

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.getTodo()
  }
  getTodo() {
    this.list =  this.commonService.getTodo()
  }
  deleteTodo(index) {
    this.commonService.deleteTodo(index)
    this.list = []
    this.getTodo()
  }
}
