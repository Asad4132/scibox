import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/email.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
newform:any;
login:any;
names = '';
contentEditable:any;
emails = '';
phones = '';
service1 = '';
service2 = '';
service3 = '';
descs = '';
loading1 = true;
  constructor(private mails: EmailService) { }

  ngOnInit(): void {
  }
  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight-1000);
  }
  i = 0;
  toggleEditable(event:any ){
    if ( event.target.checked ) {
      
        this.i+=1;
      this.service1 =event.target.value;
        this.contentEditable = true;
   
  }
  else{
    this.i -=1;
    if(this.i<=0){
    this.contentEditable = false;
  }
}
}
  submits(login:any){
   if(!login.invalid && this.contentEditable){
      //console.log("Footer 1")
      this.loading1 = false;
      const msg = "Service: "+this.service1+"<br>  Name: "+this.names+"<br>  Email: "+this.emails+"<br>  Phone: "+this.phones+"<br>  Project Desciption: "+this.descs;
      this.mails.mail(msg).subscribe((resp:any)=>{
        //console.log(resp);
        alert("Thank you! And congratulations on the commencement of your pursuit of aspirations! Will contact you promptly.");
      window.location.reload();
        }),(error:any)=>{
          console.log(error);
        }
      
    } 

  }  
}
