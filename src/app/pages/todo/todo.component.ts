import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoForm: FormGroup;
  constructor(private router:Router, private commonService: CommonService, private fb: FormBuilder, private toastr: ToastrService) {
    this.createForm();
  }
  /**
  * This method will create a form group
  */
  createForm() {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
  /**
  * This method will save the data in localStorage
  */
  addTodo() {
    this.commonService.saveTodo({ title: this.todoForm.controls.title.value, description: this.todoForm.controls.description.value, date: this.todoForm.controls.date.value })
    this.router.navigate(['/']);
  }
}
