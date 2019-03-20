import { Component, OnInit } from '@angular/core';
import Isprite from '../../Isprite/Isprite';


@Component({
    selector: 'indexMuscieModule',
    templateUrl: './indexMuscieModule.html',
    styleUrls: ['../../../assets/css/index/indexMuscieModule.less'],
})
class indexListModule extends Isprite {
    musiceList = new Array();
    constructor() {
        super();
    }
    init() {
        let _ts = this;
       
    }

} export default indexListModule;
