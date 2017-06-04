import { Component } from "@angular/core";
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DefaultModal } from '../../../../common/modals/default-modal.component';
import { RoleSettingService } from './roleSetting.service';
import { LocalDataSource } from 'ng2-smart-table';
import { RoleDTO } from '../../../../../model/account/roleDTO';
import { ReturnModel } from '../../../../../model/account/baseModel';

@Component({
    selector:'user-role-setting',
    templateUrl:'roleSetting.html',
    styleUrls:['./roleSetting.scss']
})
export class RoleSettingComponent{

    roles:any[];
    departments:any[];
    settings={};
    // public roleInfo:RoleDTO;
  source: LocalDataSource = new LocalDataSource();

  constructor(protected service:RoleSettingService,private modalService:NgbModal){
      // this.roleInfo={code:'',name:''};
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
      confirmCreate: true
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
        },
      valuePrepareFunction:(cell,row)=>{ return this.getDepartmentName(cell);}
      },
      name: {
        title: '角色名称',
        type: 'string'
      },
      createDate: {
        title: '创建时间',
        type: 'string',
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

getRoleName(cellValue):string{
  for(let index=0;index<this.roles.length;index++){
    if(this.roles[index].value===cellValue)
       return this.roles[index].title;
  }
  return '';
}
onCreateConfirm(event):void{
  console.log(event);
//  let roleInfo:RoleDTO={ name:" ", code:" ",departmentId:" "};
  // let roleInfo:RoleDTO={ name:'', code:'',departmentId:'',permissions:{name:'',authorityId:'',status:'',porityLevel:'',permissionName:''}};

// this.roleInfo.name=event.newData.name;
// this.roleInfo.code='';
// this.roleInfo.departmentId=event.newData.department;

// roleInfo.permissions.name='test';
// roleInfo.permissions.authorityId='1';
// roleInfo.permissions.status='1';
// roleInfo.permissions.porityLevel='4';
// roleInfo.permissions.permissionName="testPermission";
  let roleInfo:RoleDTO={ name:event.newData.name as string, code:'',departmentId:event.newData.department as string,permissions:[{name:'test',authorityId:'4',status:'o',porityLevel:'1',permissionName:'testPermission'}]};
 console.log(roleInfo);
  this.service.addRole(roleInfo).subscribe(result=>{
    if(result.success){
      event.comfirm.reslove();   
    }
  });
}
setRoles():any[]{
  return [];
}
getDepartmentName(cellValue):string{
    for(let index=0;index<this.departments.length;index++){
    if(this.departments[index].value===cellValue)
       return this.departments[index].title;
  }
  return '';
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

