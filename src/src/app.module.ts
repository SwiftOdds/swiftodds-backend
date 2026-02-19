import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { WalletModule } from './wallet/wallet.module';
import { BetsModule } from './bets/bets.module';

@Module({
  imports: [AuthModule, WalletModule, BetsModule],
})
export class AppModule {}
