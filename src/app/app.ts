import {Component} from '@doge/models'
import {render, routerLayout} from '@doge/modules'
import {HeaderComponent} from './components/header/header'
import {MainComponent} from './main/main'

export class AppComponent implements Component {

  public getTemplate(): string {
    return template()
  }
}

const template = (props?: any): string => {
  const title: string = 'Doge Framework - simple TypeScript framework for building small applications'

  return (`
    <!-- Render Component with params -->
    ${render(HeaderComponent.setParams({title}))}

    <!-- Router Layout -->
    ${routerLayout('main', MainComponent)}
  `)
}
