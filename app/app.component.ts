import {Component} from '@angular/core';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-app-aot',
    template: `
    
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
    `
})
export class NgbdAppAotComponent {
    radioModel = 1;
    isCollapsed = false;
    datepickerModel: NgbDateStruct;
}