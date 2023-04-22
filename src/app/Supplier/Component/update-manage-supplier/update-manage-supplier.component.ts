import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ManageSupplierServiceService } from 'src/app/manage-supplier-service.service';
import { ManageSupplier } from 'src/app/model/manage-supplier';

@Component({
  selector: 'app-update-manage-supplier',
  templateUrl: './update-manage-supplier.component.html',
  styleUrls: ['./update-manage-supplier.component.css']
})
export class UpdateManageSupplierComponent implements OnInit {
  
  
  // @ViewChild('checkbox1') checkBox:ElementRef | any;
  // isSlide:string='off';
  constructor(private fb : FormBuilder ,public MngSupplier:ManageSupplierServiceService) { }

  ngOnInit():void{
   
  }   
}







