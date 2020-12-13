import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
 
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
msg="";
  constructor(private incomingrouter:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.msg = (this.incomingrouter.snapshot.paramMap.get("p2"));
  }
 
}
