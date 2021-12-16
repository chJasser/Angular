import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { ConsulterNoteComponent } from './noteconsulter/noteconsulter.component';



@NgModule({
  declarations: [
    ConsulterNoteComponent
  ],
  imports: [
    CommonModule,
    NoteRoutingModule
  ]
})
export class NoteModule { }
