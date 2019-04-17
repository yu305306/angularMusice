import { Component, OnInit, ElementRef } from '@angular/core';
import { Isprite } from '../Isprite/Isprite';
import { MusiceService } from '../service/musice.service';
import { Store } from '@ngrx/store';
import * as musiceAction from 'src/app/ngrx/musiceAction';

@Component({
    selector: 'playListModule',
    templateUrl: './playListModule.html',
    styleUrls: ['../../assets/css/playList/playListModule.less'],
    providers: [MusiceService]
})
export class playListModule extends Isprite {
    // musiceType = new Array();

    public playListData: any;
    logLogBol: boolean = false;
    logBol: boolean = true;
    logP: string = "展开";
    constructor(private musiceService: MusiceService, private el: ElementRef, private store: Store<any>) {
        super();
    }
    init() {
        let _ts = this;
        document.body.style.margin = "0";
        this.musiceService.getPlayList().subscribe(function (res) {
            let listData = res.json();
            // 数据格式请看log
            _ts.playListData = listData;
            setTimeout(function () {
                let obj = _ts.el.nativeElement.querySelector('.desP');
                if (obj.clientHeight > 54) {
                    _ts.logLogBol = true;
                }

            }, 100);
        });
    }

    showLog() {
        let _ts = this;
        _ts.logBol = !_ts.logBol;
        if (_ts.logBol) {
            _ts.logP = "展开";
        } else {
            _ts.logP = "收起";
        }
    }

    playFun(item: Array<any>) {
        this.store.dispatch({
            type: musiceAction.ADD_MUSICE,
            addList: item
        });
    }

    playList(item: object) {
        this.store.dispatch({
            type: musiceAction.CLICK_MUSICE_LIST,
            addList: item
        });
    }

}
