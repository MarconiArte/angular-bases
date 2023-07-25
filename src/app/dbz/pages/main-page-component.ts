import { Character } from './../interface/characters.interface';
import { DbzService } from '../services/dbz-services';

import { Component,  } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent{

  constructor(private dbzService: DbzService){} //Llamamos a la info del servicio


  get character():Character[]{
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
  }
}
