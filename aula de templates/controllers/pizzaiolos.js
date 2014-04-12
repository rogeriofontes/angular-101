angular.module('PizzaShow', []).controller('PizzaioloCtrl',
  function($scope) {
  $scope.pizzas = [
    {
      name : 'Calabresa',
      ingredients : [
        'Calabresa', 'Queijo', 'Orégano'
      ]
    },
    {
      name : 'Portuguesa',
      ingredients : [
        'Presunto', 'Mussarela', 'Milho', 'Ovo'
      ]
    },
    {
      name : 'Moda da casa',
      ingredients : [
        'Catupiry', 'Queijo', 'Banana', 'Goiaba'
      ]
    }
  ];

  $scope.customers = [
    {
      name : 'Soninha Catatau',
      history : {
        'Portuguesa' : 459
      }
    },
    {
      name : 'Michael Jackson',
      history : {
        'Portuguesa' : 23
      }
    },
    {
      name : 'Son Goku',
      history : {
        'Moda da casa' : 4598,
        'Portuguesa' : 664,
        'Calabresa' : 333
      }
    }
  ];
});