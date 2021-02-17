import {$} from '@doge/modules'
import {Attribute} from '@doge/models'
import {checkTagsOptions} from '@doge/options'

export const initComplexTags = async () => {
  if (!checkTagsOptions()) return

  $().domLoad(() => {
    try {
      const dogeLinks = $().all('doge-link')

      dogeLinks.forEach(link => {
        if (link) {
          if (link.innerHTML.includes('<a')) return

          const text = link.innerHTML || ''
          const attr = Array.from(link.attributes) || []
          let options = ''

          attr.forEach((a: Attribute) => {
            if (a) {
              if (a.name === 'url') {
                options += `href="${a.value}" `
              } else if (a.name !== 'href') {
                options += `${a.name}="${a.value}" `
              }

              link.removeAttribute(a.name)
            }
          })


          link.innerHTML = `<a ${options.trim()}>${text}</a>`
        }
      })

    } catch (e) {
      console.error('DogeLinks Exception:', e)
    }

    try {
      const dogePics = $().all('doge-pic')

      dogePics.forEach(pic => {
        if (pic) {
          if (pic.innerHTML.includes('<img')) return

          const attr = Array.from(pic.attributes) || []
          let options = ''

          attr.forEach((a: Attribute) => {
            if (a) {
              if (a.name === 'url') {
                options += `src="${a.value}" `
              } else if (a.name !== 'src') {
                options += `${a.name}="${a.value}" `
              }

              pic.removeAttribute(a.name)
            }
          })

          pic.innerHTML = `<img ${options.trim()}>`
        }
      })
    } catch (e) {
      console.error('DogePics Exception:', e)
    }

    try {
      const dogeEdits = $().all('doge-edit')

      dogeEdits.forEach(edit => {
        if (edit) {
          if (edit.innerHTML.includes('<input')) return

          const attr = Array.from(edit.attributes) || []
          let options = ''

          attr.forEach((a: Attribute) => {
            if (a) options += `${a.name}="${a.value}" `
            edit.removeAttribute(a.name)
          })

          edit.innerHTML = `<input ${options.trim()}>`
        }
      })
    } catch (e) {
      console.error('DogeEdits Exception:', e)
    }

    try {
      const dogeFields = $().all('doge-field')

      dogeFields.forEach(field => {
        if (field) {
          if (field.innerHTML.includes('<textarea')) return

          const text = field.innerHTML || ''
          const attr = Array.from(field.attributes) || []
          let options = ''

          attr.forEach((a: Attribute) => {
            if (a) {
              if (a) options += `${a.name}="${a.value}" `
              field.removeAttribute(a.name)
            }
          })

          field.innerHTML = `<textarea ${options.trim()}>${text}</textarea>`
        }
      })

    } catch (e) {
      console.error('DogeFields Exception:', e)
    }

    try {
      const dogeBtns = $().all('doge-btn')

      dogeBtns.forEach(btn => {
        if (btn) {
          if (btn.innerHTML.includes('<button')) return

          const text = btn.innerHTML || ''
          const attr = Array.from(btn.attributes) || []
          let options = ''

          attr.forEach((a: Attribute) => {
            if (a) {
              if (a) options += `${a.name}="${a.value}" `
              btn.removeAttribute(a.name)
            }
          })

          btn.innerHTML = `<button ${options.trim()}>${text}</button>`
        }
      })

    } catch (e) {
      console.error('DogeBtns Exception:', e)
    }
  })
}
