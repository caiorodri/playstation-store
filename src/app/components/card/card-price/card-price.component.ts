import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.css'
})
export class CardPriceComponent {

  @Input()
  public consoles: string[] = ["PS4"];

  @Input()
  public gameValue: number = 99.99;
  
  @Input()
  public typeCoin: string = "R$";
  
  @Input()
  public gameCardTitle: string = "Play It Now!";

}
