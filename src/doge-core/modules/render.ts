import {initComplexTags, $, routerClick} from '@doge/modules'
import {checkRoutingOptions, checkTagsOptions} from '@doge/options'

export const render = (component: any, selector?: string) => {
  try {
    if (selector && component) {
      $(selector).html((new component).getTemplate())
      afterRenderProcess()
    } else if (!selector && component) {
      setTimeout(() => {
        afterRenderProcess()
      })
      return (new component).getTemplate()
    } else {
      throw new Error('Component cannot be undefined or null.')
    }
  } catch (e) {
    renderError(e.toString())
  }
}

const renderError = (e: string) => {
  console.error(`Render Error!: ${e}`)
}

export const afterRenderProcess = () => {
  if (checkTagsOptions()) initComplexTags()
  if (checkRoutingOptions()) routerClick()
}
