import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public listOfHeroes: string[] = ['Spider-man', 'Antman', 'Starlord', 'Thor', "Hulk"];
  public removedHeroe?: string;

  removeLastHeroe(): void {
    this.removedHeroe = this.listOfHeroes.pop();
  }
}
