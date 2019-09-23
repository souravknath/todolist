import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { EditTodoComponent } from './pages/edit-todo/edit-todo.component';

const routes: Routes = [
  {path:'',component:TodoListComponent},
  {path:'addtodo',component:TodoComponent},
  {path:'edit/:id',component: EditTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
