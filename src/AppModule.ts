import {Module} from "@nestjs/common";
import {HelloController} from "./hello/HelloController";

@Module({
  controllers: [HelloController]
})
export class AppModule {}