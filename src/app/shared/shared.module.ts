import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NgbPopoverModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { RefreshPageComponent } from './refresh-page/refresh-page.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { NgSelectModule } from '@ng-select/ng-select';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { LoaderModule } from '../loader/loader.module';


const declarations = [
  DeleteItemComponent,
  RefreshPageComponent]

const imports = [
  LoaderModule,
  FontAwesomeModule,
  JwBootstrapSwitchNg2Module,
  FormsModule,
  CommonModule,
  NgbModule,
  NgbPopoverModule,
  NgSelectModule,
];

@NgModule({
  declarations,
  imports,
  exports: [...declarations, ...imports],
  providers: [DatePipe]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(far, fas, fab);
  }
}
