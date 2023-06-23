import { Component,OnInit } from '@angular/core';
import { map } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Router, ActivatedRoute } from "@angular/router";
import {  MenuItem,  } from "primeng/api";
import { BookService } from 'src/app/book.service';


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
   businessForm!: FormGroup;
   clients_list: any[] = [];
   submitted: boolean = false;
   form_data: any = {};      
   id = "";
   isAddMode: boolean = true;
   client_count: any = 0;

   dropdownCountry = [];


   items: MenuItem[] = [];
   home!: MenuItem;

   dropdownPartner: any = [];


   constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookservice:BookService
   

 ) { }


 ngOnInit(): void {



  this.bookform = this.formBuilder.group({
     id: [null],
     title: [null, Validators.required],
     description: [null, Validators.required],
     pagecount: [null, Validators.required],
     excerpt: [null, Validators.required],
     date: [null, Validators.required],


  });

  // Set 'isAddMode' variable to true or false if id is present.
  this.id = this.route.snapshot.params["id"];
  console.log('idddd: ', this.id)
  this.isAddMode = !this.id;



  if (!this.isAddMode) {
     this.title_btn_state = "Update";
   //   console.log("hjgf", this.title_btn_state)



     this.bookservice.getbooks(this.id).pipe(
        map((resp: any) => {
           this.form_data.id = resp.id;
           this.form_data.title = resp.title;
           this.form_data.description = resp.description;
           this.form_data.excerpt = resp.excerpt;
           this.form_data.pagecount = resp.pageCount;
           this.form_data.date = new Date (resp.publishDate);

           this.bookform.patchValue(this.form_data);

           this.submitted = true;
        })
     ).subscribe();

     this.items.push();
     this.title_btn_state = "Update";

  } else {
     this.title_btn_state = "Add";
     this.items.push();
  }
}

// Returns fields of form.

  

get f() {
   return this.bookform.controls;
 }







// Calls addClient or updateClient API based on the form.
createbook() {

  this.processing = true;
  this.submitted = true;

  if (this.bookform.invalid) {
     this.processing = false;
     return;
  }






  if (this.bookform.get('id')?.value != null ) {

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

   //   this.router.navigate(['/masters/projects/businesslist']);

}

}
}

