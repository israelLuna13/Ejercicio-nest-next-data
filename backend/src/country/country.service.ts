import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}
  create(createCountryDto: CreateCountryDto) {
    return 'This action adds a new country';
  }

  async findAll(take: number, skip: number) {
    // const countrys = await this.countryRepository.find({
    //   relations: {
    //     customers: true,
    //   },
    // });
    const options: FindManyOptions<Country> = {
      take,
      skip,
    };
    const [countrys, total] =
      await this.countryRepository.findAndCount(options);
    if (total === 0) {
      throw new NotFoundException('Not Found Countrys');
    }
    return { countrys, total };
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
