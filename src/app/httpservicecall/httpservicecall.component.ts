import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Items } from '../Model/items';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-httpservicecall',
  templateUrl: './httpservicecall.component.html',
  styleUrls: ['./httpservicecall.component.css']
})
export class HttpservicecallComponent implements OnInit {
  items: Items[];
  constructor(private _shoppingItems: DataService) { }

  ngOnInit() {
    this.getItems();
    console.log(this.items);
    // this.addItems(frm);  
  }

  getItems() {
    this._shoppingItems.getshoppingitems().subscribe(items => { this.items = <Items[]>items; console.log(this.items); });
  }
  addItems(frm: NgForm): void {
    console.log(frm.value)
    let newitem: Items = {
      itemname: frm.value.itemname,
      itemquantity: frm.value.itemquantity
    }
    this._shoppingItems.addshoppingitems(newitem).subscribe(items => { this.getItems(); })
  }
  
  editItems(frm: NgForm): void {
    console.log(frm.value)
    let newitem: Items = {
      id:this.items._id,
      itemname: frm.value.itemname,
      itemquantity: frm.value.itemquantity
    }
    this._shoppingItems.addshoppingitems(newitem).subscribe(items => { this.getItems(); })
  }
  
  deleteItems(frm: NgForm): void {
    console.log(frm.value)
    let newitem: Items = {
      itemname: frm.value.itemname,
      itemquantity: frm.value.itemquantity
    }
    this._shoppingItems.addshoppingitems(newitem).subscribe(items => { this.getItems(); })
  }
  
}
