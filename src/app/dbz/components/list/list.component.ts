import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  /* Propiedades */
  @Input() //<---------------------------Con este decorador estoy diciendo que la propiedade de abajo hará referencia a una propiedad que me va a pasar el componente padre. Para ello tambien se debe agregar al html del padre lo siguiente: <selector-del-hijo [nombrePropiedadDelHijo]="nombrePropiedadDelPadre"></selector-del-hijo>
  public characters: Character[] = [];

  @Output()
  public onDeleteCharacter: EventEmitter <string> = new EventEmitter();

  /* Métodos */
  /*
  emitDeletedCharactersIndex(index: number): void {
    console.log('Greetings from ListComponent')
    console.log(index);
    this.onDeleteCharacter.emit(index);
  }
  */
  emitDeletedCharactersID(id: string): void {
    console.log('Greetings from ListComponent')
    console.log(id);
    this.onDeleteCharacter.emit(id);
  }
}
