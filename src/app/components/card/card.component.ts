import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  public gameImage: string = "";

  @Input()
  gameLabel: string = "Exclusive";

  @Input()
  public consoles: string[] = ["PS3", "PS4"];

  @Input()
  public gameValue: number = 99.99;
  
  @Input()
  public typeCoin: string = "R$";
  
  @Input()
  public gameCardTitle: string = "Play It Now!";
  
}
