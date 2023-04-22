import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ManageSupplier } from './model/manage-supplier';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManageSupplierServiceService {

  baseApiUrl:string='https://localhost:44356/OpenAPI'
    constructor(private http:HttpClient){}
      getAllManageSuppliers():Observable<ManageSupplier[]>{
        return this.http.get<ManageSupplier[]>(this.baseApiUrl +'/api/Suppliers');
    }
 } 

