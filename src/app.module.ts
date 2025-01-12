import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from './graphql/resolvers/userResolver/UserResolver';
import { UserSettingsRevolver } from './graphql/resolvers/userResolver/UserSettingsRevolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql'
    })
  ],
  controllers: [AppController],
  providers: [AppService, UserResolver, UserSettingsRevolver],
})
export class AppModule {}
