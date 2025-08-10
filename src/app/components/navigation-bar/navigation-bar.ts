import {Component, Input} from '@angular/core';
import {NavigationButton} from '../navigation-button/navigation-button';

@Component({
  selector: 'navigation-bar',
  imports: [
    NavigationButton
  ],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss'
})
export class NavigationBar {
  @Input() buttons: string[] = [];
}
