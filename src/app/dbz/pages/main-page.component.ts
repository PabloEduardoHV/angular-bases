/* COMPONENTE PADRE */
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  /* Propiedades */
  public characters: Character[] = [{
    name: 'Krilin',
    power: 1000
  }, {
    name: 'Goku',
    power: 9500
  }, {
    name: 'Trunk',
    power: 100
  }, {
    name: 'Androide 18',
    power: 7000
  }];

  /* Metodos */
  receiveCharacter(character: Character): void {
    console.log('Greetings from main page');
    console.log(character)
    this.characters.push(character);
  }
  receiveDeletedCharactersIndex(index: number): void {
    console.log('Greetings from MainPageComponent');
    console.log('indice recibido');
    this.characters.splice(index, 1);
  }
}
