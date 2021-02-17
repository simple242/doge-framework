import {Component} from '@doge/models'
import {render, router} from '@doge/modules'

import {AboutComponent} from '../components/about/about'

export class MainComponent implements Component {

  private mainImg: string = 'assets/images/doge.jpg'

  public getTemplate(): string {
    return template({img: this.mainImg})
  }
}

const template = (props?: any): string => {

  return (`
      <doge-box class="doge">
        <doge-box class="container">
          <doge-box class="doge__wrapper">
            <doge-pic url="${props.img}" class="doge__img spin"></doge-pic>

             <!-- Render Component without params -->
             ${render(AboutComponent)}

          </doge-box>
        </doge-box>
      </doge-box>

      <doge-box class="link">

        <!-- Router Link -->
        ${router('docs', 'View Documentation')}

      </doge-box>
  `)
}
