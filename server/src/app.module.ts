import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmartphoneModule } from './smartphone/smartphone.module';
import { CompanyService } from './company/company.service';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [SmartphoneModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService, CompanyService],
})
export class AppModule {}
