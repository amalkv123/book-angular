import { Component } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Subject } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
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

    
    ngOnInit(){

     
      this.bookserve.getbook().subscribe((res)=>{
        console.log({res})
        this.bookarray=res
        console.log("ab",this.bookarray)

      }
      );
    };

    create(){
      console.log("agi",)
      this.router.navigate(["/book/create"]);

    }

    deletedata(key:any){
      this.bookserve.deletebook(key).subscribe((res)=>{
        console.log("response",res)
        
        

      })
    
        // this.subscriptions.add(
        //   this.businessrulesService.deleteClient(business_rule_key).pipe(
        //     map((resp:any) => {
        //     this.toastMsg.showToast(ToastMsgType.success, "Success", "Business Rule deleted successfully");
        //     this.get_projects();
        //     })
        //   ).subscribe()
        //   );
    
        
      }
          
    }


