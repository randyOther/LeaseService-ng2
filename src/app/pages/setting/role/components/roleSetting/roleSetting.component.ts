import { Component } from "@angular/core";
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { RoleSettingService } from "./roleSetting.service";
import { LocalDataSource } from "ng2-smart-table";
import { DefaultModal } from '../../../../common/modals/default-modal.component'
@Component({
    selector:'user-role-setting',
    templateUrl:'roleSetting.html',
    styleUrls:['./roleSetting.scss']
})
export class RoleSettingComponent{
       settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      firstName: {
        title: 'First Name',
        type: 'string'
      },
      lastName: {
        title: 'Last Name',
        type: 'string'
      },
      username: {
        title: 'Username',
        type: 'string'
      },
      email: {
        title: 'E-mail',
        type: 'string'
      },
      age: {
        title: 'Age',
        type: 'number'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service:RoleSettingService,private modalService:NgbModal){
      this.service.getData().then((data)=>this.source.load
      (data));
  }

  onDeleteConfirm(event):void{
    const activeModal = this.modalService.open(DefaultModal,{size:'sm'});
     activeModal.componentInstance.modalHeader='Warning';
     activeModal.componentInstance.modalContent="Are you sure want to delete";
     activeModal.result.then((result)=>{
        event.confirm.resolve();
     },(reason)=>{
      event.confirm.reject();
     });
  }
}

