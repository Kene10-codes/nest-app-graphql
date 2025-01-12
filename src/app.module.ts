import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserSettingsRevolver } from './graphql/resolvers/userResolver/UserSettingsRevolver';
import { db } from './database/db'
import entities from './graphql/models/'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/UserModule';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: db.port,
      username: db.username,
      password: db.password,
      database: db.database,
      entities,
      synchronize: true
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, UserSettingsRevolver],
})
export class AppModule {}
