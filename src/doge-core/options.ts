import {Options} from './models/options'

const options: Options = {
  enableDogeTags: true,
  enableRouting: true
}

const isShowTagsError: boolean = true
const isShowRoutingError: boolean = true

export const checkTagsOptions = () => {
  if (options.enableDogeTags) {
    return true
  } else {
    if (isShowTagsError) console.error('Doge tags disabled!')
    return false
  }
}

export const checkRoutingOptions = () => {
  if (options.enableRouting) {
    return true
  } else {
    if (isShowRoutingError) console.error('Routing disabled!')
    return false
  }
}
