import { OnInit, Input, Directive } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Directive()
export abstract class ModalComponent implements OnInit {

  @Input()
  confirmButtonTxt: string = undefined;

  // abort buttons text
  @Input()
  abortButtonTxt: string = undefined;

  @Input()
  showAbortButton: boolean = true;

  @Input()
  showOkButton: boolean = true;

  // modal title text
  @Input()
  title: string = undefined;

  // modal message text
  @Input()
  message: string = undefined;

  /**
  * costruttore
  * @param _activeModal componente modale
  */
  constructor(protected _activeModal: NgbActiveModal) {

  }

  /**
  * Inizializzazione
  */
  ngOnInit(): void {
    // se non è stato valorizzato il bottone di conferma
    if (!this.confirmButtonTxt) {
      this.confirmButtonTxt = 'Save';
    }
    // se non è stato valorizzato il bottone di annullamento
    if (!this.abortButtonTxt) {
      this.abortButtonTxt = 'Cancel';
    }
  }

  /**
  * pressione del bottone di conferma
  * deve essere implementato con un comportamento legato al contesto di utilizzo
  */
  abstract confirmModal();

  /**
  * pressione del bottone di anullamneto
  */
  public dismissModal(): void {
    // close with abort modal
    this._activeModal.dismiss(false);
  }
}
