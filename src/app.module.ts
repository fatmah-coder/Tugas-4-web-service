import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { DestinasiModule } from './destinasi/destinasi.module.js';
import { UlasanModule } from './ulasan/ulasan.module.js';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // schema dihasilkan otomatis
      sortSchema: true,
    }),
    PrismaModule,
    DestinasiModule,
    UlasanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}