import { Module } from '@nestjs/common';
import { AliceService } from './services/alice.service';
import { AliceController } from './controllers/alice.controller';

@Module({
  controllers: [AliceController],
  providers: [AliceService],
})
export class AliceModule {}
