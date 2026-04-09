import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productRepository: Repository<Products>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(take: number, skip: number) {
    //con esto evitamos repetir codigo
    //opciones de filtrado para la consulta
    const options: FindManyOptions<Products> = {
      //crear una funcion donde el usuario escoja el tipo de orden
      // order: {
      //   id: 'DESC',
      // },
      take,
      skip,
    };
    const [products, total] =
      await this.productRepository.findAndCount(options);
    if (total === 0) {
      throw new NotFoundException('Not Found Product');
    }
    return {
      products,
      total,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
