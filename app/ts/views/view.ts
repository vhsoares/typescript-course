import {logarTempoDeExecucao} from '../helpers/decorators/index';
export abstract class View<T> {
  protected _elemento: JQuery;
  private _escapar?: boolean;

  constructor(selector: string, escapar?: boolean) {
    this._elemento = $(selector);
    this._escapar = escapar;
  }

  update(model: T): void {
    let template = this.template(model);

    if(this._escapar) 
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
      
    this._elemento.html(template); 
  }

  abstract template(model: T): string;
}
