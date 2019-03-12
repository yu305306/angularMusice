import { Component, OnInit } from '@angular/core';
import Isprite from '../../Isprite/Isprite';

@Component({
    selector: 'headerModule',
    templateUrl: './headerModule.html',
    styleUrls: ['../../../assets/css/common/headerModule.less', '../../../assets/css/common/common.less']
})
class headerModule extends Isprite {
    selectPlay: boolean = true;
    constructor() {
        super();
    }


} export default headerModule;
