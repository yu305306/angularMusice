import { Component, ElementRef } from '@angular/core';
import Isprite from '../../Isprite/Isprite';
import { MusiceService } from '../../service/musice.service';

@Component({
    selector: 'indexMuscieListModule',
    templateUrl: './indexMuscieListModule.html',
    styleUrls: ['../../../assets/css/index/indexMuscieListModule.less'],
})
class indexMuscieListModule extends Isprite {
    private arr: Array<any>;

    private soundLriy: Array<any> = [];
    private selectNum: Number = 0;
    private video_url: string = '';
    private selectTitle: string = '';
    constructor(private musiceService: MusiceService, private el: ElementRef) {
        super();
    }
    init() {
        let _ts = this;
        let ss: string;
        _ts.getMusice();
        _ts.addEventVideo();
    }

    addEventVideo() {
        let _ts = this;
        let video = _ts.el.nativeElement.querySelector('#ctrlMusice');
        video.onended = function(){
            console.log('结束');
        }
        // video.addEventListener("timeupdate")
        // console.log(video);

    }

    getMusice() {
        let _ts = this;
        this.musiceService.getBooks().subscribe(
            function (res) {
                let listData = res.json();
                // 数据格式请看log
                _ts.arr = listData.musice;
                if (_ts.arr.length > 0) {
                    _ts.musiceSelectPlay(_ts.arr[0], 0);
                }
            }, error => {
                console.log(error);
            });
    }

    musiceSelectPlay(item, index) {
        let _ts = this;
        _ts.selectNum = index;
        _ts.selectTitle = item.title;
        // this.video_url = $sce.trustAsResourceUrl(item.url);
        _ts.video_url = item.url;
        // console.log("laji")
        _ts.musiceService.loadData(item.lyric).subscribe(
            function (res) {
                let listData = res.json();
                // 数据格式请看log
                let lrcArr: Array<string> = listData.lyric.split('\n');
                let lArr: Array<any> = [];
                for (let i = 0; i < lrcArr.length; i++) {
                    let str = lrcArr[i];
                    let matchArr = str.match(/\[(.+)\]/g);
                    if (matchArr != null && matchArr.length > 0) {
                        let t = matchArr[0];
                        t = t.replace(/\[/g, '').replace(/\]/g, '');
                        let tArr = t.split(':');
                        let min = parseInt(tArr[0]);
                        let ss = parseFloat(tArr[1]) * 1000;
                        lArr.push({
                            str: str.replace(/\[(.+)\]/g, ''),
                            time: min * 60 + ss
                        })
                    }
                }
                _ts.soundLriy = lArr;
            }, error => {
                console.log(error);
            });
    }

    clearMusice() {
        this.arr.length = 0;
    }



} export default indexMuscieListModule;
