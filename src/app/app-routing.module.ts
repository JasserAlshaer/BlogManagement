import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { CreateBlogComponent } from './Pages/create-blog/create-blog.component';
import { ManageBlogComponent } from './Pages/manage-blog/manage-blog.component';
import { ErrorMsgComponent } from './Pages/error-msg/error-msg.component';

const routes: Routes = [
  {
    path:'',component:MainPageComponent
  },
  {
    path:'login',component:LoginPageComponent
  },
  {
    path:'create',component:CreateBlogComponent
  },
  {
    path:'manage',component:ManageBlogComponent
  },
  {
    path:'**',
    component:ErrorMsgComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
