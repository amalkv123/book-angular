import { Component } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Subject } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  constructor(private bookserve:BookService,
              private route:ActivatedRoute,
              private router: Router,

    ){}
    bookarray:any=[]
    book_list: any[] = [];
    claims: any[] = [];

    
    ngOnInit(){

     
      this.bookserve.getbook().subscribe((res)=>{
        console.log({res})
        this.bookarray=res
        console.log("ab",this.bookarray)

      }
      );
    };

    create(){
      this.router.navigate(["book/create"]);

    }

    deletedata(key:any){
      this.bookserve.deletebook(key).subscribe((res)=>{
        console.log("response",res)
      })   
      }


      edit(key:any){
        this.router.navigate(["book/edit/"+key])
        console.log("response")
      }


	onGlobalFilter(table: Table, event: Event) {
		table.filterGlobal((event.target as HTMLInputElement).value, "contains");
	}
  onSort(event: any) {
    const { field, order } = event;
    if (field) {
      this.claims.sort((claim1, claim2) => {
        const value1 = this.getPropertyValue(claim1, field);
        const value2 = this.getPropertyValue(claim2, field);
        return this.compareValues(value1, value2, order);
      });
    }
  }

  compareValues(value1: any, value2: any, order: number): number {
    return order * (value1.localeCompare(value2));
  }

  getPropertyValue(obj: any, field: string): any {
    return obj[field];
  }
    }


