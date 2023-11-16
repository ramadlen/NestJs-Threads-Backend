import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  BadRequestException
} from '@nestjs/common';
import { CocotService } from './cocot.service';
import { CreateCocotDto } from './dto/create-cocot.dto';
import { UpdateCocotDto } from './dto/update-cocot.dto';

@Controller('cocot')
export class CocotController {
  constructor(private readonly cocotService: CocotService) {}

  @Post()
  create(@Body() createCocotDto: CreateCocotDto) {
    return this.cocotService.create(createCocotDto);
  }

  @Get()
  findAll(@Query() queryParams) {
    if (queryParams.parentId) {
      try {
        return this.cocotService.getCocotByParentId(queryParams.parentId);
      } catch (e) {
        throw new BadRequestException ('Something bad happened', {
           cause: new Error(e.message), description: 'Some error description' })
      }
    
    }
    return this.cocotService.getTopLevelCocot();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cocotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCocotDto: UpdateCocotDto) {
    return this.cocotService.update(+id, updateCocotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cocotService.remove(+id);
  }
}
