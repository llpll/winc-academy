

function huiswerkMaken(vak, callback) {
	console.log('Ok, ok, ik ga nu mijn ' + vak + ' huiswerk maken');
  setTimeout(function(){ callback(); }, 6000);
}

function klaarMetHuiswerk() {
	console.log('Ik ben klaar!');
}


huiswerkMaken('science', klaarMetHuiswerk);