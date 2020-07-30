import {Imprimivel} from '../../models/index';

export function Imprime(...objetos: Imprimivel[]) {

  objetos.forEach(objeto => console.log(objeto.paraTexto()))

}