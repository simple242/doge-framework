import {Component} from '@doge/models'

export class HeaderComponent implements Component {

  private static params = {}

  public static setParams(params?: any) {
    this.params = params
    return this
  }

  public getTemplate(): string {
    return template(HeaderComponent.params)
  }
}

const template = (props?: any): string => {

  return (`
    <doge-box class="header">
        <doge-box class="container">
            <doge-central class="header__wrapper">
             <doge-text class="header__text">${props.title}</doge-text>
            </doge-central>
        </doge-box>
    </doge-box>
  `)
}
