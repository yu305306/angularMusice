import { Component, OnInit } from '@angular/core';
import Isprite from '../Isprite/Isprite';
import { MusiceService } from '../service/musice.service';


@Component({
    selector: 'appIndex',
    templateUrl: './IndexModule.html',
    styleUrls: ['../../assets/css/index/appIndex.less'],
    providers: [MusiceService]
})
class IndexModule extends Isprite {
    musiceType = new Array();
    public typeShowBol: boolean = false;
    constructor(private musiceService: MusiceService) {
        super();
    }
    init() {
        let _ts = this;
        this.musiceService.getMusiceType(function (res) {
            _ts.musiceType = res.list;
        });
    }

} export default IndexModule;
