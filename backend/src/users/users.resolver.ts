import { Int, Parent, ResolveField } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Resolver(of => User)
export class UsersResolver {
    constructor(private usersService: UsersService) {}

    @Query(returns => User)
    getUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
        return this.usersService.findOne(id)
    }
    
    @Query(returns => [User])
    users(): Promise<User[]> {
        return this.usersService.findAll()
    }
    
    @Mutation(returns => User)
    createUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
        return this.usersService.createUser(createUserInput)
    }
}
