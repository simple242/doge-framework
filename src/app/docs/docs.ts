import {Component} from '@doge/models'

export class DocsComponent implements Component {
  getTemplate() {
    return template()
  }
}

const template = (props?: any): string => {

  return (`
    <doge-box class="docs">
        <doge-box class="container">
          <doge-heading class="docs__title">Introduction</doge-heading>
          <doge-text class="doge__text">Doge Framework - simple TypeScript framework for building small applications.</doge-text>

          <doge-heading class="docs__title">Getting Started</doge-heading>
          <doge-text class="doge__text">Run the following commands in the console:</doge-text>
          <doge-box class="code">
            <doge-text class="code__item">git clone ...</doge-text>
            <doge-text class="code__item">cd doge-framework</doge-text>
            <doge-text class="code__item">npm install</doge-text>
          </doge-box>
          <doge-text class="doge__text">NPM scripts:</doge-text>
          <doge-box class="code">
            <doge-text class="code__item">
                npm run start
                <doge-text class="code__comment">// launching the application in the browser</doge-text>
            </doge-text>
            <doge-text class="code__item">
                npm run build
                <doge-text class="code__comment">// build application</doge-text>
            </doge-text>
            <doge-text class="code__item">
                npm run build:prod
                <doge-text class="code__comment">// build application in production mode</doge-text>
            </doge-text>
          </doge-box>

          <doge-heading class="docs__title">Opportunities</doge-heading>
          <doge-list class="docs__list">
            <doge-item class="docs__listItem">Typescript</doge-item>
            <doge-item class="docs__listItem">SASS</doge-item>
            <doge-item class="docs__listItem">SPA</doge-item>
            <doge-item class="docs__listItem">Component architecture of applications</doge-item>
            <doge-item class="docs__listItem">More than 20 custom tags</doge-item>
            <doge-item class="docs__listItem">Routing</doge-item>
            <doge-item class="docs__listItem">HTTP module</doge-item>
            <doge-item class="docs__listItem">DOM module</doge-item>
            <doge-item class="docs__listItem">and other...</doge-item>
          </doge-list>

          <doge-heading class="docs__title">Basic component structure</doge-heading>
          <doge-text class="doge__text">Simple component:</doge-text>
          <doge-box class="code">
<pre class="code__item">import {Component} from '@doge/models'

export class ComponentClassName implements Component {

  public getTemplate(): string {
    return template()
  }
}

const template = (props?: any): string => {

  return (\`
    &lt;doge-text&gt;Hello Doge!&lt;/doge-text&gt;
  \`)
}
</pre>
          </doge-box>

          <doge-text class="doge__text">Component with params:</doge-text>
          <doge-box class="code">
<pre class="code__item">import {Component} from '@doge/models'

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

  return (\`
    &lt;doge-text&gt;Hello Doge!&lt;/doge-text&gt;
    \`)
}
</pre>
          </doge-box>


          <doge-heading class="docs__title">Render component method</doge-heading>
          <doge-text class="doge__text">Render Component in template:</doge-text>
          <doge-box class="code">
<pre class="code__item">const template = (\`
    \${render(ComponentClassName)}
\`)</pre>
          </doge-box>

          <doge-text class="doge__text">Render Component in DOM Node:</doge-text>
          <doge-box class="code">
<pre class="code__item">render(ComponentClassName, 'selectorName')</pre>
          </doge-box>

           <doge-text class="doge__text">Render Component white params:</doge-text>
          <doge-box class="code">
<pre class="code__item">render(ComponentClassName.setParams({params}), 'selectorName')</pre>
          </doge-box>

          <doge-heading class="docs__title">Routing</doge-heading>
          <doge-text class="doge__text">Link building (routing.ts):</doge-text>
          <doge-box class="code">
<pre class="code__item">import {updateRouting} from '@doge/modules'
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
</pre>
        </doge-box>

        <doge-text class="doge__text">Register Router Layout (app.ts):</doge-text>
        <doge-box class="code">
<pre class="code__item">import {Component} from '@doge/models'
import {routerLayout} from '@doge/modules'

import {MainComponent} from './main/main'

export class AppComponent implements Component {

  public getTemplate(): string {
    return template()
  }
}

const template = (props?: any): string => {
  return (\`
    <!-- Router Layout -->
    \${routerLayout('main', MainComponent)}
  \`)
}
</pre>
        </doge-box>

        <doge-text class="doge__text">Register Router Link(s) in template of MainComponent:</doge-text>
        <doge-box class="code">
<pre class="code__item">const template = (props?: any): string => {

  return (\`
    \${router('docs', 'View Documentation')}
    \`)
}</pre>
        </doge-box>

          <doge-heading class="docs__title">HTTP module</doge-heading>
          <doge-text class="doge__text">HTTP module is an abstraction over the popular <doge-bold>Axios</doge-bold> library. Basic methods:</doge-text>
          <doge-list class="docs__list margin">
            <doge-item class="docs__listItem">http.request(config)</doge-item>
            <doge-item class="docs__listItem">http.get(url[, config])</doge-item>
            <doge-item class="docs__listItem">http.delete(url[, config])</doge-item>
            <doge-item class="docs__listItem">http.head(url[, config])</doge-item>
            <doge-item class="docs__listItem">http.options(url[, config])</doge-item>
            <doge-item class="docs__listItem">http.post(url[, data[, config]])</doge-item>
            <doge-item class="docs__listItem">http.put(url[, data[, config]])</doge-item>
            <doge-item class="docs__listItem">http.patch(url[, data[, config]])</doge-item>
          </doge-list>
          <doge-text class="doge__text">More details: <doge-link url="https://github.com/axios/axios" target="_blank"><doge-bold>Axios</doge-bold></doge-link></doge-text>

          <doge-heading class="docs__title">DOM module</doge-heading>
          <doge-text class="doge__text">Provides a function <doge-bold>$(selector?: string | Element)</doge-bold> that extends the native JavaScript interface - Element. Example:</doge-text>
        <doge-box class="code">
<pre class="code__item">const selector: string | Element = '#someElement'
// OR
const selector: string | Element = document.querySelector('#someElement')

$(selector).html('&lt;doge-text&gt;Hello Doge!&lt;/doge-text&gt;')

$().domLoad(callback)
</pre>
        </doge-box>
          <doge-text class="doge__text">Basic methods:</doge-text>
          <doge-list class="docs__list margin">
            <doge-item class="docs__listItem">all methods from native JavaScript interface Element</doge-item>
            <doge-item class="docs__listItem">$(selector).html = (node: string) => Element</doge-item>
            <doge-item class="docs__listItem">$(selector).clear = () => Element</doge-item>
            <doge-item class="docs__listItem">$(selector).on = (eventType: string, callback: any) => void</doge-item>
            <doge-item class="docs__listItem">$(selector).off = (eventType: string, callback: any) => void</doge-item>
            <doge-item class="docs__listItem">$().all = (selector: string) => Element[]</doge-item>
            <doge-item class="docs__listItem">$().domLoad = (callback: any) => void</doge-item>
            <doge-item class="docs__listItem">and other...</doge-item>
          </doge-list>
          <doge-text class="doge__text">More details can be found with the module along the way <doge-bold>doge-framework/src/doge-core/modules/dom.ts</doge-bold> </doge-text>

          <doge-heading class="docs__title">Framework options</doge-heading>
          <doge-text class="doge__text">The framework settings are available along the way <doge-bold>doge-framework/src/doge-core/options.ts</doge-bold></doge-text>
        <doge-box class="code">
<pre class="code__item">const options: Options = {
  enableDogeTags: true,
  enableRouting: true
}</pre>
        </doge-box>

          <doge-heading class="docs__title">Custom tags</doge-heading>
          <doge-text class="doge__text">Simple tags:</doge-text>
          <doge-list class="docs__list margin">
            <doge-item class="docs__listItem"><doge-bold>&lt;doge&gt;&lt;/doge&gt;</doge-bold> - main framework container</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-text&gt;some text&lt;/doge-text&gt;</doge-bold> - wrapper for text</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-bold&gt;some text&lt;/doge-bold&gt;</doge-bold> - wrapper for bold text</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-italic&gt;some text&lt;/doge-italic&gt;</doge-bold> - wrapper for italic text</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-cross&gt;some text&lt;/doge-cross&gt;</doge-bold> - wrapper for cross text</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-little&gt;some text&lt;/doge-little&gt;</doge-bold> - wrapper for little text</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-heading&gt;some text&lt;/doge-heading&gt;</doge-bold> - wrapper for title text</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-top&gt;some content&lt;/doge-top&gt;</doge-bold> - wrapper for header blocks</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-content&gt;some content&lt;/doge-content&gt;</doge-bold> - wrapper for main blocks</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-bottom&gt;some content&lt;/doge-bottom&gt;</doge-bold> - wrapper for bottom blocks</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-navigation&gt;some content&lt;/doge-navigation&gt;</doge-bold> - wrapper for navigation blocks</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-box&gt;some content&lt;/doge-box&gt;</doge-bold> - wrapper for simple blocks</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-central&gt;some content&lt;/doge-central&gt;</doge-bold> - wrapper for centered content</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-list&gt;doge items&lt;/doge-list&gt;</doge-bold> - list wrapper</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-item&gt;some text&lt;/doge-item&gt;</doge-bold> - list item</doge-item>
            <doge-item class="docs__listItem">and other...</doge-item>
          </doge-list>
          <doge-text class="doge__text">Complex tags:</doge-text>
          <doge-list class="docs__list margin">
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-link url="..."&gt;some text&lt;/doge-text&gt;</doge-bold> - analogue of the &lt;a&gt; tag, all attributes of the &lt;a&gt; tag are available, except for href, url is used instead</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-pic url="..."&gt;&lt;/doge-pic&gt;</doge-bold> - analogue of the &lt;img&gt; tag, all attributes of the &lt;img&gt; tag are available, except for src, url is used instead</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-btn&gt;some text&lt;/doge-btn&gt;</doge-bold> - analogue of the &lt;button&gt; tag, all attributes of the &lt;button&gt; tag are available</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-edit&gt;&lt;/doge-edit&gt;</doge-bold> - analogue of the &lt;input&gt; tag, all attributes of the &lt;input&gt; tag are available</doge-item>
            <doge-item class="docs__listItem"><doge-bold>&lt;doge-field&gt;some text&lt;/doge-field&gt;</doge-bold> - analogue of the &lt;textarea&gt; tag, all attributes of the &lt;textarea&gt; tag are available</doge-item>
            <doge-item class="docs__listItem">and other...</doge-item>
          </doge-list>

          <doge-heading class="docs__title">LICENSE</doge-heading>
          <doge-text class="doge__text">License: GNU General Public License v3.0</doge-text>
          <doge-text class="doge__text">IT IS FORBIDDEN TO CREATE FRAMEWORKS ON THE BASIS OF DOGE FRAMEWORKS!</doge-text>

        </doge-box>
    </doge-box>
  `)
}
