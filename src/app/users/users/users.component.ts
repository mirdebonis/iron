import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { UserContract } from '../contracts/user-contract';
import * as _lodash from 'lodash';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { HttpClient } from '@angular/common/http';
import { EditUserComponent } from '../edit-user/edit-user.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isBusy: boolean;
  isRefreshTable: boolean;

  pageOptions = [5, 10];
  pageSize = 10; // default pageSize
  page = 1; // initial page

  list: UserContract[] = [];
  filteredList: UserContract[] = [];
  filterValue: string;

  downloadJsonHref: any;
  isExportSelectedElement = false;
  pageYOffset: number;

  constructor(private modalService: NgbModal,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.isBusy = true;
    this.loadData();
  }

  loadData() {
    this.isRefreshTable = true;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(data => {
        this.list = data as unknown as UserContract[];
        this.filteredList = this.list;
        this.isBusy = this.isRefreshTable = false;
      });
  }

  countItems() {
    return this.filteredList.length;
  }

  refresh() {
    this.page = 1;
    this.loadData();
  }

  applyFilters() {
    if (!this.filterValue) {
      this.filteredList = this.list;
    } else {
      this.filteredList = _lodash.cloneDeep(this.list.filter(x => {
        return x.name && x.name.toLowerCase().includes(this.filterValue.toLowerCase())
          || x.username && x.username.toLowerCase().includes(this.filterValue.toLowerCase())
          || x.email && x.email.toLowerCase().includes(this.filterValue.toLowerCase())
          || x.website && x.website.toLowerCase().includes(this.filterValue.toLowerCase())
          || x.company.name && x.company.name.toLowerCase().includes(this.filterValue.toLowerCase())
      }));
    }
  }

  resetFilter() {
    this.filterValue = '';
    this.applyFilters();
  }

  // open edit modal
  editModal(index: number, isUpdate: boolean) {
    const options: NgbModalOptions = {};
    options.size = 'lg';
    options.backdrop = 'static';
    options.keyboard = false;
    const modalRef = this.modalService.open(EditUserComponent, options);
    modalRef.componentInstance.id = _lodash.cloneDeep(this.list[index].id);
    if (isUpdate) {
      modalRef.componentInstance.user = _lodash.cloneDeep(this.list[index]);
      modalRef.componentInstance.creationMode = false;
    }
    modalRef.result.then(
      result => {
        if (!isUpdate) {
          // this.list.push(result);
        }
        else {
          this.list[index] = result;
        }
      });
  }

  delete(index: number) {
    const options: NgbModalOptions = {};
    options.backdrop = 'static';
    options.keyboard = false;
    const modalRef = this.modalService.open(DeleteItemComponent, options);
    modalRef.componentInstance.title = 'User';
    modalRef.result.then(() => {

      this.httpClient.delete('https://jsonplaceholder.typicode.com/users/' + this.list[index].id)
        .subscribe(
          {
            next: (data) => {
              console.log('yes')
            },
            error: () => {
              console.log('no')
            },
          }
        )
    });
  }

  // for display-toolbar component
  displayPageSize(pSize) {
    this.page = 1;
    this.pageSize = pSize;
  }

  changeFilters(newFilters) {
    this.filterValue = newFilters;
    this.applyFilters();
  }

  setPageIndex(pageIndex) {
    if (this.isBusy) {
      return;
    }
    this.page = pageIndex;
  }
}
