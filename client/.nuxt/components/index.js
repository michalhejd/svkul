export { default as Footer } from '../..\\components\\footer.vue'
export { default as ItemBox } from '../..\\components\\item-box.vue'
export { default as Loader } from '../..\\components\\loader.vue'
export { default as MobileNav } from '../..\\components\\mobile-nav.vue'
export { default as Nav } from '../..\\components\\nav.vue'
export { default as AdminMenu } from '../..\\components\\admin\\admin-menu.vue'
export { default as AidsManageItemBox } from '../..\\components\\aids-manage\\aids-manage-item-box.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
