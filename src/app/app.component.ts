import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'hammerjs';
import { PlotBand } from '@progress/kendo-angular-charts';
import { products, Custproducts, Custproducts2 } from './products';
import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from "ng-auto-complete";
import { RouterModule } from '@angular/router';





import { I18n, Language } from '@cisco-ngx/cui-utils';
import { CuiHeaderOptions, CuiToastComponent, CuiInputComponent } from '@cisco-ngx/cui-components';
import {itemAt} from '@progress/kendo-angular-grid/dist/es2015/data/data.iterators';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [
		HttpClient,
	],
})
export class AppComponent {
  @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;

  public AttainmentPlotBands: PlotBand[] = [{
    from: 0, to: 100, color: '#005474'
  }];

  public attainment: any[] = [[25]];



  public AttachPlotBands: PlotBand[] = [{
    from: 0, to: 20, color: '#D4ECD4'
  }];

  public attach: any[] = [[0]];


  public RefreshPlotBands: PlotBand[] = [{
    from: 0, to: 50, color: '#118E7C'
  }];

  public Refresh: any[] = [[0]];

  public ReNewPlotBands: PlotBand[] = [{
    from: 0, to: 30, color: '#B37000'
  }];

  public Renew: any[] = [[10]];


  public model = [{
    stat: 'MQL',
    count: 1200,
    color: '#3eaee2'
  }, {
    stat: 'SAL - 75 %',
    count: 899,
    color: '#319fd2'
  }, {
    stat: 'SQL - 26 %',
    count: 230,
    color: '#2185b4'
  }, {
    stat: 'Prospect - 74 %',
    count: 170,
    color: '#166f99'
  }];

  public customer1 : any = false ;
  public selectedItem:any = {};
  public selectedCustName:string= '';
  public card1 : any = { group: { key: "completer"}, item: {title: "Amazon",id: "1", original:{title: "Amazon",id: "1" }}};
  public card2 : any = { group: { key: "completer"}, item: {title: "Apple",id: "2", original:{title: "Apple",id: "2" }}};

  public card3 : any = { group: { key: "completer"}, item: {title: "Paypal",id: "3", original:{title: "Paypal",id: "3" }}};

  public card4 : any = { group: { key: "completer"}, item: {title: "Microsoft",id: "4", original:{title: "Microsoft",id: "4" }}};

  public card5 : any = { group: { key: "completer"}, item: {title: "TATA",id: "5", original:{title: "TATA",id: "5" }}};

  public nullCard : any = { group: { key: "completer"}, item: null};


  public group = [
    CreateNewAutocompleteGroup(
      'Search Customers',
      'completer',
      [
        {title: 'Amazon', id: '1'},
        {title: 'Apple', id: '2'},
        {title: 'Paypal', id: '3'},
        {title: 'Microsoft', id: '4'},
        {title: 'TATA', id: '5'}
        ],
      {titleKey: 'title', childrenKey: null}
    ),
  ];


  public timeGroup = [
    CreateNewAutocompleteGroup(
      'Search Quarter',
      'completer',
      [
        {title: 'Q1 FY19', id: '1'},
        {title: 'Q2 FY19', id: '2'},
        {title: 'Q3 FY19', id: '3'},
        {title: 'Q4 FY19', id: '4'}
        ],
      {titleKey: 'title', childrenKey: null}
    ),
  ];

  ngOnInit(){
  console.log(this.group);
}

  Selected(item: SelectedAutocompleteItem) {
    console.log(item);


  this.selectedItem=item;

  if(this.selectedItem.item == null ) {
    this.customer1 = false;
  }else{

  if(this.selectedItem.item.title){
      this.customer1=true;
      this.selectedCustName=this.selectedItem.item.title;
      }else{
      this.customer1=false;

    }

  }}

  clickonCust1(){

  this.Selected(this.card1);

    this.customer1=true;

  }

  clickonCust2(){

    this.Selected(this.card2);

    this.customer1=true;

  }
  clickonCust3(){

    this.Selected(this.card3);

    this.customer1=true;

  }
  clickonCust4(){

    this.Selected(this.card4);

    this.customer1=true;

  }
  clickonCust5(){

    this.Selected(this.card5);

    this.customer1=true;

  }

  clickonBack(){
  this.Selected(this.nullCard);
  this.customer1=false;
  }

  public banksData = [
    { name: "Price", pre: 116, post: 64 },
    { name: "Advertisement", pre: 165, post: 85 },
    { name: "Service", pre: 215, post: 97 },
    { name: "Sales Channel", pre: 75, post: 27 },
    { name: "Quantiity", pre: 100, post: 16 },
    { name: "Durability", pre: 49, post: 26 },
    { name: "Diversity", pre: 80, post: 35 }
  ];

