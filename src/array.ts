/**
 * МАССИВЫ
 * 
 * - Константный доступ по индексу
 * - Непрерывный кусок памяти
 * - Фиксированный размер
 */

abstract class IntArray {
  protected itemSize: number; // bits
  
  protected buffer: ArrayBuffer;
  constructor(public length: number) {
    this.buffer = new ArrayBuffer(this.length * this.itemSize / 8);
  }

  protected getZero(): string {
    let ret = '';
    for (let i = 0; i < this.itemSize; i ++) {
      ret += '' + '0';
    }

    return ret;
  }

  set(index: number, value: number) {    
    let zeroValue = this.getZero();
    let binaryValue = (zeroValue + value.toString(2)).slice(-1 * zeroValue.length);
    let offset = index * this.itemSize;

    for (let i = 0; i < this.itemSize; i++) {
      this.buffer[offset + i] = binaryValue[i];
    }
  }

  get (index: number) {
    let binaryValue = "";
    let offset = index * this.itemSize;    

    for (let i = 0; i < this.itemSize; i++) {
      binaryValue += '' + this.buffer[offset + i];
    }

    return parseInt(binaryValue, 2);
  }
  
  forEach(callBack: (item: number) => void) {
    for (let i = 0; i < this.length; i++) {
      callBack(this.get(i));
    }
  }
}

export class Int4Array extends IntArray {
  protected itemSize = 32; // bits     
}
