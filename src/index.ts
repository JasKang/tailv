import './_styles/index.scss'
import type { Plugin } from 'vue'

import EButton from './EButton.vue'
import EButtonGroup from './EButtonGroup.vue'
import ERadio from './ERadio.vue'
import ECheckbox from './ECheckBox.vue'
import EInput from './EInput.vue'

export { EButton, EButtonGroup, ECheckbox, ERadio }

export const Elenext: Plugin = {
  install(app, options) {
    app.component('EButton', EButton)
    app.component('EButtonGroup', EButtonGroup)
    app.component('ECheckbox', ECheckbox)
    app.component('ERadio', ERadio)
    app.component('EInput', EInput)
  },
}

// export default Elenext
