import { Component } from '@angular/core';
import Isprite from '../../Isprite/Isprite';

@Component({
    selector: 'indexMuscieModule',
    templateUrl: './indexMuscieModule.html',
    styleUrls: ['../../../assets/css/index/indexMuscieModule.less'],
})
class indexListModule extends Isprite {
    musiceList = new Array();
    private playBol: boolean = true;
    constructor() {
        super();
    }
    init() {
        let _ts = this;
        let ss: string;

    }

} export default indexListModule;
