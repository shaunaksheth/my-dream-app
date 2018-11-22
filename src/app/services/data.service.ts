import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getshoppingitems()
  {
    //console.log(this.http.get('http://localhost:3000/items'));
    return this.http.get('http://localhost:3000/items');
    
    }
    
  addshoppingitems(additem)
  {
    //console.log(this.http.get('http://localhost:3000/items'));
    return this.http.post('http://localhost:3000/items',additem);
    
    }
    updateshoppingitems(additem)
    {
      //console.log(this.http.get('http://localhost:3000/items'));
      return this.http.put('http://localhost:3000/items/'+additem.id,additem);
      
      }
      deleteshoppingitems(id)
    {
      //console.log(this.http.get('http://localhost:3000/items'));
      return this.http.delete('http://localhost:3000/items/'+id);
      
      }
  }
