import { CacheModule, Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { HttpModule } from "@nestjs/axios";
import { UserAdapter } from "./useradapter";
import { EsmwadModule } from "src/adapters/esamwad/esamwad.module";
import { SunbirdModule } from "src/adapters/sunbirdrc/subnbird.module";
import { HasuraModule } from "src/adapters/hasura/hasura.module";
import { ALTHasuraUserService } from "src/adapters/hasura/altUser.adapter";
const ttl = process.env.TTL as never;
@Module({
  imports: [
    HttpModule,
    EsmwadModule,
    SunbirdModule,
    HasuraModule,
    CacheModule.register({
      ttl: ttl,
    }),
  ],
  controllers: [UserController],
  providers: [UserAdapter,ALTHasuraUserService],
})
export class UserModule {}
