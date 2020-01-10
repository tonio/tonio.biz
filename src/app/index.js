import './app.less'

const trigger = document.querySelector('.map-trigger')
trigger.addEventListener(
  'click',
  e => import(/* webpackChunkName: "map" */ './map').then(module => {
   module.default()
  })
)
