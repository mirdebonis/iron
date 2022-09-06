import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MemoryCacheService } from './services/memory-cache.service';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

@NgModule({
  imports: [
    // JwBootstrapSwitchNg2Module,
    CommonModule,
    NgbModule,
    FormsModule
  ],
  providers: [ MemoryCacheService ]
})
export class CoreModule { }
