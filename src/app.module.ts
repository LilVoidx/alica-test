import { Module } from '@nestjs/common';

import { AliceModule } from './alice/alice.module';

@Module({
  imports: [AliceModule],
})
export class AppModule {}
