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
    createForm() {
      this.todoForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        date: ['', Validators.required]
      });
    }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
      let fetchData = this.commonService.getTodo()
      this.tododata = JSON.parse(fetchData)[this.id];
    });
  }
  editTodo() {
    this.commonService.editTodo({ title: this.todoForm.controls.title.value, description: this.todoForm.controls.description.value, date: this.todoForm.controls.date.value },this.id)
    this.router.navigate(['/']);
  }
}
