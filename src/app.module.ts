import { Module } from '@nestjs/common';
import { UserCredentialModule } from './user/user_credential/user_credential.module';
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule, ConfigService} from "@nestjs/config"
import { BlockchainTransactionModule } from './user/blockchain_transaction/blockchain_transaction.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: process.env.MONGO_URI,
        monitorCommands: true,
      }),
      inject: [ConfigService],
    }),
    UserCredentialModule,
    BlockchainTransactionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  
}
