import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params)=>{
      let id = params.get('id');
      //Get product info --> call api
    })
  }

}
