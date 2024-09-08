function sumarCuadros(arrayNumeros) {
    let sumaTotal = 0;
    
    arrayNumeros.forEach(numero => {
      const digitos = numero.toString().split('');
      
      let sumaDigitos = 0;
      digitos.forEach(digito => {
        sumaDigitos += parseInt(digito);
      });
  
      sumaTotal += numero;
  
      const numeroLongitud = numero.toString().length;
      console.log('*' + '-'.repeat(numeroLongitud) + '*');
      console.log(`| ${numero} |`);
      console.log('*' + '-'.repeat(numeroLongitud) + '*');
      console.log(`  +${'-'.repeat(numeroLongitud)}+`);
    });

    const totalLongitud = sumaTotal.toString().length;
    console.log('*' + '-'.repeat(totalLongitud) + '*');
    console.log(`| ${sumaTotal} |`);
    console.log('*' + '-'.repeat(totalLongitud) + '*');
  }
  
  const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
  sumarCuadros(arrayNumeros);
  