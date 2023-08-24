/* COMPONENTE PADRE */
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  /* Propiedades */

  /* Metodos */
  constructor(private dbzService: DbzService) {

  }
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }
  onDeleteCharacter(id: string):void {
    this.dbzService.deleteCharacterByID(id);
  }
  onNewCharacter(character: Character): void {
    this.dbzService.addNewCharacter(character);
  }
}
