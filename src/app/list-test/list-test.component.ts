import { Component, OnInit } from '@angular/core';
import { Test, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {

  message: string;
  test: Test[];
  id:BigInteger
  constructor(private myservice: MyserviceService, private router: Router) {
  }

  ngOnInit(): any {
    this.myservice.getTest().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.test = response;
  }
  update(updatetest: Test) {
    this.myservice.update(updatetest);
    this.router.navigate(['/updatetest']); //updating the test
  }
  delete(deletetest: Test): any {
    this.myservice.delete(deletetest.id).subscribe(data => {
      this.message = data
    });
    
    this.router.navigate(['/listtest']);
  }
}