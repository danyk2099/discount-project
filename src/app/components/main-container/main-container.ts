import { Component } from '@angular/core';
import {NavigationBar} from '../navigation-bar/navigation-bar';

@Component({
  selector: 'main-container',
  imports: [
    NavigationBar
  ],
  templateUrl: './main-container.html',
  styleUrl: './main-container.scss'
})
export class MainContainer {
  buttons: string[] = ['Date', 'Analysis', 'Monitor'];
}
