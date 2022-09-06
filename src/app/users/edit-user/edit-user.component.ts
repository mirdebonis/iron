import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/core/modal/modal.component';
import { UserContract } from '../contracts/user-contract';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent extends ModalComponent implements OnInit {

  isBusy: boolean;
  submitIsLoading: boolean;
  user: UserContract = {} as UserContract;
  creationMode = true;

  constructor(activeModal: NgbActiveModal) {
    super(activeModal);
  }

  ngOnInit(): void {
    if (this.creationMode) {
      this.confirmButtonTxt = 'Create';
    }
    else {
      this.confirmButtonTxt = 'Update';
    }
    super.ngOnInit();
  }

  confirmModal() {
    this._activeModal.close(this.user);
  }
}
