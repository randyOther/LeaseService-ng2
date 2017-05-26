import {Injectable} from '@angular/core';

@Injectable()
export class RoleSettingService {

  smartTableData = [
    {
      department: '1',
      name: '1',
      createDate: '2017.05.26',
      modifyDate: '2017.05.26',
    },
    {
      department: '1',
      name: '1',
      createDate: '2017.05.26',
      modifyDate: '2017.05.26',
    },
    {
     department: '1',
      name: '1',
      createDate: '2017.05.26',
      modifyDate: '2017.05.26',
    },
    {
      department: '1',
      name: '1',
      createDate: '2017.05.26',
      modifyDate: '2017.05.26',
    },
    {
       department: '1',
      name: '1',
      createDate: '2017.05.26',
      modifyDate: '2017.05.26',
    },
    {
       department: '1',
      name: '1',
      createDate: '2017.05.26',
      modifyDate: '2017.05.26',
    },
    {
      department: '2',
      name: '1',
      createDate: '2017.05.26',
      modifyDate: '2017.05.26',
    },
    {
       department: '1',
      name: '1',
      createDate: '2017.05.26',
      modifyDate: '2017.05.26',
    },
    {
      department: '1',
      name: '1',
      createDate: '2017.05.26',
      modifyDate: '2017.05.26',
    },
    {
   department: '1',
      name: '1',
      createDate: '2017.05.26',
      modifyDate: '2017.05.26',
    },
    {
      department: '2',
      name: '1',
      createDate: '2017.05.26',
      modifyDate: '2017.05.26',
    },
    {
       department: '2',
      name: '1',
      createDate: '2017.05.26',
      modifyDate: '2017.05.26',
    },
    {
       department: '2',
      name: '1',
      createDate: '2017.05.26',
      modifyDate: '2017.05.26',
    },
    {
       department: '2',
      name: '1',
      createDate: '2017.05.26',
      modifyDate: '2017.05.26',
    },
    {
     department: '1',
      name: '1',
      createDate: '2017.05.26',
      modifyDate: '2017.05.26',
    }
  ];

  metricsTableData = [
    {
      image: 'app/browsers/chrome.svg',
      browser: 'Google Chrome',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/firefox.svg',
      browser: 'Mozilla Firefox',
      visits: '7,873',
      isVisitsUp: true,
      purchases: '3,031',
      isPurchasesUp: false,
      percent: '28%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/ie.svg',
      browser: 'Internet Explorer',
      visits: '5,890',
      isVisitsUp: false,
      purchases: '2,102',
      isPurchasesUp: false,
      percent: '17%',
      isPercentUp: false
    },
    {
      image: 'app/browsers/safari.svg',
      browser: 'Safari',
      visits: '4,001',
      isVisitsUp: false,
      purchases: '1,001',
      isPurchasesUp: false,
      percent: '14%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/opera.svg',
      browser: 'Opera',
      visits: '1,833',
      isVisitsUp: true,
      purchases: '83',
      isPurchasesUp: true,
      percent: '5%',
      isPercentUp: false
    }
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.smartTableData);
      }, 2000);
    });
  }
}
