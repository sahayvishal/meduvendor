import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page {

  segmentModel: string = 'sale'; // Initialize segmentModel with a default value

  constructor() { }

  addBill() {
    // Implement your add bill functionality here
    console.log('Add bill clicked');
  }

  addPurchase() {
    // Implement your add purchase functionality here
    console.log('Add purchase clicked');
  }

  addExpense() {
    // Implement your add expense functionality here
    console.log('Add expense clicked');
  }

}
