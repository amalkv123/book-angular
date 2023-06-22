import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

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
    TableModule
  ]
})
export class BookModule { }
