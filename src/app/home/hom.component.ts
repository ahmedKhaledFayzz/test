import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hom',
  imports: [RouterOutlet, homComponent],
  templateUrl: './hom.component.html',
  styleUrl: './hom.component.css',
})
export class homComponent {
  title = 'test';
}
