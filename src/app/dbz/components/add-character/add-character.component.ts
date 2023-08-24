import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  /* Propiedades */
  @Output() //Con este decorador estoy diciendo que esta propiedad del componente hijo será emitido a otro componente
  public onNewCharacter: EventEmitter <Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  /* Métodos */
  emitCharacter(): void {
    console.log(this.character);
    if(this.character.name.length === 0) return; //Validacion para no aceptar personajes vacios

    this.onNewCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0
    };//limpiar campos
  }
}
