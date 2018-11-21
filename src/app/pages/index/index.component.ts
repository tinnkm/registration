import {Component, OnInit} from '@angular/core';
import {Card} from '../../model/card';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  cardList: Card[];
  // card: Card;

  constructor() {
  }

  ngOnInit() {
    this.cardList = [{
      title: '我要开公司',
      baseInfo: {
        href: '#',
        text: '有限责任公司',
        desc: '一站式开公司服务'
      },
      price: 0.01,
      styleClass: 'card-1',
      productList: {
        grid: true,
        list: [
          {
            href: '#',
            text: '创业问诊',
            desc: '创业咨询服务'
          },
          {
            href: '#',
            text: '国内普通商标注册',
            desc: '产权保护第一步'
          },
          {
            href: '#',
            text: '公司注册地址',
            desc: '没有地址怎么办'
          },
          {
            href: '#',
            text: '代理记账',
            desc: '专业会计帮你记账'
          }
        ]
      }
    },
      {
        title: '我要做产品',
        baseInfo: {
          href: '#',
          text: '软件著作权',
          desc: '软件产品基础必备'
        },
        price: 200,
        styleClass: 'card-2',
        productList: {
          grid: true,
          list: [
            {
              href: '#',
              text: 'ICP经营许可证',
              desc: '网络经营敲门砖'
            },
            {
              href: '#',
              text: '公众号申请',
              desc: '公共号第一步'
            },
            {
              href: '#',
              text: '企业网站',
              desc: '网站定制服务'
            },
            {
              href: '#',
              text: '法律服务',
              desc: '一站式法律服务'
            }
          ]
        }
      },
      {
        title: '我要在推广',
        baseInfo: {
          href: '#',
          text: '电商解决方案',
          desc: '搭建你的专属微信商城'
        },
        price: 1,
        styleClass: 'card-3',
        productList: {
          grid: false,
          list: [
            {
              href: '#',
              text: '朋友圈广告',
              desc: '时下最火推广'
            },
            {
              href: '#',
              text: '手机短信营销',
              desc: '营销推广必备'
            },
            {
              href: '#',
              text: '微官网',
              desc: '微信官方网站搭建'
            }
          ]
        }
      },
      {
        title: '我要做内容创业',
        baseInfo: {
          href: '#',
          text: '在线设计工具',
          desc: '美化完善图文信息'
        },
        price: 0,
        styleClass: 'card-4',
        productList: {
          grid: false,
          list: [
            {
              href: '#',
              text: '效果追踪',
              desc: '内容运营好助手'
            },
            {
              href: '#',
              text: '公众号服务',
              desc: '微信运营必备'
            },
            {
              href: '#',
              text: '版权服务',
              desc: '作品版权证明'
            }
          ]
        }
      }
    ];
  }

}
