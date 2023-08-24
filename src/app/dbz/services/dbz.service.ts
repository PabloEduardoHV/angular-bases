import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})


export class DbzService {
  /* Propiedades */
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Trunk',
    power: 100
  }, {
    id: uuid(),
    name: 'Androide 18',
    power: 7000
  }];

  /* Metodos */
  addNewCharacter(character: Character): void {
    //La creacion del nuevo personaje solamente es para no refactor. todos los personajes ya que no cuentan con id
    const newCharacter: Character = {... character, id:uuid()}
    this.characters.push(newCharacter);
    console.log('Greetings from main page');
    console.log(newCharacter);
  }
  /*
  receiveDeletedCharactersIndex(index: number): void {
    console.log('Greetings from MainPageComponent');
    console.log('indice recibido');
    this.characters.splice(index, 1);
  }
  */
  deleteCharacterByID(id: string): void {
    console.log('Greetings from MainPageComponent');
    console.log('id recibido');
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
