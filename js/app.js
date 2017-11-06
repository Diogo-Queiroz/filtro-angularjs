
(function () {
    var app = angular.module('BlazeStore', []);

    var StoreController = function ($scope) {

        $scope.mensagem = 'Olá Clientes, sou o AngularJS';

        $scope.categorias = [
            {
                nome: "Capacetes"
            },{
                nome: "Luvas"
            },{
                nome: "Joelheiras"
            }
        ];

        $scope.produtos = [
            {
                nome: "MT Optimus Escamoteável",
                preco: 399,
                categoria: "Capacetes",
                descricao: "Capacete escamoteável preto brilhoso com adesivo Itália 150",
                qtd: 1,
                image_url: 'mt-optimus-italia.jpg',
                tamanhos: [
                    62
                ]
            },{
                nome: "MT Optimus Escamoteável",
                preco: 399,
                categoria: "Capacetes",
                descricao: "Capacete escamoteável preto brilhoso",
                qtd: 1,
                image_url: 'mt-optimus-italia.jpg',
                tamanhos: [
                    58,
                    60
                ]
            },{
                nome: "MT Optimus Escamoteável",
                preco: 399,
                categoria: "Capacetes",
                descricao: "Capacete escamoteável preto fosco com viseira fumê",
                qtd: 1,
                image_url: 'mt-optimus-italia.jpg',
                tamanhos: [
                    58,
                    60
                ]
            },{
                nome: "Luvas TEXX de Couro de Cabra",
                preco: 199,
                categoria: "Luvas",
                descricao: "Luva TEXX de Couro de Cabra, mais suave e mais durável. Preto e Vermelho",
                qtd: 1,
                image_url: 'mt-optimus-italia.jpg',
                tamanhos: [
                    58,
                    60
                ]
            },{
                nome: "Aray Preto Fosco",
                preco: 2600,
                categoria: "Capacetes",
                descricao: "Capacete Aray Preto Fosco com isolamento acústico melhorado",
                qtd: 1,
                image_url: 'mt-optimus-italia.jpg',
                tamanhos: [
                    58,
                    60
                ]
            },{
                nome: "Joelheira Articulada Preta",
                preco: 130,
                categoria: "Joelheiras",
                descricao: "Joelheira Articulada Preta para melhor proteção das pernas e joelho fornecendo conforto e segurança",
                qtd: 1,
                image_url: 'mt-optimus-italia.jpg',
                tamanhos: [
                    58,
                    60
                ]
            },{
                nome: "Shark Raw Laranja",
                preco: 899,
                categoria: "Capacetes",
                descricao: "Shark Modelo RAW na cor Laranja",
                qtd: 1,
                image_url: 'shark_raw_laranja.jpg',
                tamanhos: [
                    62
                ]
            },{
                nome: "Shark Speed-R Sauer",
                preco: 2099,
                categoria: "Capacetes",
                descricao: "Shark Modelo Speed-R na cor preta com vermelho",
                qtd: 1,
                image_url: 'shark_speed-r_sauer.jpg',
                tamanhos: [
                    58,60
                ]
            },{
                nome: "Shark Vision-R Fluorescente",
                preco: 1599,
                categoria: "Capacetes",
                descricao: "Shark Modelo Vision-R Fluorescente amarelo",
                qtd: 1,
                image_url: 'shark_vision-r_fluorescente.jpg',
                tamanhos: [
                    58,56
                ]
            }
        ]

    };

    app.controller('StoreController', StoreController);
}());