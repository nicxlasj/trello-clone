import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faX, faCheckToSlot, faXmark, faBars, faUser, faTag, faSquareCheck, faClock, faPaperclip, } from '@fortawesome/free-solid-svg-icons';
import { faOldRepublic, faJediOrder } from '@fortawesome/free-brands-svg-icons';
import { ToDo } from '../../models/ToDo';
import { Data } from '../../models/Data';
@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {
  data = signal<Data>({colName : '', todo : new ToDo(1, '')});
  dialogService = inject(DialogRef);
  constructor(@Inject(DIALOG_DATA) data : Data){
    this.data.set(data);
  }
  faX = faX;
  faCheckToSlot = faCheckToSlot;
  faXmark = faXmark;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faSquareCheck = faSquareCheck;
  faPaperclip = faPaperclip;
  faOldRepublic = faOldRepublic;
  faJediOrder = faJediOrder;

  faClock = faClock;
  close(){
    this.dialogService.close();
  }
}
