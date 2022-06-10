// TDD - Test Driven Development

var novoMapa = new Map();

class historyMap{

}

//11/11/11 as 11 da noite
novoMapa.set('11/11/11/2011 - 23:30 - URL',{title:'titulo do site',url:'url sozinha'});
novoMapa.set('11/11/11/2011 - 23:31 - URL',{});

var resultado = novoMapa.get('11/11/11/2011 - 23:30 - URL');
console.log(resultado)