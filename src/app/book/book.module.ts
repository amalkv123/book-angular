import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';



import { InputTextModule } from 'primeng/inputtext';



import { InputTextareaModule } from 'primeng/inputtextarea';

import { InputNumberModule } from 'primeng/inputnumber';

import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    BookComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    TreeTableModule,
    ButtonModule,
    DropdownModule,
    ReactiveFormsModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    CalendarModule
  ]
})
export class BookModule { }
