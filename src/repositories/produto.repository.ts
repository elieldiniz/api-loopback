import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreDataSource} from '../datasources';
import {Produto, ProdutoRelations} from '../models';

export class ProdutoRepository extends DefaultCrudRepository<
  Produto,
  typeof Produto.prototype.id,
  ProdutoRelations
> {
  constructor(
    @inject('datasources.postgre') dataSource: PostgreDataSource,
  ) {
    super(Produto, dataSource);
  }
}
