import {Entity, model, property} from '@loopback/repository';

@model()
export class Produto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  categoria: string;

  @property({
    type: 'number',
  })
  cost?: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;


  constructor(data?: Partial<Produto>) {
    super(data);
  }
}

export interface ProdutoRelations {
  // describe navigational properties here
}

export type ProdutoWithRelations = Produto & ProdutoRelations;