  public labelContent(e: any): string {
    return `${ e.dataItem.time.substring(0, 2) }h`;
  }

  public editmode: any =false;
  public showCard1: any =true;
  public showCard2: any =true;
  public showCard3: any =true;
  public showCard4: any =true;
  public showCard5: any =true;
  public showCard6: any =true;
  public showCard7: any =true;
  public showCard8: any =true;
  public showCard9: any =true;
  public showCard10: any =true;
  public showCard11: any =true;
  public showCard12: any =true;
  public showCard13: any =true;
  public showCard14: any =true;
  public showCard15: any =true;
  public showCard16: any =true;
  public showCard17: any =true;

  public bulletData: any[] = [21, 23];
  public bulletValueAxis: any = {
    min: 0,
    max: 30,
    plotBands: [{
      from: 0, to: 15, color: "#787878", opacity: 0.15
    }, {
      from: 15, to: 22, color: "#787878", opacity: 0.3
    }, {
      from: 22, to: 30, color: "#787878", opacity: 0.15
    }]
  };

  public gridData: any[] = products;
  public custGridData: any[]= Custproducts;
  public custGridData2: any[]= Custproducts2;



  public cashFlowData = [
    {
      period: 'Start',
      amount: 30
    },{
    period: 'New/Increased',
    amount: 11
  }, {
    period: 'Pushed Out',
    amount: -3
  }, {
    period: 'Past Due',
    amount: -2
  }, {
    period: 'Lost',
    amount: -2
  }, {
    period: 'Finish',
    summary: 'runningTotal'
  }];


  public custSaasFlowData = [
    {
      period: 'Begin MRR',
      amount: 3
    },{
      period: 'iMRR',
      amount: 2
    }, {
      period: 'Churn',
      amount: -1
    }, {
      period: 'Ending MRR',
      summary: 'runningTotal'
    }];


  public saaSFlowData = [{
    period: 'Start',
    amount: 14
  }, {
    period: 'New Bookings',
    amount: 8
  }, {
    period: 'Renew',
    amount: 6
  }, {
      period: 'Expansion',
      amount: 4
  },{
    period: 'Churn',
    amount: -2
  }, {
    period: 'Exit',
    summary: 'runningTotal'
  }];

  public pointColor(point: any): string {
    var summary = point.dataItem.summary;
    if (summary) {
      return summary == 'total' ? '#555' : 'gray';
    }

    if (point.value > 0) {
      return 'green';
    } else {
      return 'red';
    }
  }
  public hidden: any = { visible: false };
  public tempPlotBands: PlotBand[] = [{
    from: 0, to: 84.5, color: '#7899DD', opacity: 1
  }];

  public ACVPlotBands: PlotBand[] = [ {
    from: 60, to: 100, color: '#ffc000', opacity: 1
  }, {
    from: 0, to: 60, color: '#5392ff', opacity: 1
  }];
  public humPlotBands: PlotBand[] = [{
    from: 0, to: 67.2, color: '#005474', opacity: .6
  }];
  public mmhgPlotBands: PlotBand[] = [{
    from: 715, to: 752, color: '#ccc', opacity: .6
  }, {
    from: 752, to: 772, color: '#ccc', opacity: .3
  }];
  public temp: any[] = [[0, 88.6]];

  public ACV: any[] = [[25, 60]];

  public hum: any[] = [[0, 68.8]];
  public mmhg: any[] = [[750, 762]];


  public data: any[] = [{
    kind: 'Commit Coverage', share: 0.8
  }, {
    kind: 'Uncovered', share: 0.2
  }];


  public iBdata: any[] = [
    {
      kind: 'Attach 4 M', share: 25,color:'#D4ECD4'
    }, {
      kind: 'Refresh 10 M', share: 63,color:'#118E7C'
    },{
      kind: 'Renew 2 M', share: 12,color:'#B37000'
    }];

  public CustiBdata: any[] = [
    {
      kind: 'Attach 3 M', share: 55,color:'#D4ECD4'
    }, {
      kind: 'Refresh 2 M', share: 36,color:'#118E7C'
    },{
      kind: 'Renew 0.75 M', share: 9,color:'#B37000'
    }];


  public gData: any[] = [{
    kind: 'Collab', share: 0.3
  }, {
    kind: 'Core', share: 0.4
  },
    {
      kind: 'Meraki', share: 0.1
    },,
    {
      kind: 'Security', share: 0.2
    }];
  public glabelContent(e: any): string {
    return e.category;
  }

