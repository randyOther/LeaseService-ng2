export class userView
{
    userId:  number;
    email: string;
    lastLoginTime: string;
    lastLoginIP: string;
    status: string;
    phone: string;
    isDelete: boolean;
    createDate: string;
    modifyDate: string;
    createByUserId: number;
    modifyByUserId: number;
    role:role;
}

export class role
{
        userInfoId: 0;
        userId: 0;
        realName: string;
        nickName: string;
        idCardType: string;
        idCardNo: string;
        phone: string;
        address: string;
        tel: string;
        remark: string;
        birthDate: string;
        extendInfo: string;
        company: {
          companyId: 0;
          name: string;
          status: string;
          code: string;
          icon: string;
          link: string;
        }

}


