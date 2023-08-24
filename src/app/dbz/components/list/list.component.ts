import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input() //<---------------------------Con este decorador estoy diciendo que la propiedade de abajo hará referencia a una propiedad que me va a pasar el componente padre. Para ello tambien se debe agregar al html del padre lo siguiente: <selector-del-hijo [nombrePropiedadDelHijo]="nombrePropiedadDelPadre"></selector-del-hijo>
  public characters: Character[] = [];
}
