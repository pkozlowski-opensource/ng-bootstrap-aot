import {Component} from '@angular/core';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {NgbDateStruct, NgbModal, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
    selector: 'ngbd-app-aot',
    template: `
        <template ngbModalContainer></template>
    
        <h3>Accordion</h3>
        <ngb-accordion #acc="ngbAccordion" activeIds="ngb-panel-0">
          <ngb-panel title="Simple">
            <template ngbPanelContent>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
              aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
              craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
              occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
              labore sustainable VHS.
            </template>
          </ngb-panel>
          <ngb-panel>
            <template ngbPanelTitle>
              <span>&#9733; <b>Fancy</b> title &#9733;</span>
            </template>
            <template ngbPanelContent>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
              aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
              craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
              occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
              labore sustainable VHS.
            </template>
          </ngb-panel>
          <ngb-panel title="Disabled" [disabled]="true">
            <template ngbPanelContent>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
              aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
              craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
              occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
              labore sustainable VHS.
            </template>
          </ngb-panel>
        </ngb-accordion>
        <hr>
        
        <h3>Alert</h3>
        <ngb-alert [dismissible]="false">
            <strong>Warning!</strong> Better check yourself, you're not looking too good.
        </ngb-alert>
        <hr>
        
        <h3>Buttons</h3>
        <div [(ngModel)]="radioModel" ngbRadioGroup name="radioBasic">
          <label class="btn btn-primary">
            <input type="radio" [value]="1"> Left (pre-checked)
          </label>
          <label class="btn btn-primary">
            <input type="radio" value="middle"> Middle
          </label>
          <label class="btn btn-primary">
            <input type="radio" [value]="false"> Right
          </label>
        </div>
        <hr>
        
        <h3>Carousel</h3>
        <ngb-carousel>
          <template ngbSlide>
            <img src="http://lorempixel.com/900/500?r=1" alt="Random first slide">
            <div class="carousel-caption">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </template>
          <template ngbSlide>
            <img src="http://lorempixel.com/900/500?r=2" alt="Random second slide">
            <div class="carousel-caption">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </template>
          <template ngbSlide>
            <img src="http://lorempixel.com/900/500?r=3" alt="Random third slide">
            <div class="carousel-caption">
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </template>
        </ngb-carousel>
        <hr>
        
        <h3>Collapse</h3>
        <p>
          <button type="button" class="btn btn-outline-primary" (click)="isCollapsed = !isCollapsed">Toggle</button>
        </p>
        <div [ngbCollapse]="isCollapsed">
          <div class="card">
            <div class="card-block">
              You can collapse this card by clicking Toggle
            </div>
          </div>
        </div>
        <hr>
        
        <h3>Datepicker</h3>
        <form class="form-inline">
          <div class="form-group">
            <div class="input-group">
              <input class="form-control" placeholder="yyyy-mm-dd"
                     name="dp" [(ngModel)]="datepickerModel" ngbDatepicker #d="ngbDatepicker">
              <div class="input-group-addon" (click)="d.toggle()" >
                <img src="img/calendar-icon.svg" style="width: 1.2rem; cursor: pointer;"/>
              </div>
            </div>
          </div>
        </form>
        <hr>
        
        <h3>Dropdown</h3>
        <div ngbDropdown class="d-inline-block">
          <button class="btn btn-outline-primary" id="dropdownMenu1" ngbDropdownToggle>Toggle dropdown</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <button class="dropdown-item">Action - 1</button>
            <button class="dropdown-item">Another Action</button>
            <button class="dropdown-item">Something else is here</button>
          </div>
        </div>
        <hr>

        <h3>Modal</h3>    
        <template #content let-c="close" let-d="dismiss">
          <div class="modal-header">
            <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">Modal title</h4>
          </div>
          <div class="modal-body">
            <p>One fine body&hellip;</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="c('Close click')">Close</button>
          </div>
        </template>
        
        <button class="btn btn-lg btn-outline-primary" (click)="modalService.open(content)">Launch demo modal</button>
        <hr>
        
        <h3>Pagination</h3>    
        <ngb-pagination [collectionSize]="70" [(page)]="page"></ngb-pagination>
        <hr>
        
        <h3>Popover</h3>
        <button type="button" class="btn btn-secondary" placement="top"
                ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverTitle="Popover on top">
          Popover on top
        </button>
        <hr>
        
        <h3>Progressbar</h3>
        <ngb-progressbar type="success" [value]="25"></ngb-progressbar>
        <hr>
        
        <h3>Rating</h3>
        <ngb-rating [(rate)]="currentRate"></ngb-rating>
        <hr>
        
        <h3>Tabset</h3>
        <ngb-tabset>
          <ngb-tab title="Simple">
            <template ngbTabContent>
              <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
              master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
              dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum
              iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
            </template>
          </ngb-tab>
          <ngb-tab>
            <template ngbTabTitle><b>Fancy</b> title</template>
            <template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
              <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table
              craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl
              cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia
              yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean
              shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero
              sint qui sapiente accusamus tattooed echo park.</p>
            </template>
          </ngb-tab>
          <ngb-tab title="Disabled" [disabled]="true">
            <template ngbTabContent>
              <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
              master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
              dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum
              iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
            </template>
          </ngb-tab>
        </ngb-tabset>
        <hr>

        <h3>Timepicker</h3>
        <ngb-timepicker [(ngModel)]="time"></ngb-timepicker>
        
        <h3>Tooltip</h3>
        <button type="button" class="btn btn-secondary" placement="top" ngbTooltip="Tooltip on top">
          Tooltip on top
        </button>
        <hr>
        
        <h3>Typeahead</h3>
        <input type="text" class="form-control" [(ngModel)]="state" [ngbTypeahead]="statesSearch" />
    `
})
export class NgbdAppAotComponent {
    radioModel = 1;
    isCollapsed = false;
    datepickerModel:NgbDateStruct;
    page = 5;
    currentRate = 4;
    time: NgbTimeStruct;
    state: string;

    constructor(public modalService:NgbModal) {
    }

    statesSearch = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : states.filter(v => new RegExp(term, 'gi').test(v)).splice(0, 10));
}