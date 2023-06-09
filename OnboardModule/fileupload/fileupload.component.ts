import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription, finalize } from 'rxjs';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit{

  
 /*   @Input()
    requiredFileType:string;

    fileName = '';
    uploadProgress:number;
    uploadSub: Subscription; 

    constructor(private http: HttpClient) {}
  ngOnInit(): void {
   
  }

    onFileSelected(event) {
        const file:File = event.target.files[0];
      
        if (file) {
            this.fileName = file.name;
            const formData = new FormData();
            formData.append("thumbnail", file);

            const upload$ = this.http.post("/employee/upload", formData, {
                reportProgress: true,
                observe: 'events'
            })
            .pipe(
                finalize(() => this.reset())
            );
          
            this.uploadSub = upload$.subscribe(event => {
              if (event.type == HttpEventType.UploadProgress) {
                this.uploadProgress = Math.round(100 * (event.loaded / event.total));
              }
            })
        }
    }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }  */

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
   
  }
  name:string=""
  file:any;
getName(name:string){
this.name=name;
}
getFile(event:any){
this.file=event.target.files[0];
console.log('file',this.file);
}
submitData(){
  //create formdata object
  let formData =new FormData();
  formData.set("name",this.name)
  formData.set("file",this.file)


//submit this data in API
this.http.post('http://localhost:8080/employee/upload',FormData).subscribe(
  (_response)=>{ });

}
}
