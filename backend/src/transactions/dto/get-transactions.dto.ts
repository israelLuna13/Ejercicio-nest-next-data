import { IsNumberString, IsOptional } from 'class-validator';
//tipado del los parametros de la url
export class GetTransactionsQueryDto {
  @IsOptional()
  @IsNumberString({}, { message: 'Amount most be number' })
  take: number;

  @IsOptional()
  @IsNumberString({}, { message: 'Skip most be number' })
  skip: number;
}
