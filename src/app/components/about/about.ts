import {Component} from '@doge/models'

export class AboutComponent implements Component {

  public getTemplate(): string {
    return template()
  }
}

const template = (props?: any): string => {

  const getList = (): string => {
    const items = [
      {
        text: 'Typescript',
        color: '#4CAF50'
      },
      {
        text: 'SASS',
        color: '#01579b'
      },
      {
        text: 'SPA',
        color: '#F44336'
      },
      {
        text: 'Component architecture of applications',
        color: '#f57f17'
      },
      {
        text: 'More than 20 custom tags',
        color: '#5e35b1'
      },
      {
        text: 'Routing',
        color: '#8bc34a'
      },
      {
        text: 'HTTP module',
        color: '#00bcd4'
      },
      {
        text: 'DOM module',
        color: '#FF5252'
      },
      {
        text: 'and other...',
        color: '#ffd180'
      }
    ]

    let list = ''

    items.forEach(el => {
      list += (`<doge-item class="list__item">
        <doge-box class="list__wrapper" style="background-color: ${el.color}">
          <doge-pic url="assets/images/list.svg" class="list__img"></doge-pic>
        </doge-box>
        <doge-text class="list__text">${el.text}</doge-text>
      </doge-item>`)
    })

    return list
  }

  return (`
   <doge-box class="about">
    <doge-heading class="about__title">Opportunities</doge-heading>
     <doge-list class="list">
        ${getList()}
     </doge-list>
   </doge-box>
  `)
}
