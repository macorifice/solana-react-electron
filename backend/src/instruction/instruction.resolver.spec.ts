import { Test, TestingModule } from '@nestjs/testing';
import { InstructionResolver } from './instruction.resolver';
import { InstructionService } from './instruction.service';

describe('InstructionResolver', () => {
  let resolver: InstructionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstructionResolver, InstructionService],
    }).compile();

    resolver = module.get<InstructionResolver>(InstructionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
