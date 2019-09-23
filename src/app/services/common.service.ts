import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  todolist:any = []
  constructor(private toastr: ToastrService) { }

  saveTodo(myObj){
    try {
      let todolist:any =[]
      let fetchData:any = localStorage.getItem("todolist");
      if(fetchData != null) todolist = JSON.parse(fetchData)
      todolist.push(myObj)
      localStorage.setItem("todolist",JSON.stringify(todolist));
      this.toastr.success('Todo Added', 'Success');
    } catch (error) {
      this.toastr.error(error, 'Error');
    }
  }

  getTodo(): any {
   return localStorage.getItem("todolist");
  }
  editTodo(myobj, id: any) {
    try {
      let fetchData:any = localStorage.getItem("todolist");
      let editedData = JSON.parse(fetchData)
      editedData[id] = myobj
      localStorage.setItem("todolist",JSON.stringify(editedData));
      this.toastr.success('Todo Edited', 'Success');
    } catch (error) {
      this.toastr.error(error, 'Error');
    }
  }
  deleteTodo(index): any {
    try {
      let fetchData = localStorage.getItem("todolist");
      let updatedData = JSON.parse(fetchData)
      delete updatedData[index]
      let deletedData =  updatedData.filter(item=>item!=null)
      localStorage.setItem("todolist",JSON.stringify(deletedData));
      this.toastr.success('Todo Deleted', 'Success');
    } catch (error) {
      this.toastr.error(error, 'Error');
    }
  }
}
