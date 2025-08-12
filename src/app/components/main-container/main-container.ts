import { Component } from '@angular/core';
import {NavigationBar} from '../navigation-bar/navigation-bar';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'main-container',
  standalone: true,
  imports: [
    NavigationBar,
    RouterOutlet
  ],
  templateUrl: './main-container.html',
  styleUrl: './main-container.scss'
})
export class MainContainer {
  buttons: string[] = ['data', 'analysis', 'monitor'];
}
