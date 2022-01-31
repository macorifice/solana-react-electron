import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramResolver } from './program.resolver';

@Module({
  providers: [ProgramResolver, ProgramService]
})
export class ProgramModule {}
