import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import para usar Reactive Forms
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserComponent } from './components/user/user.component';
import { LogService } from './log.service';
import { UserService } from './service/user/user.service';
import { AuthService } from './service/auth/auth.service';
import { HomeComponent } from './components/home/home.component'; // Ajuste o caminho de importação


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [
    LogService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

