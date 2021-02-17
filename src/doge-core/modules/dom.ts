import {MyElement} from '@doge/models'

Element.prototype['html'] = function(node: string): MyElement {
  this.innerHTML = node
  return this
}
Element.prototype['clear'] = function(): MyElement {
  this.innerHTML = ''
  return this
}

Element.prototype['on'] = function(eventType: string, callback: any): void {
  this.addEventListener(eventType, callback)
}

Element.prototype['off'] = function(eventType: string, callback: any): void {
  this.removeEventListener(eventType, callback)
}

const dom = {
  all(selector: string): Element[] {
    return Array.from(document.querySelectorAll(selector))
  },
  domLoad(callback: any): void {
    document.addEventListener('DOMContentLoaded', callback())
  }
}

export const $ = (selector?: string | Element): MyElement => {
  if (typeof selector === 'string') {
    return <MyElement>document.querySelector(selector)
  } else if (selector instanceof Element) {
    return <MyElement>selector
  } else if (!selector) {
    return <MyElement>dom
  } else {
    console.error('Invalid selector!')
  }
}
