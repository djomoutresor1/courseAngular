import { Component, OnInit } from '@angular/core';
import { HelloServiceService } from '../hello-service.service';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  records = {};
  recordData = {};


  constructor(private myFirstService: HelloServiceService){

  }

  ngOnInit(): void {
    this.records = this.myFirstService.getData();
    this.myFirstService.getDataPlaceholder().subscribe(data =>{
    this.recordData = data
      console.log("we got data ", data )
    })
  }

}
