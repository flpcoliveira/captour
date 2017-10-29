angular.module('app.controllers', [])
  
.controller('objetivosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.groups = [];
    $scope.groups.push({
        id: 1,
        concluido: false,
        resumo: 'Visita ao Convento da Penha',
        descricao: 'O Convento da Penha é um dos santuários religiosos mais antigos do Brasil, localizado no município de Vila Velha, estado do Espírito Santo. Está situado no alto de um penhasco, a 154 metros de altitude, sendo uma das igrejas mais antigas do estado, cujas obras avançavam aos poucos e tiveram início por volta de 1558, a mando de frei Pedro Palácios.',
        atividades: [
            'Visitar a sala dos milagres',
            'Visitar o convento',
            'Percorrer o caminho das pedras'
        ],
        show: false,
        iconeEsquerda: 'ion-trophy',
        iconeDireita: 'ion-android-star',
        imagem: 'convento-penha.jpg',
        pontuacao: 600
    });
    $scope.groups.push({
        id: 2,
        concluido: true,
        resumo: 'Trilha no Mestre Álvaro',
        descricao: 'O Mestre Álvaro é considerado uma das maiores elevações litorâneas (planalto) da costa brasileira[carece de fontes] e abriga uma das últimas áreas de Mata Atlântica de altitude do Espírito Santo. É um maciço costeiro que possui formato semicircular em planta, estruturado em um corpo de rocha intrusiva[1] (plutônica) granítica  com cerca de 833 metros de altitude no Estado do Espírito Santo.',
        atividades: [
            'Circuito Turístico Pitanga',
            'Trilha'
        ],
        show: false,
        iconeEsquerda: 'ion-ios-sunny',
        iconeDireita: 'ion-checkmark',
        imagem: 'mestre-alvaro.jpg'
        ,pontuacao: 500
    });
    $scope.groups.push({
        id: 3,
        concluido: false,
        resumo: 'Festa do Morango de D. Martins',
        descricao: 'A maior festa de morango do universo',
        atividades: [
            'Show Com o Michel Teló',
            'Comidas Típicas',
            'Caminhada do Morango'
        ],
        show: false,
        iconeEsquerda: 'ion-ios-snowy',
        iconeDireita: 'ion-android-star-half',
        imagem: 'festa-morango.png',
        pontuacao: 300
    });

    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function (group) {
        group.show = !group.show;
    };
    $scope.isGroupShown = function (group) {
        return group.show;
    };

}])
   
.controller('perfilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('feedCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('mapsExampleCtrl', ['$scope', 'uiGmapGoogleMapApi', function($scope, uiGmapGoogleMapApi) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps){
        // Configuration needed to display the road-map with traffic
        // Displaying Ile-de-france (Paris neighbourhood)
        $scope.map = {
            center: {
              latitude: -23.598763,
              longitude: -46.676547
            },
            zoom: 13,
            options: {
                mapTypeId: google.maps.MapTypeId.ROADMAP, // This is an example of a variable that cannot be placed outside of uiGmapGooogleMapApi without forcing of calling the google.map helper outside of the function
                streetViewControl: false,
                mapTypeControl: false,
                scaleControl: false,
                rotateControl: false,
                zoomControl: false
            }, 
            showTraficLayer:true
        };
    });
}])
   
.controller('rankingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('capCoinCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('capShopCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 