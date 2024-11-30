import { Body, Get, Path, Post, Query, Route } from "tsoa";
import { Controller } from "../../baseController";
import { UserCreationParams, UsersService } from "../services/usersService";

@Route("users")
export class UsersController extends Controller {
  @Get("{userId}")
  public async getUser(@Path() userId: number, @Query() name?: string) {
    const user = new UsersService().get(userId, name);
    return this.response(user);
  }

  @Post()
  public async createUser(@Body() requestBody: UserCreationParams) {
    new UsersService().create(requestBody);
    return this.response(undefined, 201, "Created");
  }
}
