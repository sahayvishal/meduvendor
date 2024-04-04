import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-edit-business-modal',
  templateUrl: './edit-business-modal.component.html',
  styleUrls: ['./edit-business-modal.component.scss'],
})
export class EditBusinessModalComponent implements OnInit {
  @Input() currentBusinessName: string | undefined;
  newBusinessName: string | undefined;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  saveChanges() {
    // Implement logic to save changes (e.g., update business name)
    // For example, you can emit an event or call a service to update the name
    // After saving changes, close the modal
    this.modalCtrl.dismiss();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
