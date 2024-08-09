import { Component, OnInit, effect, input } from '@angular/core';

@Component({
  selector: 'app-test-signal',
  standalone: true,
  imports: [],
  templateUrl: './test-signal.component.html',
  styleUrl: './test-signal.component.css'
})
export class TestSignalComponent {
  message = 'No';
  constructor() {
    effect(() => {
      this.message = this.value() ? "Yes" : "No"
    });
  }
  value = input(false);

}
