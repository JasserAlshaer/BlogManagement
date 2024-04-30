import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './base-component/app.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { CreateBlogComponent } from './Pages/create-blog/create-blog.component';
import { ManageBlogComponent } from './Pages/manage-blog/manage-blog.component';
import { ErrorMsgComponent } from './Pages/error-msg/error-msg.component';
import { NavbarComponent } from './Reusable/navbar/navbar.component';
import { FooterComponent } from './Reusable/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    CreateBlogComponent,
    ManageBlogComponent,
    ErrorMsgComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
