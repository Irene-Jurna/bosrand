import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent {
  image = 'assets/images/brickWallBackground.png';
}
