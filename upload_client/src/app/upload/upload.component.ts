import { ExampleService } from './../services/example.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
	file:any = null;
	products:any;
public formUpload = this._formBuilder.group({
	name:['',Validators.compose([Validators.required,Validators.minLength(3)])],
	//name:['',[Validators.required,Validators.minLength(3)]],
	file:[''],
	price:['']
})
  constructor(private _formBuilder: FormBuilder, private _service:ExampleService, private _router: Router) { }

  ngOnInit(): void {
	//   this._service.getAllProducts().subscribe({
	// 		  next: data=>this.products=data,
	// 		  error: error=>console.log(error)
	// 	  })
	this.getData();
  }
  getData(){
	    this._service.getAllProducts().subscribe({
			  next: data=>this.products=data,
			  error: error=>console.log(error)
		  })
  }
  onChange(event:any){
	if(event.target.files.length>0){
		this.file=event.target.files[0];
		/* console.log("File info: ",event.target.files[0]) */
	}else{
		this.file=null;
	}
}
  onSubmit(data:any){
	/* console.log("Data:",data); */
	let formData=new FormData();
	formData.append("name",data.name);
	formData.append("file",this.file);
	formData.append("price",data.price);
	// console.log("FormData:",formData);
	// for(let pair of formData.entries()){
	// 	//cấu hình entries trong tsconfig.json
	// 	console.log(pair[0],pair[1]);
	// }
	
	//Send data to server
	this._service.uploadData(formData).subscribe({
		next: res=>{
			console.log(res);
			this.getData();
		},
		error:err=>{
			console.log(err.message);
		}
	})


}
onSelect(id:any){
	this._router.navigate(['/details',id])
}
  get nameInput(){
	return this.formUpload.controls['name'];
}
}