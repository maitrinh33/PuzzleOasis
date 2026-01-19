import Experience from '@experience'
import Loading from '@ui/loading'
import Debug from '@utils/debug'
import DoubleTapPreventer from '@utils/double-tap-preventer'
import Fullscreen from '@utils/fullscreen'
import Versioning from '@utils/versioning'
import 'core-js/actual'

DoubleTapPreventer.init()
Versioning.init('1.3', () => {
  localStorage.removeItem('debug')
  localStorage.removeItem('settings')

  const currentState = localStorage.getItem('state')
  if (currentState) localStorage.setItem('state', btoa(currentState))
})
Fullscreen.init('#fullscreen')

const loading = Loading.init()
const debug = Debug.init()
Experience.init('canvas.webgl', loading, debug)
