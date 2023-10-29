import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CurrencyFormatPipe } from './pipes/currencyFormat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
    CurrencyFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
