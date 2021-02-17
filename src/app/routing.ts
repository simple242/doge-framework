import {updateRouting} from '@doge/modules'
import {Routing} from '@doge/models'

import {DocsComponent} from './docs/docs'
import {MainComponent} from './main/main'

const routing: Routing = {
  layout: 'main',
  routes: [
    {
      link: '/',
      component: MainComponent

    },
    {
      link: 'docs',
      component: DocsComponent
    }
  ]
}

updateRouting(routing)
