export function logarTempoDeExecucao(seconds: boolean = false) {

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value

    descriptor.value = function(...args: any[]) {
      console.log('--------------------------------------------');
      console.log(`parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);

      let unidade = 'ms';
      let divisor = 1;
      if(seconds) {
        unidade = 's';
        divisor = 1000
      }
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`);
      console.log(`O método ${propertyKey} demorou ${(t2-t1) / divisor} ${unidade}`)
      return retorno;

    }
  }
 

}