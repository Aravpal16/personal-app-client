import { Component, Input } from '@angular/core';

@Component({
  selector: 'Notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  note: Note[] = [];
  count: Number = 1;
  noteapp: Note = new Note();
  addNote() {
    this.note.push({
      noteLable: 'Label',
      noteDescriptiom: 'Enter Texts',
    });
  }
}

class Note {
  noteLable: String;
  noteDescriptiom: String;
}
