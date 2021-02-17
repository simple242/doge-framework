import {$, afterRenderProcess, render} from '@doge/modules'
import {Routing} from '@doge/models'
import {checkRoutingOptions} from '@doge/options'

const routing: Routing[] = []

export const router = (link: string, title: string = ''): string | void => {
  if (checkRoutingOptions()) {
    try {
      if (link && title) {
        return `<router link="${link}">${title}</router>`
      } else {
        throw new Error('Router params is invalid!')
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export const routerLayout = (rid: string, component: any): string | void => {
  if (checkRoutingOptions()) {
    try {
      if (rid && component) {
        return `<router-layout rid="${rid}">${render(component)}</router-layout>`
      } else {
        throw new Error('Router layout params is invalid!')
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export const routerClick = (): void => {
  if (checkRoutingOptions()) {
    try {
      const routers = $().all('router')
      routers.forEach(router => {
        if (router) ($(router).on('click', () => {
          const layout = router.closest('router-layout')
          if (layout) {
            const link = router.getAttribute('link')
            if (link) {
              history.pushState({'page': link}, '', link)
              navigate(link)
            } else {
              throw new Error('Router link not found!')
            }
          }
        }))
      })
    } catch (e) {
      console.error('Router Error:', e)
    }
  }
}

export const updateRouting = (newRouting: Routing): void => {
  if (checkRoutingOptions()) {
    routing.push(newRouting)
  }
}

export const observeHistory = (): void => {
  if (checkRoutingOptions()) {
    window.onpopstate = (e: PopStateEvent) => {
      const link: string = e.state?.page ? e.state?.page : '/'
      navigate(link)
    }

    observeNotFound()
  }
}

const observeNotFound = (): void => {
  if (checkRoutingOptions()) {
    const url = window.location?.pathname ? window.location?.pathname.replace(/\//g, '') : ''

    if (url) {
      navigate(url)
    }
  }
}

let isNavigate: boolean = true

const navigate = async (link: string): Promise<any> => {
  if (checkRoutingOptions()) {
    if (!isNavigate) return
    isNavigate = false

    let routingItem = null

    routing.forEach((r: Routing) => {
      const route = r.routes.find(el => el.link === link)
      if (route) {
        routingItem = {
          layout: r.layout,
          route
        }
      }
    })

    if (routingItem?.route && routingItem?.layout) {
      const routerLayout = $(`router-layout[rid=${routingItem.layout}]`)

      if (routingItem.route && routerLayout) {
        routerLayout.innerHTML = (new routingItem.route.component).getTemplate()
        afterRenderProcess()
      }
    }

    isNavigate = true
  }
}
