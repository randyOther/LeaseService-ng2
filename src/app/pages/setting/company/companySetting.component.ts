import { Component } from "@angular/core";
import { NgbModal,NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { LocalDataSource } from "ng2-smart-table";
import { CompanySettingService } from "./companySetting.service";
import { DefaultModal } from "../../common/modals/default-modal.component";

@Component({
    selector:'company-setting',
    templateUrl:'companySetting.html',
    styleUrls:['./companySetting.scss']
})

export class CompanySettingComponent{
      departments:any[];
    companySettings={};
    
    constructor(private companyService:CompanySettingService,private modalServie:NgbModal){
        this.initSettings();
    }

    initSettings(){

        this.companySettings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave:true
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      department: {
        title: '部门名称',
        type: 'string',
    },
    createUser:{
        title:'创建人',
        type:'string',
        editable:false
    },
      createDate: {
        title: '创建时间',
        type: 'string',
        editable:false
      },
      updateUser:{
          title:'更新人',
          type:'string',
          editable:false
      },
      modifyDate: {
        title: '更新时间',
        type: 'string',
        editable:false
      }
    },
    // hideHeader:true
    // hideSubHeader:true,
    actions:{
      position:'right'
    }
  };
}
getDepartmentName(cellValue):string{
    for(let index=0;index<this.departments.length;index++){
    if(this.departments[index].value===cellValue)
       return this.departments[index].title;
  }
  return '';
}

onCreateConfirm(event):any{
    // this.companyService.addCompany()
    console.log(event);
    event.confirm.resolve();
}

onDeleteConfirm(event):void{
    console.log(event);
}


onEditConfirm(event):void{
    console.log(event);
    event.confirm.resolve();
}
}