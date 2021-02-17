## Introduction
Doge Framework - simple TypeScript framework for building small applications
## Getting Started
Run the following commands in the console:
```
git clone https://github.com/simple242/doge-framework.git
cd doge-framework
npm install
```
NPM scripts:
```
npm run start        // launching the application in the browser
npm run build        // build application
npm run build:prod   // build application in production mode
```
## Opportunities
+ Typescript
+ SASS
+ SPA
+ Component architecture of applications
+ More than 20 custom tags
+ Routing
+ HTTP module
+ DOM module
+ and other...
## Basic component structure
Simple component:
```typescript
import {Component} from '@doge/models'

export class ComponentClassName implements Component {

  public getTemplate(): string {
    return template()
  }
}

const template = (props?: any): string => {

  return (`
    <doge-text/>Hello Doge</doge-text/>;
  `)
}
```
Component with params:
```typescript
import {Component} from '@doge/models'

export class ComponentClassName implements Component {

  private static params = {}

  public static setParams(params?: any) {
    this.params = params
    return this
  }

  public getTemplate(): string {
    const params = ComponentClassName.params
    return template()
  }
}

const template = (props?: any): string => {

  return (`
    <doge-text>Hello Doge!</doge-text>
  `)
}
```

## Render component method
Render Component in template:
```typescript
const template = (`
  ${render(ComponentClassName)}
`)
```
Render Component in DOM Node:
```typescript
render(ComponentClassName, 'selectorName')
```
Render Component with params:
```typescript
render(ComponentClassName.setParams({params}), 'selectorName')
```
## Routing
Link building (routing.ts):
```typescript
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
```
Register Router Layout (app.ts):
```typescript
import {Component} from '@doge/models'
import {routerLayout} from '@doge/modules'

import {MainComponent} from './main/main'

export class AppComponent implements Component {

  public getTemplate(): string {
    return template()
  }
}

const template = (props?: any): string => {
  return (`
    <!-- Router Layout -->
    ${routerLayout('main', MainComponent)}
  `)
}
```
Register Router Link(s) in template of MainComponent:
```typescript
const template = (props?: any): string => {

  return (`
    ${router('docs', 'View Documentation')}
  `)
}
```
## HTTP module
HTTP module is an abstraction over the popular **Axios** library. Basic methods:
+ http.request(config)
+ http.get(url[, config])
+ http.delete(url[, config])
+ http.head(url[, config])
+ http.options(url[, config])
+ http.post(url[, data[, config]])
+ http.put(url[, data[, config]])
+ http.patch(url[, data[, config]])

More details: [Axios](https://github.com/axios/axios)
## DOM module
Provides a function **$(selector?: string | Element)** that extends the native JavaScript interface - Element. Example:
```typescript
const selector: string | Element = '#someElement'
// OR
const selector: string | Element = document.querySelector('#someElement')

$(selector).html('<doge-text>Hello Doge!</doge-text>')

$().domLoad(callback)
```
Basic methods:
+ all methods from native JavaScript interface Element
+ $(selector).html = (node: string) => Element
+ $(selector).clear = () => Element
+ $(selector).on = (eventType: string, callback: any) => void
+ $(selector).off = (eventType: string, callback: any) => void
+ $().all = (selector: string) => Element[]
+ $().domLoad = (callback: any) => void
+ and other...

More details can be found with the module along the way **doge-framework/src/doge-core/modules/dom.ts**
## Framework options
The framework settings are available along the way **doge-framework/src/doge-core/options.ts**
```typescript
const options: Options = {
  enableDogeTags: true,
  enableRouting: true
}
```
## Custom tags
Simple tags:
+ **&lt;doge&gt;&lt;/doge&gt;** - main framework container
+ **&lt;doge-text&gt;some text&lt;/doge-text&gt;** - wrapper for text
+ **&lt;doge-bold&gt;some text&lt;/doge-bold&gt;** - wrapper for bold text
+ **&lt;doge-italic&gt;some text&lt;/doge-italic&gt;** - wrapper for italic text
+ **&lt;doge-cross&gt;some text&lt;/doge-cross&gt;** - wrapper for cross text
+ **&lt;doge-little&gt;some text&lt;/doge-little&gt;** - wrapper for little text
+ **&lt;doge-heading&gt;some text&lt;/doge-heading&gt;** - wrapper for title text
+ **&lt;doge-top&gt;some content&lt;/doge-top&gt;** - wrapper for header blocks
+ **&lt;doge-content&gt;some content&lt;/doge-content&gt;** - wrapper for main blocks
+ **&lt;doge-bottom&gt;some content&lt;/doge-bottom&gt;** - wrapper for bottom blocks
+ **&lt;doge-navigation&gt;some content&lt;/doge-navigation&gt;** - wrapper for navigation blocks
+ **&lt;doge-box&gt;some content&lt;/doge-box&gt;** - wrapper for simple blocks
+ **&lt;doge-central&gt;some content&lt;/doge-central&gt;** - wrapper for centered content
+ **&lt;doge-list&gt;doge items&lt;/doge-list&gt;** - list wrapper
+ **&lt;doge-item&gt;some text&lt;/doge-item&gt;** - list item
+ and other...

Complex tags:
+ **&lt;doge-link url="..."&gt;some text&lt;/doge-text&gt;** - analogue of the &lt;a&gt; tag, all attributes of the &lt;a&gt; tag are available, except for href, url is used instead
+ **&lt;doge-pic url="..."&gt;&lt;/doge-pic&gt;** - analogue of the &lt;img&gt; tag, all attributes of the &lt;img&gt; tag are available, except for src, url is used instead
+ **&lt;doge-btn&gt;some text&lt;/doge-btn&gt;** - analogue of the &lt;button&gt; tag, all attributes of the &lt;button&gt; tag are available
+ **&lt;doge-edit&gt;&lt;/doge-edit&gt;** - analogue of the &lt;input&gt; tag, all attributes of the &lt;input&gt; tag are available
+ **&lt;doge-field&gt;some text&lt;/doge-field&gt;** - analogue of the &lt;textarea&gt; tag, all attributes of the &lt;textarea&gt; tag are available
and other...
## LICENSE
License: GNU General Public License v3.0

**IT IS FORBIDDEN TO CREATE FRAMEWORKS ON THE BASIS OF DOGE FRAMEWORK!**
