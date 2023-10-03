import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/file-upload.service';
import { EmailService } from 'src/app/email.service';
@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {
vid="Attach Video (Up to: 25MB)";
vid2="Attach Your Sample";
file2 = '';
shortLink1: any;
shortLink2: any;
file ='';
service1 ='';
contentEditable:any;
names='';
emails='';
phones='';
descs='';
loading1 = true;
loading2 = true;
  constructor(private fileUploadService: FileUploadService, private mails: EmailService) { }

  ngOnInit(): void {
  }
  onChange(event:any) {
    this.file = event.target.files[0];
    this.vid = "Video Selected! "
}

onChange2(event:any) {
  this.file2 = event.target.files[0];
  this.vid2 = "File Selected! "
}

goToBottom(){
  window.scrollTo(0,document.body.scrollHeight-1200);
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
    this.loading1 = false;
    if(this.file2!='' && this.file!=''){
     // console.log("Both");
      this.fileUploadService.upload(this.file2).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {
  
                // Short link via api response
                this.shortLink1 = event.link;
                this.fileUploadService.upload(this.file).subscribe(
                  (event: any) => {
                      if (typeof (event) === 'object') {
            
                          // Short link via api response
                          this.shortLink2 = event.link;
                   // console.log('Link', this.shortLink2)
                    const msg = "Service: "+this.service1+"<br>  Name: "+this.names+"<br>  Email: "+this.emails+"<br>  Phone: "+this.phones+"<br>  Comments: "+this.descs+"<br>  Sample-link: "+this.shortLink1+"<br>  Video-link: "+this.shortLink2;
    this.mails.mail2(msg).subscribe((resp:any)=>{
      alert("Thank you! And congratulations on the commencement of your pursuit of aspirations! Will contact you promptly.");
    window.location.reload();
      // console.log(resp);
      }),(error:any)=>{
        console.log(error);
      }
                      }
                    }
              );
          //console.log('Link', this.shortLink1)
            }
          }
    );
    }

  if(this.file!='' && this.file2==''){
    //console.log("video");
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {

              // Short link via api response
              this.shortLink2 = event.link;

              const msg = "Service: "+this.service1+"<br>  Name: "+this.names+"<br>  Email: "+this.emails+"<br>  Phone: "+this.phones+"<br>  Comments: "+this.descs+"<br>  Video-link: "+this.shortLink2;
              this.mails.mail2(msg).subscribe((resp:any)=>{
                alert("Thank you! And congratulations on the commencement of your pursuit of aspirations! Will contact you promptly.");
              window.location.reload();
                // console.log(resp);
                }),(error:any)=>{
                  console.log(error);
                }
        //console.log('Link', this.shortLink2)
          }
        }
  );
  }
  if(this.file=='' && this.file2!=''){
   // console.log("Image")
    this.fileUploadService.upload(this.file2).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {

              // Short link via api response
              this.shortLink1 = event.link;
              const msg = "Service: "+this.service1+"<br>  Name: "+this.names+"<br>  Email: "+this.emails+"<br>  Phone: "+this.phones+"<br>  Comments: "+this.descs+"<br>  Sample-link: "+this.shortLink1;
              this.mails.mail2(msg).subscribe((resp:any)=>{
                alert("Thank you! And congratulations on the commencement of your pursuit of aspirations! Will contact you promptly.");
              window.location.reload();
                // console.log(resp);
                }),(error:any)=>{
                  console.log(error);
                }
       // console.log('Link', this.shortLink2)
          }
        }
  );
  }

  if(this.file=='' && this.file2==''){
    //console.log('both files null')
    const msg = "Service: "+this.service1+"<br>  Name: "+this.names+"<br>  Email: "+this.emails+"<br>  Phone: "+this.phones+"<br>  Comments: "+this.descs;
    this.mails.mail2(msg).subscribe((resp:any)=>{
      alert("Thank you! And congratulations on the commencement of your pursuit of aspirations! Will contact you promptly.");
    window.location.reload();
      // console.log(resp);
      }),(error:any)=>{
        console.log(error);
      }

  }
  
        
        
}
}
}
