import { Component, OnInit, inject, signal } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {  CdkDragDrop, DragDropModule,  moveItemInArray,  transferArrayItem, } from '@angular/cdk/drag-drop';
import { Column } from '../../models/Column';
import { ToDo } from '../../models/ToDo';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsis, faX, faPlus } from '@fortawesome/free-solid-svg-icons';
import { OverlayModule } from '@angular/cdk/overlay';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent, DragDropModule, FormsModule, FontAwesomeModule, OverlayModule],
  templateUrl: './board.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent {
  dialogService = inject(Dialog);
  faElipsis = faEllipsis;
  faPlus = faPlus;
  faX = faX;
  isOpen = signal(false);
  columns = signal<Column[]>(
    [
      {
        title: 'To Do',
        expanded: false,
        todos: [
          {
            id : 1,
            title : 'Do homework'
          },
          {
            id : 2,
            title : ' Watch Bash shell course'
          }
        ],
      },
      {
        title: 'Doing',
        expanded: false,
        todos: [
          {
            id: 1,
            title: 'Watch Angular CDK course'
          },
          {
            id: 2,
            title: 'Study'
          }
        ]
      },
      {
        title: 'Done',
        expanded: false,
        todos: [
          {
            id: 1,
            title: 'Mental map software engineering'
          },
          {
            id: 2,
            title : 'Math test'
          }
        ]
      }
    ]
  );
  
  

  

  drop(event: CdkDragDrop<ToDo[]>) {
    console.log(event);
    if(event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  addTask(todos: ToDo[]) {
    todos.push({id: todos.length + 1, title: '', isAdded: true});
  }

  addCard() {
    this.columns.update(prev=> [...prev, {title: 'New Card', todos: [], expanded: false}])
  }

  openMenu(col: Column) {
    col.expanded = !col.expanded;
  }
  openDialog(col : string, todo : ToDo){
    this.dialogService.open(TodoDialogComponent, {
      width: '55%',
      height: '80%',
      data: {
        colName : col,
        todo : todo
      }
    });
  }

}
