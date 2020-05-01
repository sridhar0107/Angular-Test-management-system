import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  updatetest: Test;
  constructor(private httpService: HttpClient) { }
  public getTest() {
    console.log("ins service get test");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Test>("http://localhost:9000/test/testdetails");
  }

  public addTest(addtest: Test) {
    console.log("ins service add");
    console.log(addtest);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:9000/test/addTest", addtest,  { headers, responseType: 'text'});
  }
  
  public update(updatetest: Test) {
    this.updatetest = updatetest;
  }
  public updateMethod() {
    return this.updatetest;
  }
  public onUpdate(updatetest: Test) {
    console.log("ins service update");
    console.log(this.updatetest);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:9000/test/updateTest", updatetest,  { headers, responseType: 'text'});
  }
  delete(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:9000/test/deleteTest/" + id,  { headers, responseType: 'text'});
  }

}
export class Test {
  id: number;
  duration:string;
  title: string;
  totalmarks: number;
  starttime: string;
  endtime: string;
}