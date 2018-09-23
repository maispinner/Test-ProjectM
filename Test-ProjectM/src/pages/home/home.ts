import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../home/home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [
    {id: 1, name: "MenuPage", address: "Bankok",},
  ];
  constructor(public navCtrl: NavController) {

  }
  go2Detail(){
    this.navCtrl.push(MenuPage);
  }

  itemSelected(item){//MenuPage
    console.log("Clicked items;" + item);//Clicked items; HomePage
    this.navCtrl.push(HomePage, {myItem: item});
    }
  
}

