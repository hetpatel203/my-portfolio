import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://api.emailjs.com/api/v1.0/email/send';
  private serviceId = 'YOUR_EMAILJS_SERVICE_ID'; // Replace with your EmailJS service ID
  private templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with your EmailJS template ID
  private userId = 'YOUR_EMAILJS_USER_ID'; // Replace with your EmailJS user ID

  constructor(private http: HttpClient) { }

  sendEmail(data: EmailData): Observable<any> {
    const emailData = {
      service_id: this.serviceId,
      template_id: this.templateId,
      user_id: this.userId,
      template_params: {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      }
    };

    return this.http.post(this.apiUrl, emailData);
  }
}