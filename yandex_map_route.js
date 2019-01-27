ymaps.ready().done(function(ym){
	/**
    * Создаем мультимаршрут.
    * Первым аргументом передаем модель либо объект описания модели.
    * Вторым аргументом передаем опции отображения мультимаршрута.
    * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml
    * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRouteModel.xml
    */
   
   var a1 = 55.751971;
   var a2 = 37.623948;
   var a3;
   var a4;
   var a5;
   var _this = this;
   /*if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(
           function(position) {
               _this.a4 = position.coords.latitude; 
               _this.a5 = position.coords.longitude; 
           },
           function errorCallback(error) {
                   
           },
           {
               maximumAge:Infinity,
               timeout:5000
           }
       );
   }*/

   //navigator.geolocation.getCurrentPosition();
   var geolocation = ym.geolocation;   
   geolocation.get({
       provider: 'auto',
       mapStateAutoApply: true
   }).then(function (result) {
        _this.a3 = result.geoObjects.get(0).geometry.getCoordinates();

       if(_this.a3[0].toString().length > 0){
            _this.a4 = _this.a3[0];
            _this.a5 = _this.a3[1];
			//alert(_this.a4);
			
			var multiRoute = new ym.multiRouter.MultiRoute({
			   // Описание опорных точек мультимаршрута.
			   
			   referencePoints: [
				   [_this.a4, _this.a5],
				   "143405, Московская область, Красногорский район, поселок Гольево, ул. Красная слободка, д. 47"
			   ],
			   // Параметры маршрутизации.
			   params: {
				   // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
				   results: 2
			   }
		   }, {
			   // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
			   boundsAutoApply: true
		   });

		   // Создаем кнопки для управления мультимаршрутом.
		   var trafficButton = new ym.control.Button({
				   data: { content: "Учитывать пробки" },
				   options: { selectOnClick: true }
			   }),
			   viaPointButton = new ym.control.Button({
				   data: { content: "Добавить транзитную точку" },
				   options: { selectOnClick: true }
			   });

		   // Объявляем обработчики для кнопок.
		   trafficButton.events.add('select', function () {
			   /**
				* Задаем параметры маршрутизации для модели мультимаршрута.
				* @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRouteModel.xml#setParams
				*/
			   multiRoute.model.setParams({ avoidTrafficJams: true }, true);
		   });

		   trafficButton.events.add('deselect', function () {
			   multiRoute.model.setParams({ avoidTrafficJams: false }, true);
		   });

		   viaPointButton.events.add('select', function () {
			   var referencePoints = multiRoute.model.getReferencePoints();
			   referencePoints.splice(1, 0, "Москва, ул. Солянка, 7");
			   /**
				* Добавляем транзитную точку в модель мультимаршрута.
				* Обратите внимание, что транзитные точки могут находится только
				* между двумя путевыми точками, т.е. не могут быть крайними точками маршрута.
				* @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRouteModel.xml#setReferenceP...
				*/
			   multiRoute.model.setReferencePoints(referencePoints, [1]);
		   });

		   viaPointButton.events.add('deselect', function () {
			   var referencePoints = multiRoute.model.getReferencePoints();
			   referencePoints.splice(1, 1);
			   multiRoute.model.setReferencePoints(referencePoints, []);
		   });

		   // Создаем карту с добавленными на нее кнопками.
		   var myMap = new ym.Map('map', {
			   center: [_this.a4, _this.a5],
			   zoom: 7,
			   controls: [trafficButton]
		   }, {
			   buttonMaxWidth: 300
		   });

		   // Добавляем мультимаршрут на карту.
		   myMap.geoObjects.add(multiRoute);
			
       }

   });
   
});