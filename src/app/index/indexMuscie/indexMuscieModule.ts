import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Isprite } from '../../Isprite/Isprite';
import { MusiceService } from '../../service/musice.service';
import { indexMuscieListModule } from '../indexMuscieList/indexMuscieListModule';

import { Store } from '@ngrx/store';
import * as musiceAction from 'src/app/ngrx/musiceAction';

@Component({
    selector: 'indexMuscieModule',
    templateUrl: './indexMuscieModule.html',
    styleUrls: ['../../../assets/css/index/indexMuscieModule.less'],
})
export class indexMuscieModule extends Isprite {
    musiceList = new Array();
    public nowTimw: string = '00:00';
    public durationTime: string = '00:00';
    public musiceTitle: string = '';
    public musiceName: string = '';
    public musiceImg: string = 'http://s4.music.126.net/style/web2/img/default/default_album.jpg';
    public musiceListNum: number = 0;
    public playBol: boolean = true;
    public musiceBol: boolean = true;
    public barbufferLine: ElementRef;
    public barRedLine: ElementRef;
    public barBtn: ElementRef;

    @ViewChild(indexMuscieListModule) indexMuscieListModule;

    constructor(private musiceService: MusiceService, private store: Store<any>, private el: ElementRef, private renderer: Renderer2) {
        super();
    }
    init() {
        let _ts = this;
        _ts.barbufferLine = _ts.el.nativeElement.querySelector('.barbufferLine');
        _ts.barRedLine = _ts.el.nativeElement.querySelector('.barRedLine');
        _ts.barBtn = _ts.el.nativeElement.querySelector('.barBtn');
        // this.str = this.store.select('musice');
    }

    playPre() {
        this.playBol = false;
        this.indexMuscieListModule.videoCtrl('playPre');
        // this.ctrlStatue = 'playPre';
    }

    playVideo() {
        this.playBol = !this.playBol;
        if (this.playBol) {
            // this.store.dispatch(new musiceAction.ShowAction());
            // this.store.dispatch(new musiceAction.PlayVideoAction());
            // this.store.dispatch({ type: "INCREMENT" });
            this.store.dispatch({
                type: musiceAction.PLAY_VIDEO,
                videoStatus: 'pause'
            });
            this.musiceService.playState = 'play';
        } else {
            // this.store.dispatch(new musiceAction.HideAction());
            this.store.dispatch({
                type: musiceAction.PAUSE_VIDEO,
                videoStatus: 'play'
            });
            this.musiceService.playState = 'pause';
        }
    }

    playNext() {
        this.playBol = false;
        this.indexMuscieListModule.videoCtrl('playNext');
        // this.ctrlStatue = 'playNext';
    }

    musiceDataEvent(obj: any) {
        // let obj.time
        let _ts = this;
        if (obj.status == "msg") {
            _ts.musiceTitle = obj.data.title;
            _ts.musiceName = obj.data.nickName;
            _ts.musiceImg = obj.data.img;
            _ts.musiceListNum = obj.len;
        } else {
            let wStr = (490 * (obj.buffer / obj.duration)).toFixed(0);
            let wPlay = (490 * (obj.time / obj.duration));
            _ts.renderer.setStyle(_ts.barbufferLine, 'width', wStr + 'px');
            _ts.renderer.setStyle(_ts.barRedLine, 'width', wPlay + 'px');
            _ts.renderer.setStyle(_ts.barBtn, 'margin-left', (wPlay - 8) + 'px');
            _ts.nowTimw = _ts.timeDecode(obj.time);
            _ts.durationTime = _ts.timeDecode(obj.duration);
        }

    }

    timeDecode(value: number): string {
        let num = parseInt(value.toFixed(0));
        let mm = (num / 60).toFixed(0);
        let ss = (num % 60).toFixed(0);
        if (mm.length == 1) {
            mm = '0' + mm;
        }
        if (ss.length == 1) {
            ss = '0' + ss;
        }
        return mm + ':' + ss;
    }

    listClick() {
        this.musiceBol = !this.musiceBol;
    }

}  
