import {Component, OnInit} from '@angular/core';
import * as Chartist from 'chartist';
import {EmployeeService} from '../employees/shared/employee.service';
import {Employee} from '../employees/shared/employee.model';
import {AngularFireDatabase} from 'angularfire2/database';
import {AuthService} from './../auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.css']
})
export class DashboardComponent implements OnInit {
  employeeList: Employee[];
  selecteduser;
  public users;

    dataRFI: any = [];
    dataAO: any = [];
    dataLoaded = false;

 //Chart
 view: any[] = [500, 300];
 showLegend = true;

 colorScheme = {
   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
 };
 showLabels = true;
 explodeSlices = false;
 doughnut = false;
  constructor( private employeeService: EmployeeService,
    private auth: AuthService,
    private db: AngularFireDatabase,
  ) { }
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if (data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if (data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      };

      const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      };

      const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      const dataEmailsSubscriptionChart = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      const optionsEmailsSubscriptionChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      const responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      const emailsSubscriptionChart = new Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(emailsSubscriptionChart);

      this.loadUsers();
      this.loadEmployeeData();
  }
  loadEmployeeData(uid = null) {
    const x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        const y: any = element.payload.toJSON();
        const uuid = uid ? uid : this.auth.loggedInUser.uid;
        if (y.creatorUid === uuid) {
          y['$key'] = element.key;
          this.employeeList.push(y as Employee);
        }
      });
        this.convertToChartData();
    });
  }

  loadUsers() {
    const u = this.db.list('users/');
    u.snapshotChanges().subscribe(item => {
      this.users = [];
      item.forEach(element => {
        const y: any = element.payload.toJSON();
        y['$key'] = element.key;
        this.users.push(y);
      });
    });
  }

  onUserSelected(data) {
    const uid = data.value['$key'];
    this.loadEmployeeData(uid);
  }

  isAdmin(): boolean {
    if (!this.auth.loggedInUser) {
      return false;
    }
    return ( 'isAdmin' in this.auth.loggedInUser && this.auth.loggedInUser['isAdmin']);
  }



  convertToChartData() {
      let sumAO = 0;
      let sumRFI = 0;
      this.employeeList.forEach(employee => {
          sumAO = +sumAO + +employee.numAo;
          sumRFI = +sumRFI + +employee.numRfi;
      });

      this.employeeList.forEach(employee => {
            const RFIEntry = {
              Browser: employee.situationRfi, Share: parseFloat((employee.numRfi * 100 / sumRFI).toFixed(2))
            };
            const AOEntry = {
              Browser: employee.situationAo, Share: parseFloat((employee.numAo * 100 / sumAO).toFixed(2))
            };
            this.dataRFI.push(RFIEntry);
            this.dataAO.push(AOEntry);
      });
      this.dataLoaded = true;
  }

  // Radar
  public radarChartLabels: string[] = ['annulé', 'en-cours-de-preparation', 'publié', 'à ouvrir', 'attente evaluation RFI', 'attente CGAO', 'attente GEL', 'attente lancement AO', 'attente avis technique', 'étude commercial', 'attente CAD', 'attente AE', 'attente validation contrat-Attribué', 'Soldé'];
  emp: Employee;
  public radarChartData: any = [
    {data: [this.employeeService.selectedEmployee.numRfi, this.employeeService.selectedEmployee.situationRfi], label: 'RfI'},
    {data: [this.employeeService.selectedEmployee.numAo, this.employeeService.selectedEmployee.situationAo], label: 'AO'}
  ];
  public radarChartType = 'radar';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  dataRFICounter: any =
  [
      { Browser: 'annulé', Share: 45.6 },
      { Browser: 'en-cours-de-preparation', Share: 24.6 },
      { Browser: 'publié', Share: 20.4 },
      { Browser: 'à ouvrir', Share: 5.1 },
      { Browser: 'attente evaluation RFI', Share: 1.3 },
      { Browser: 'attente CGAO', Share: 3.0 },
      { Browser: 'attente GEL', Share: 1.3 },
      { Browser: 'attente lancement AO', Share: 3.0 }
  ];
  dataAOCounter: any =
  [
      { Browser: 'annulé', Share: 34.1 },
      { Browser: 'publié', Share: 20.3 },
      { Browser: 'à ouvrir', Share: 18.3 },
      { Browser: 'attente avis technique', Share: 17.8 },
      { Browser: 'étude commercial', Share: 2.7 },
      { Browser: 'attente CAD', Share: 6.8 },
      { Browser: 'attente AE', Share: 2.7 },
      { Browser: 'attente validation contrat-Attribué', Share: 6.8 },
      { Browser: 'Soldé', Share: 6.8 }
  ];
  charts: any[] = [
      { title: 'AO', label: 'Ao', dataSource: this.dataAO },
      { title: 'RFI', label: 'Rfi', dataSource: this.dataRFI }
  ];

  padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

  titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

  seriesGroups: any[] =
  [
      {
          type: 'pie',
          showLegend: true,
          enableSeriesToggle: true,
          series:
          [
              {
                  dataField: 'Share',
                  displayText: 'Browser',
                  showLabels: true,
                  labelRadius: 160,
                  labelLinesEnabled: true,
                  labelLinesAngles: true,
                  labelsAutoRotate: false,
                  initialAngle: 0,
                  radius: 125,
                  minAngle: 0,
                  maxAngle: 180,
                  centerOffset: 0,
                  offsetY: 170,
                  formatFunction: (value: any, itemIdx: any, serieIndex: any, groupIndex: any) => {
                      if (isNaN(value))
                          return value;
                      return value + '%';
                  }
              }
          ]
      }
  ];
}
