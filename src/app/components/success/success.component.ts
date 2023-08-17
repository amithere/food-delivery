/**
 * @author Amit Singh
 */

import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements AfterViewInit {
  currentStep = 1;
  numSteps = 4;
  interval: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.interval = setInterval(() => {
      this.nextStep();
    }, 10000);
  }

  nextStep() {
    this.currentStep++;
    if (this.currentStep > this.numSteps) {
      // this.currentStep = 1;
      clearInterval(this.interval);
    }
    let stepper: any = document.getElementById('stepper1');
    let steps = stepper.getElementsByClassName('step');

    Array.from(steps).forEach((step, index) => {
      let stepNum = index + 1;
      if (stepNum === this.currentStep) {
        this.addClass(step, 'editing');
      } else {
        this.removeClass(step, 'editing');
      }
      if (stepNum < this.currentStep) {
        this.addClass(step, 'done');
      } else {
        this.removeClass(step, 'done');
      }
    });
  }
  hasClass(elem: any, className: any) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
  }

  addClass(elem: any, className: any) {
    if (!this.hasClass(elem, className)) {
      elem.className += ' ' + className;
    }
  }

  removeClass(elem: any, className: any) {
    let newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (this.hasClass(elem, className)) {
      while (newClass.indexOf(' ' + className + ' ') >= 0) {
        newClass = newClass.replace(' ' + className + ' ', ' ');
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
  }
}
