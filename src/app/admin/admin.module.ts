import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { DateComponent } from './date/date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContentComponent,
    DateComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ScrollPanelModule,
    ReactiveFormsModule
  ],
})
export class AdminModule { }
