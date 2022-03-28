import User from "@modules/user/infra/typeorm/entities/User";
import { createConnection } from "typeorm";

createConnection()
  .then(() => console.log("Conectado com Sucesso!"))
  .catch((error) => console.log(error));
