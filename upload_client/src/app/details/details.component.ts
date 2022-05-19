import { ExampleService } from './../services/example.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  productInfo: any;

  constructor(private _activatedRoute: ActivatedRoute, private _service:ExampleService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params)=>{
      let id = params.get('id');
      //Get product info --> call api
      // console.log(id);
      this.loadData(id);
    })
  }
  loadData(id:any){
    this._service.getProductInfo(id).subscribe({
      next: data => this.productInfo = data,
      error:error=>console.log(error)
    });
  }
}
