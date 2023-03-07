var app = angular.module('meuApp', []);
app.controller('meuController', function($scope) {
    $scope.arcondicionado = true;
    $scope.inverter = false;
    $scope.multisplit = false;
    $scope.energiasolar = false;
    
    $scope.funcaoArcondicionado = function() {
        $scope.arcondicionado = true;
        $scope.inverter = false;
        $scope.energiasolar = false;
        $scope.multisplit = false;
    }

    $scope.funcaoInverter = function() {
        $scope.inverter = true;
        $scope.arcondicionado = false;
        $scope.energiasolar = false;
        $scope.multisplit = false;
    }

    $scope.funcaoMultisplit = function() {
        $scope.multisplit = true;
        $scope.arcondicionado = false;
        $scope.inverter = false;
        $scope.energiasolar = false;
    }

    $scope.funcaoEnergiasolar = function() {
        $scope.energiasolar = true;
        $scope.arcondicionado = false;
        $scope.inverter = false;
        $scope.multisplit = false;
    }		
});

// Exibe o botão de voltar ao topo quando a página é rolada
window.onscroll = function() {
    mostrarBotaoVoltarTopo()
};

// Função que exibe ou oculta o botão de voltar ao topo dependendo da posição da página
function mostrarBotaoVoltarTopo() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn-voltar-topo").style.display = "block";
    } else {
        document.getElementById("btn-voltar-topo").style.display = "none";
    }
}

// Função que rola a página de volta para o topo
function voltarAoTopo() {
    document.body.scrollTop = 0; // Para browsers Safari
    document.documentElement.scrollTop = 0; // Para browsers Chrome, Firefox, IE e Opera
}