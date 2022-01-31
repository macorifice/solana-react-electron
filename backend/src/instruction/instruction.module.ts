import { Module } from '@nestjs/common';
import { InstructionService } from './instruction.service';
import { InstructionResolver } from './instruction.resolver';

@Module({
  providers: [InstructionResolver, InstructionService]
})
export class InstructionModule {}
