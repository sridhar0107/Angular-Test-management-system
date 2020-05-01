import { Component, OnInit } from '@angular/core';
import { MyserviceService, Test } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
message: string;


constructor(private myservice: MyserviceService,private router: Router) { }

ngOnInit(): void {
}
onSubmit(addtest:Test):any{
  console.log(addtest);
   this.myservice.addTest(addtest).subscribe(data => {
    this.message=data});
}

}