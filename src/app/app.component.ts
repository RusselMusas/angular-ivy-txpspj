import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  authors = ['Author1', 'Author2', 'Author3'];

  submitForm(f: NgForm) {
    console.log("Form value: ", f.value);
  }

}
