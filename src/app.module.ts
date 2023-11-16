import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PenggunaModule } from './pengguna/pengguna.module';
import { CocotModule } from './cocot/cocot.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PenggunaModule,
    CocotModule,
    MongooseModule.forRoot(
      'mongodb+srv://threads-pengguna:xF6Us9WzDG8Gq70b@cluster0.8xgxvzr.mongodb.net/threads?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
