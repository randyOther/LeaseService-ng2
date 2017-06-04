export class RoleDTO
{
    name: string;
    code: string;
    departmentId: string;
    permissions:PermissionDTO[];
}

export class PermissionDTO{
      name: string;
      authorityId: string;
      status: string;
      porityLevel: string;
      permissionName: string;

}