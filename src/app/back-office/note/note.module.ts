import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { ConsulterNoteComponent } from './noteconsulter/noteconsulter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConsulterNoteComponent
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NoteModule { }
