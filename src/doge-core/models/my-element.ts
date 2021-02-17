export interface MyElement extends Element {
  html: (node: string) => MyElement
  clear: () => MyElement
  on: (eventType: string, callback: any) => void
  off: (eventType: string, callback: any) => void
  all: (selector: string) => MyElement[]
  domLoad: (callback: any) => void
}

