import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cards-typescript';
  data: any[] = [
    {
      imgUrl: '../assets/images/biking.jpeg',
      title: 'Mountain Biking',
      tag: '@biking1222',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eligendi  quia ipsam rerum asperiores minus distinctio repellat ad a aut.',
    },
    {
      imgUrl: '../assets/images/mountain.jpeg',
      title: ' Snowy Mountain ',
      tag: '@hiking person',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eligendi  quia ipsam rerum asperiores minus distinctio repellat ad a aut.',
    },
    {
      imgUrl: '../assets/images/tree.jpeg',
      title: 'Neat Tree',
      tag: '@nature',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eligendi  quia ipsam rerum asperiores minus distinctio repellat ad a aut.',
    },
  ];
}
