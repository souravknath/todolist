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
  /**
  * This method will fetching the data from local storage
  */
  getTodo() {
    this.list =  this.commonService.getTodo()
  }
  /**
  * This method will delete the perticular object
  * @param index
  */
  deleteTodo(index) {
    this.commonService.deleteTodo(index)
    this.list = []
    this.getTodo()
  }
}
