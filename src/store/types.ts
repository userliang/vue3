import NumFactoryStateTypes from './modules/NumFactory/types'
import { commonStateTypes } from './modules/common'

export default interface RootStateTypes {
  text: string
}

export interface AllStateTypes extends RootStateTypes {
  numFactoryModule: NumFactoryStateTypes
  commonModule: commonStateTypes
}
