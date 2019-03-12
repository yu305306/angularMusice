import { Component, OnInit } from '@angular/core';
import Isprite from '../Isprite/Isprite';

@Component({
    selector: 'appIndex',
    templateUrl: './IndexModule.html',
    styleUrls: ['../../assets/css/index/appIndex.less']
})
class IndexModule extends Isprite {
    constructor() {
        super();
    }


}export default IndexModule;
