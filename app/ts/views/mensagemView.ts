import { View } from './view';

export class MensagemView extends View<string>{

  template(model: string): string {
    return model;
  }
}
