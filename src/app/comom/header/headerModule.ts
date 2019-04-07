import { Component, OnInit } from '@angular/core';
import { Isprite } from '../../Isprite/Isprite';

@Component({
    selector: 'headerModule',
    templateUrl: './headerModule.html',
    styleUrls: ['../../../assets/css/common/headerModule.less', '../../../assets/css/common/common.less']
})
export class headerModule extends Isprite {
    selectPlay: boolean = true;
    selectNum: number = 0;
    constructor() {
        super();
    }


};
