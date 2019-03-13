import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MusiceService {
  constructor(private http: Http) {
  }

  getMusice() {
    const url = '/src/app/service/musice.json';
    return this.http.get(url)
      .subscribe(res => res.json());
  }

  getMusiceType(fun: Function) {
    let arr = {
      "list": [
        {
          "title": "语种",
          "typeList": ["华语", "欧美", "日语", "韩语", "粤语", "小语种"]
        },
        {
          "title": "风格",
          "typeList": ["流行", "摇滚", "民谣", "电子", "舞曲", "说唱", "轻音乐", "爵士", "乡村", "古典", "民族", "英伦", "金属", "朋克", "蓝调"]
        },
        {
          "title": "场景",
          "typeList": ["清晨", "夜晚", "学习", "工作", "午休", "下午茶", "地铁", "驾车", "运动", "旅行", "散步"]
        },
        {
          "title": "情感",
          "typeList": ["怀旧", "清新", "浪漫", "性感", "伤感", "治愈", "放松", "孤独", "感动", "兴奋", "快乐", "安静", "思念"]
        },
        {
          "title": "主题",
          "typeList": ["影视原声", "儿童", "校园", "游戏", "70后", "80后", "90后", "网络歌曲", "经典", "翻唱", "吉他", "钢琴", "器乐"]
        }
      ]
    };
    this.http.get(url)
      .subscribe(function (res) {
        fun(res)
      });
  }

}