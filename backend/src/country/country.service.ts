import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}
  create(createCountryDto: CreateCountryDto) {
    return 'This action adds a new country';
  }

  async findAll() {
    // const countrys = await this.countryRepository.find({
    //   relations: {
    //     customers: true,
    //   },
    // });
    const countrys = await this.countryRepository.find();
    if (countrys.length === 0) {
      throw new NotFoundException('Not Found Countrys');
    }
    return countrys;
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
