import {Map, View} from 'ol'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import fromLonLat from 'ol/geom/Point'

export default () => {
  const map = new Map({
    target: document.querySelector('.map'),
    layers: [
      new TileLayer({
        source: new XYZ({
          url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        })
      })
    ],
    view: new View({
      center: fromLonLat(653464, 5720928),
      zoom: 13
    })
  })
  map.updateSize()
}
