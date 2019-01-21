var g = G$('Edo', 'Serrano', 'es');
console.log(g);

//g.greet().greet(true).setLang('en').greet().greet(true).setLang('jp').greet().greet(true);
g.log(true);

//using jQuery to select greeting depending on html

$('#Login').click(function() {

    var loginGrtr = G$('Akari', 'Tamashiro');
    $('#logindiv').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log()

});