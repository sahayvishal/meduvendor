import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { EditBusinessModalComponent } from 'src/app/edit-business-modal/edit-business-modal.component';
import { ModalController } from '@ionic/angular';
import { trigger, transition, useAnimation } from '@angular/animations';
import { animate, style } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  animations: [
    trigger('swipeAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class Tab1Page implements OnInit {
  patientAddForm: FormGroup;
  showingOthers: boolean = false;
  showAddress: boolean = false;
  segment: string = 'default';
  loaded: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private router: Router
  ) {
    this.patientAddForm = this.formBuilder.group({
      patient_name: ['', [Validators.required]],
      patient_mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      patient_age: ['', []]
    });
  }

  ngOnInit() {
    this.loaded = true;
  }

  segmentChanged(event: CustomEvent) {
    this.segment = event.detail.value as string;
  }

  addCustomer() {
    this.navCtrl.navigateForward('/add');
  }

  addSupplier() {
    this.navCtrl.navigateForward('/supplier-add');
  }

  showOthers() {
    this.showAddress = false;
    this.showingOthers = true;
  }

  editMember(memberData: any) {
    localStorage.setItem('editMember', JSON.stringify(memberData));
    this.navCtrl.navigateForward('patient-add');
  }

  editAddress(addressData: any) {
    localStorage.setItem('editAddress', JSON.stringify(addressData));
    this.navCtrl.navigateForward('add-address');
  }

  changePage(url: string, type: string) {
    localStorage.removeItem(type);
    this.navCtrl.navigateForward(url);
  }

  async openEditModal() {
    const modal = await this.modalCtrl.create({
      component: EditBusinessModalComponent,
      componentProps: {
        currentBusinessName: 'Your Current Business Name',
      },
    });
    await modal.present();
  }
}
