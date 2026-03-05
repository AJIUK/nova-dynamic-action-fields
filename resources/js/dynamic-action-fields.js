import DynamicActionFieldModal from './components/DynamicActionFieldModal.vue'

Nova.booting((Vue, router, store) => {
  Vue.component('dynamic-action-field-modal', DynamicActionFieldModal)
})
