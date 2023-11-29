import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  submitForm() {
    // This is where you can implement the logic to send the form data to your backend
    // For now, let's log the form data to the console
    console.log('Form submitted!');
  }
}
