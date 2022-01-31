import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { join } from 'path';
import { AccountModule } from './account/account.module';
import { TransactionModule } from './transaction/transaction.module';
import { InstructionModule } from './instruction/instruction.module';
import { ProgramModule } from './program/program.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule,
    AccountModule,
    TransactionModule,
    InstructionModule,
    ProgramModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
