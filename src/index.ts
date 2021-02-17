import {$, render} from '@doge/modules'
import {observeHistory} from '@doge/modules'

import {AppComponent} from './app/app'
import './index.scss'
import './app/main/main'
import './app/routing'

$().domLoad(() => {
  render(AppComponent, 'doge')
  observeHistory()
})
