import { Component } from '@angular/core';

@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [],
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.css'
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: ''
  };

  logowanie() {
    if (this.formData.username === 'przykladowyUzytkownik' && this.formData.password === 'przykladoweHaslo') {
      console.log("Zalogowano pomyslnie");
    } else {
      console.log("Błą logowania. Sprawdź dane.");
    }
  }
}
