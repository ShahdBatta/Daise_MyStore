import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  submitted: boolean = false;
  submitSuccess: boolean = false;

  onSubmit(): void {
    this.submitted = true;
    
    if (this.name.trim() && this.email.includes('@') && this.message.trim()) {
      this.submitSuccess = true;
      this.name = '';
      this.email = '';
      this.message = '';
      
      setTimeout(() => {
        this.submitSuccess = false;
        this.submitted = false;
      }, 3000);
    }
  }
}