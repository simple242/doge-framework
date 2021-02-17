export interface Dom {
  all: (selector: string) => NodeList
  domLoad: (callback: any) => void
}
