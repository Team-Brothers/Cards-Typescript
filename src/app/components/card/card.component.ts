import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() imgUrl: string = '';
  @Input() title: string = '';
  @Input() tag: string = '';
  @Input() text: string = '';
  constructor() {}

  ngOnInit(): void {}
}
