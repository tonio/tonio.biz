const trigger = document.querySelector('.map')
trigger.addEventListener(
  'click',
  e => import(/* webpackChunkName: "map" */ './map').then(module => {
   module.default()
  })
)
