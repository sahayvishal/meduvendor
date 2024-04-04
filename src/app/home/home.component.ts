import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditBusinessModalComponent } from '../edit-business-modal/edit-business-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  async openEditModal() {
    const modal = await this.modalCtrl.create({
      component: EditBusinessModalComponent,
      componentProps: {
        currentBusinessName: 'Your Current Business Name', // Pass the current business name here
      },
    });
    await modal.present();
  }

}
