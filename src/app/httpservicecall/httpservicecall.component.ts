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
  toggleForm: Boolean = false;
  selectedItem: Items;
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


  editForm(editfrm) {
    let newItem: Items = {
      id: this.selectedItem.id,
      itemname: editfrm.value.itemname,
      itemquantity: editfrm.value.itemquantity,
      //itemboughts: this.selectedItem.itemboughts

    }
    console.log("New Itam Object Value"+newItem);
    this._shoppingItems.updateshoppingitems(newItem)
      .subscribe(result => {
        console.log('original item to be updated with old values' + result);
        this.getItems();
        this.toggleForm = !this.toggleForm;
      })

  }
  showEditform(Item) {
    this.selectedItem = Item;

    this.toggleForm = !this.toggleForm;

  }


  //updateItemcheckbox(item) {
    //item.itemboughts = !item.itemboughts;
    //this._shoppingItems.updateshoppingitems(item)
   //   .subscribe(result => {
       // console.log('Original CheckBox values' + result.itemboughts);
        // item.getItems();
    //  })
  //}




  deleteItem(id): void {
    // let newitem: Items = {
    //   id:id
    // }
    this._shoppingItems.deleteshoppingitems(id).subscribe(items => {
      console.log(items);

      for (var i = 0; i < this.items.length; i++) {
        if (id == this.items[i].id) {
          this.items.splice(i, 1);
        }
      }
    }
    )
  }
}
