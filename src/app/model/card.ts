import {ATag} from './atag';

export class Card {
  title: string;
  baseInfo: ATag;
  price: number;
  styleClass: string;
  productList: {
    grid: boolean,
    list: ATag[]
  };
}
