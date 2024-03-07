import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MainDashboard from '../../views/index.vue'

describe.skip('MainDashboard', () => {
  it.skip('renders properly', () => {
    // const wrapper = mount(MainDashboard, { props: { msg: 'Hello Vitest' } })
    const wrapper = mount(MainDashboard)
    expect(wrapper.text()).toContain('Affluent')
  })
})
