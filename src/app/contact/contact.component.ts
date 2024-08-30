import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 }))
      ]),
    ]),
  ]
})
export class ContactComponent {
  sendEmail(event: Event) {
    event.preventDefault(); // Prevent the form from reloading the page

    emailjs.sendForm('service_72js92j', 'template_yxv9mh9', event.target as HTMLFormElement, 'voHJfDAl4r8-KSlZO')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Mensagem enviada com sucesso!');
      }, (error) => {
        console.log(error.text);
        alert('Ocorreu um erro ao enviar a mensagem.');
      });
  }
}
