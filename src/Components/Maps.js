import React from 'react'
import { YMaps, Map, GeoObject } from '@pbe/react-yandex-maps'
import logo from '../Images/mglogomap.svg'

const Maps = () => {
	const defaultState = {
		center: [55.78488, 49.156942],
		zoom: 15,
		controls: [],
	}
	return (
		<div className='YMaps relative rounded-2xl overflow-hidden z-0'>
			<YMaps>
				<Map defaultState={defaultState} width={'100%'}>
					<GeoObject
						geometry={{ type: 'Point', coordinates: [55.78488, 49.156942] }}
						properties={{
							balloonContentHeader: 'Мейкгуд. Рекламное Агентство',
							balloonContentBody: 'Товарищеская улица, 27',
							balloonContentFooter: 'Пн-пт 09:00 – 17:00',
						}}
						modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
						options={{
							iconLayout: 'default#image',
							iconImageHref: logo,
							iconImageSize: [100, 46],
							iconImageOffset: [-50, -18],
						}}
					/>
					{/* <Placemark geometry={[55.78488, 49.156942]} /> */}
				</Map>
			</YMaps>
		</div>
	)
}

export default Maps
