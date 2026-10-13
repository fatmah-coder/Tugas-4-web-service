import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Ulasan } from './entities/ulasan.entity.js';
import { CreateUlasanInput } from './dto/create-ulasan.input.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Resolver(() => Ulasan)
export class UlasanResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Mutation(() => Ulasan, { name: 'tambahUlasan' })
  async tambahUlasan(@Args('input') input: CreateUlasanInput) {
    return this.prisma.ulasan.create({ data: input });
  }
}