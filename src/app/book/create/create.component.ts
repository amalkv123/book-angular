import { Component,OnInit } from '@angular/core';
import { map } from "rxjs/operators";
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";

import { Router, ActivatedRoute } from "@angular/router";
import {  MenuItem,  } from "primeng/api";
import { BookService } from 'src/app/book.service';
import {trim} from 'lodash'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {



   title:any
   description:any
   pagecount:any   
   excerpt:any
   date!: Date; 
   bookform!:FormGroup
   processing = false;
   title_btn_state = "Add";
   submitted: boolean = false;
   form_data: any = {};      
   id = "";
   isAddMode: boolean = true;


   



   constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookservice:BookService
   

 ) { 
   this.id=this.router.getCurrentNavigation()?.extras.state?.['data']
   console.log("id by url",this.id)
 }


 ngOnInit(): void {



  this.bookform = this.formBuilder.group({
   // id:[null],
   title: [null, [Validators.required, Validators.maxLength(30)]],
   description: [null, [Validators.required, Validators.maxLength(50)]],
   pageCount: [null, [Validators.required, Validators.min(10), Validators.max(250)]],  
   excerpt: [null, Validators.maxLength(250)],   
   publishDate: [null, [Validators.required, this.validateDate]]

  });

//   this.id = this.route.snapshot.params["id"];
//   console.log('idddd: ', this.id)

  this.isAddMode = !this.id;
console.log("aaradhya",this.isAddMode)


  if (!this.isAddMode) {
     this.title_btn_state = "Update";
   //   console.log("hjgf", this.title_btn_state)



     this.bookservice.getbooks(this.id).pipe(
        map((resp: any) => {
         //   this.form_data.id = resp.id;
           this.form_data.title = resp.title;
           this.form_data.description = resp.description
           this.form_data.excerpt = resp.excerpt;
           this.form_data.pageCount = resp.pageCount;
           this.form_data.publishDate = new Date (resp.publishDate);

           this.bookform.patchValue(this.form_data);

           this.submitted = true;
           console.log("id man",this.form_data.id)
        })
     ).subscribe();

     this.title_btn_state = "Update";

  } else {
     this.title_btn_state = "Add";
  }
}

// Returns fields of form.

  

get f() {
   return this.bookform.controls;
 }







createbook() {

  this.processing = true;
  this.submitted = true;


  this.bookform.controls['title'].setValue(trim(this.bookform.controls['title'].value))
  this.bookform.controls['description'].setValue(trim(this.bookform.controls['description'].value))
  this.bookform.controls['excerpt'].setValue(trim(this.bookform.controls['excerpt'].value))

  if (this.bookform.invalid) {
     this.processing = false;
     return;
  }

  if (this.id != null ) {
         this.bookservice.updatebook(this.bookform.value,this.id).subscribe(response => {
         this.router.navigate(['/book/list']);
        });
     
  }

  else {

     this.bookservice.addbook(this.bookform.value).subscribe(response => {
        this.processing = false;
         console.log("erree",this.bookform.value)
        this.router.navigate(['/book/list']);
     }

     );


}

}


cancel2(){
   this.router.navigate(['/book/list']);
}

validateDate(control: AbstractControl): ValidationErrors | null {

   const selectedDate: Date = control.value;

   const currentDate: Date = new Date();




   if (selectedDate > currentDate) {

     return { futureDate: true };

   }

   return null;

 }

}