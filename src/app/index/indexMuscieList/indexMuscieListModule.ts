import { Component } from '@angular/core';
import Isprite from '../../Isprite/Isprite';

@Component({
    selector: 'indexMuscieListModule',
    templateUrl: './indexMuscieListModule.html',
    styleUrls: ['../../../assets/css/index/indexMuscieListModule.less'],
})
class indexMuscieListModule extends Isprite {
    private arr: Array<any> = [, , , , , , , , ,];
    constructor() {
        super();
    }
    init() {
        let _ts = this;
        let ss: string;

    }

} export default indexMuscieListModule;
