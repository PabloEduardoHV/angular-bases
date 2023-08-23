import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'peter';
  public age:  number = 20;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDetails(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spider-man';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'peter';
    this.age = 20;
  }
}