  public FlabelContent(e: any): string {
    return e.category;
  }
  public IBlabelContent(e: any): string {
    return `${ e.category }: \n ${e.value}%`;
  }
	i18n: any = I18n;
	i18nReady = false;
	alert: any = {};
	headerOptions: CuiHeaderOptions = new CuiHeaderOptions({});
	picker: any;

	@ViewChild(CuiToastComponent) toast: CuiToastComponent;

	constructor(private http: HttpClient) {
		this.prepareApp();
	}

	/**
	 * Retrieves the localization dictionary from assets and adds it to the I18n utility.
	 */
	async getI18n() {
		try {
			I18n.injectDictionary(await this.http.get(`assets/i18n/${Language.getPreferred()}.json`)
				.toPromise() as any[]);
			this.i18nReady = true;
		} catch (err) {
			I18n.injectDictionary(await this.http.get('assets/i18n/en-US.json')
				.toPromise() as any[]);
			this.i18nReady = true;
		}
	}

	/**
	 * Prepares the app for display.
	 */
	async prepareApp() {
		await this.getI18n();
		this.headerOptions = new CuiHeaderOptions({
			title: 'New Sales Strategy',
			toolbarButtons: [{
				icon: 'feedback'
			}, {
				icon: 'sign-out'
			}],
			primaryNav: [{
				label: I18n.get('_Home_'),
				active: true,
			},{
        label: 'Second Home',
        active: false,
      },{
        label: 'Third Home',
        active: true,
      }],
		});
	}

	/**
	 * Shows an alert
	 */
	showAlert() {
		this.alert.show(I18n.get('_AlertText_'), 'success');
	}

	/**
	 * Pops a toast
	 */
	popToast() {
		this.toast.addToast('success', I18n.get('_ToastTitle_'), I18n.get('_ToastMessage_'));
	}

	onDateChange(date: Date) {
		console.log(date);
		}

  tabone(){
	  document.getElementById('firstTab').classList.add('active');
    document.getElementById('secondTab').classList.remove('active');
    document.getElementById('thirdTab').classList.remove('active');
    document.getElementById('tab1').classList.remove('disnone');
    document.getElementById('tab2').classList.remove('display');
    document.getElementById('tab3').classList.remove('display');
    document.getElementById('tab1').classList.add('display');
    document.getElementById('tab2').classList.add('disnone');
    document.getElementById('tab3').classList.add('disnone');

    }


  tabtwo(){
    document.getElementById('firstTab').classList.remove('active');
    document.getElementById('secondTab').classList.add('active');
    document.getElementById('thirdTab').classList.remove('active');
    document.getElementById('tab1').classList.remove('display');
    document.getElementById('tab2').classList.remove('disnone');
    document.getElementById('tab3').classList.remove('display');
    document.getElementById('tab1').classList.add('disnone');
    document.getElementById('tab2').classList.add('display');
    document.getElementById('tab3').classList.add('disnone');

  }


  tabthree(){
    document.getElementById('firstTab').classList.remove('active');
    document.getElementById('secondTab').classList.remove('active');
    document.getElementById('thirdTab').classList.add('active');
    document.getElementById('tab1').classList.remove('display');
    document.getElementById('tab2').classList.remove('display');
    document.getElementById('tab3').classList.remove('disnone');
    document.getElementById('tab1').classList.add('disnone');
    document.getElementById('tab2').classList.add('disnone');
    document.getElementById('tab3').classList.add('display');

  }

  enableEditMode(){
	  this.editmode = !this.editmode;
  }

  check1(){
	  this.showCard1=!this.showCard1;
  }
  check2(){
    this.showCard2=!this.showCard2;
  }
  check3(){
    this.showCard3=!this.showCard3;
  }
  check4(){
    this.showCard4=!this.showCard4;
  }
  check5(){
    this.showCard5=!this.showCard5;
  }
  check6(){
    this.showCard6=!this.showCard6;
  }
  check7(){
    this.showCard7=!this.showCard7;
  }
  check8(){
    this.showCard8=!this.showCard8;
  }
  check9(){
    this.showCard9=!this.showCard9;
  }
  check10(){
    this.showCard10=!this.showCard10;
  }
  check11(){
    this.showCard11=!this.showCard11;
  }
  check12(){
    this.showCard12=!this.showCard12;
  }
  check13(){
    this.showCard13=!this.showCard13;
  }
  check14(){
    this.showCard14=!this.showCard14;
  }
  check15(){
    this.showCard15=!this.showCard15;
  }
  check16(){
    this.showCard16=!this.showCard16;
  }
  check17(){
    this.showCard17=!this.showCard17;
  }

}
