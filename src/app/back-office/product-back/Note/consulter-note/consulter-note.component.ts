import { Component, OnInit } from '@angular/core';
import { Note } from 'src/Model/Note';
import { Produit } from 'src/Model/Produit';
import { NoteService } from '../../NoteService/note.service';

@Component({
  selector: 'app-consulter-note',
  templateUrl: './consulter-note.component.html',
  styleUrls: ['./consulter-note.component.css']
})
export class ConsulterNoteComponent implements OnInit {

  constructor(private ns:NoteService) { }
  produit:Produit;
NoteList:Note[];
NoteListC:Note[]
getAllNote(){
  let n:Note
/* for(let i:number=0;i<this.NoteList.length;i++){
  console.log()
} */

}

getAllNoteByClient(idCient:number){
  this.ns.getNoteByClient(idCient).subscribe((res)=>{
    this.NoteListC=res;
  console.log(this.NoteListC)})
}
getAllNoteByClientProduit(idProduit:number,idCient:number){
  
  this.ns.getNoteByproduitClient(idProduit,idCient).subscribe((res)=>{
    this.NoteList=res;
  console.log(this.NoteList)})
}




  ngOnInit(): void {

  }

}
