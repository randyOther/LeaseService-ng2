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

    roles:any[];
    departments:any[];
    settings={};
  source: LocalDataSource = new LocalDataSource();

  constructor(protected service:RoleSettingService,private modalService:NgbModal){
       this.initSettings();
       this.service.getData().then((data)=>{
        this.source.load(data);
      this.source.setPaging(5,5,false);
    });

  }

  private initSettings(){
    this.departments=[{value:'1',title:'XPG'},{value:'2',title:'AVA'}];
    this.roles=[{value:'1',title:'管理员'},{value:'2',title:'普通用户'},{value:'3',title:'合作伙伴'}];
    this.settings = {
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
      department: {
        title: '部门',
        type: 'html',
        editor:{
          type:'list',
          config:{
            list:this.departments
          }
        }
      },
      name: {
        title: '角色名称',
        type: 'html',
        editor:{
          type:'list',
          config:{
            list:this.roles 
          }
        }
      },
      createDate: {
        title: '创建时间',
        type: 'string'
      },
      modifyDate: {
        title: '更新时间',
        type: 'string',
      }
    },
    // hideHeader:true
    hideSubHeader:true
  };
}

//customer https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/custom-edit-view/custom-editor.component.ts#L14
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

