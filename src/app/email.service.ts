import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  mail(entry:any){
    return this.http.post('https://thescibox.com/Mail/mail2.php',entry, { responseType: 'text' })
  }

  mail2(entry:any){
    return this.http.post('https://thescibox.com/Mail/mail3.php',entry, { responseType: 'text' })
  }
}
