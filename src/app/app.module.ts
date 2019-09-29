import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TaskmanagerComponent } from './taskmanager/taskmanager.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule} from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { TaskComponent } from './task/task.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TaskmanagerComponent,
    HeaderComponent,
    PagenotfoundComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'user',component:UserComponent},
      {path:'taskmanager',component:TaskmanagerComponent},
      {path:'**',component:PagenotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
