import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  todoform: any;
  todoForm: any;
  tododata: any;
  id: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder, private commonService: CommonService) {
    this.createForm();
  }
  /**
  * This method will create the form group
  */
  createForm() {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required]
    });
  }
  /**
  * In this lifeCycle method we subscribe the router parameter
  * To fetching particular data
  */
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
      let fetchData = this.commonService.getTodo()
      this.tododata = JSON.parse(fetchData)[this.id];
    });
  }
  /**
  * This method will edit the perticular object
  */
  editTodo() {
    this.commonService.editTodo({ title: this.todoForm.controls.title.value, description: this.todoForm.controls.description.value, date: this.todoForm.controls.date.value }, this.id)
    this.router.navigate(['/']);
  }
}
