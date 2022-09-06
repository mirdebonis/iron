import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/core/modal/modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-refresh-page',
  templateUrl: './refresh-page.component.html',
  styleUrls: ['./refresh-page.component.css']
})
export class RefreshPageComponent extends ModalComponent implements OnInit {

  confirmButtonTxt = 'Yes';
  abortButtonTxt = 'No';
  isBusy: boolean;

  constructor(
    activeModal: NgbActiveModal) {
    super(activeModal);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  confirmModal() {
    this._activeModal.close();
  }
}