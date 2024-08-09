import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Observable, firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  router=inject(Router);

  print() {
    console.log(this.profileForm.value);

  }

  profileForm = new FormGroup({
    name: new FormControl(''),
    dob: new FormControl(new Date("2023-01-01")),
    dob2: new FormControl("2023-01-01"),

  });

  handleChange($event: Event) {
    console.log($event);

  }
  title = 'angular-latest-version';
  flag = false;

  async checkFirstValue() {
    try {
      const v = await firstValueFrom(this.fetch(1))
    }
    catch(e){
      console.log('Error')
    }
    
  }

  fetch(n: number): Observable<number> {
    if (n === 1) throw new Error('Test')
    return of(1);
  }

  testRoute(){
    this.router.navigate(['route-test',':vari/able'])
  }
}
