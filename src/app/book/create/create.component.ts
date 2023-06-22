import { Component,OnInit } from '@angular/core';
import { map } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Router, ActivatedRoute } from "@angular/router";
import {  MenuItem, MessageService } from "primeng/api";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
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
    private messageService: MessageService,

 ) { }


 ngOnInit(): void {


  this.home = { icon: 'pi pi-home', routerLink: '/' };

  this.items = [
     {
        label: "Settings",
        url: "#/masters/clients/list",
        target: '_self'
     },
     { label: 'Visa Application', routerLink: '/' },
     { label: 'Business Rules ', routerLink: '/' },
     { label: 'Add/Edit Business Rules ', routerLink: '/' },

  ];

  // Form builder initialization.
  this.businessForm = this.formBuilder.group({
     business_rule_key: [null],
     code: [null, Validators.required],
     title: [null, Validators.required],
     description: [null, Validators.required],
     status: ["1", Validators.required],
     rule_json: [{}, Validators.required]

  });

  // Set 'isAddMode' variable to true or false if id is present.
  this.id = this.route.snapshot.params["id"];
  console.log('idddd: ', this.id)
  this.isAddMode = !this.id;



  // this.countryService.getCountries().pipe(
  //    map((resp:any) => {
  //       this.dropdownCountry = resp["data"];
  //    })
  // ).subscribe();

  if (!this.isAddMode) {
     this.title_btn_state = "Update";
     console.log("hjgf", this.title_btn_state)



    //  this.businessrulesService.getruleDetails(this.id).pipe(
    //     map((resp: any) => {
    //        this.form_data.business_rule_key = resp['payload'].business_rule_key;
    //        this.form_data.code = resp['payload'].code;
    //        this.form_data.title = resp['payload'].title;
    //        this.form_data.description = resp['payload'].description;
    //        this.form_data.status = resp['payload'].status;
    //        this.businessForm.patchValue(this.form_data);

    //        this.submitted = true;
    //     })
    //  ).subscribe();

     let clientId = localStorage.getItem('client_id');
     let clientName = localStorage.getItem('rule');


     this.items.push();
  } else {
     this.title_btn_state = "Add";
     this.items.push();
  }
}

// Returns fields of form.
get f() {
  return this.businessForm.controls;
}









// Calls addClient or updateClient API based on the form.
add_update_client() {
  this.processing = true;
  this.submitted = true;

  if (this.businessForm.invalid) {
     this.processing = false;
     return;
  }

  let url = window.location.hash.slice(1);
  //   console.log("url==>",url)
  //   this.businessForm.get('rules_code')?.enable();


  const url1 = this.router.url;
  console.log("url is:", url1)
  // if (this.businessForm.get('business_rule_key')?.value != null) & (url.includes('clone')){






  if (this.businessForm.get('business_rule_key')?.value != null ) {
     if (url.includes('clone')) {
        // console.log("inside clone")

        // this.businessrulesService.getclone(this.id).pipe(
        //    map((resp: any) => {
        //       this.form_data.business_rule_key = resp['payload'].business_rule_key;
        //       this.form_data.code = resp['payload'].code;
        //       this.form_data.title = resp['payload'].title;
        //       this.form_data.description = resp['payload'].description;
        //       this.form_data.status = resp['payload'].status;
        //       this.businessForm.patchValue(this.form_data);

        //       this.submitted = true;
        //    })
        // ).subscribe();

        let clientId = localStorage.getItem('client_id');
        let clientName = localStorage.getItem('rule');


        this.items.push();

        console.log("inside clone last")

        console.log("amalm", this.businessForm.value)

        // this.businessrulesService.updaterule(this.businessForm.value).subscribe(response => {
        //    this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Business Details updated successfully' });
        //    this.processing = false;
        //    this.router.navigate(['/masters/projects/businesslist']);

        // }, error => {
        //    this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.errors[0] });
        //    this.processing = false;
        // });

        // this.router.navigate(['/masters/projects/businesslist']);

     }

     else {
        // console.log("amalm", this.businessForm.value)

        // this.businessrulesService.updaterule(this.businessForm.value).subscribe(response => {
        //    this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Business Details updated successfully' });
        //    this.processing = false;
        //    this.router.navigate(['/masters/projects/businesslist']);

        // }, error => {
        //    this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.errors[0] });
        //    this.processing = false;
        // });

     }
  }


  else {



    //  this.businessrulesService.addrules(this.businessForm.value).subscribe(response => {
    //     this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Business details added successfully' });
    //     this.processing = false;

    //     this.businessForm.controls["c_key"].setValue(response.payload._key);
    //     //   this.title_btn_state = "Update";

    //     this.router.navigate(['/masters/projects/businesslist']);

    //  }

    //  );

    //  this.router.navigate(['/masters/projects/businesslist']);

  }
}











}




