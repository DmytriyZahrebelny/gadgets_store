import { Module } from '@nestjs/common';
import { SmartphoneService } from './smartphone.service';

@Module({
  providers: [SmartphoneService]
})
export class SmartphoneModule {}
