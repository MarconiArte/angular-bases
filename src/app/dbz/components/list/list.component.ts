import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {

  @Input()
  public characterList:Character[] = [{
    name:'Trunks',
    power:10
  }];

  @Output()
  public onDeleted: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void{
    if (!id) return;

    this.onDeleted.emit(id);
  }
}
