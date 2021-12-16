import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsulterNoteComponent } from './noteconsulter/noteconsulter.component';

const routes: Routes = [  {
  path: '',
  component: ConsulterNoteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteRoutingModule { }
