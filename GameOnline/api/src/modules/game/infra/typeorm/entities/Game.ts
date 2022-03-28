import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("game")
export default class Game {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  posX: number;

  @Column()
  posY: number;

  @Column()
  posLeft: number;

  @Column()
  posRight: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
