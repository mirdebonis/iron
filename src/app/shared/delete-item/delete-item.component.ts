import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/core/modal/modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent extends ModalComponent implements OnInit {

  confirmButtonTxt = 'Yes';
  abortButtonTxt = 'No';
  submitIsLoading: boolean;
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
