import { Controller, Post, Body } from '@nestjs/common';
import { AliceService } from '../services/alice.service';
import { AliceRequest, AliceResponse } from '../interfaces/alice.interface';

@Controller('alice')
export class AliceController {
  constructor(private readonly aliceService: AliceService) {}

  @Post()
  handleAliceRequest(@Body() body: AliceRequest): AliceResponse {
    return this.aliceService.getSimpleResponse(body);
  }
}
