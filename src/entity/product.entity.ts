import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Products {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "int", nullable: true })
  user_id: number;

  @Column({ type: "varchar", nullable: true, default: 1 })
  stock: string;

  @Column({ type: "varchar", nullable: true, default: "판매중" })
  status: string;

  @Column({ type: "varchar", nullable: true })
  color: string;

  @Column({ type: "varchar", nullable: true })
  size: string;

  @Column({ type: "varchar", nullable: false })
  amount: string;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @Column({ type: "timestamp", nullable: false })
  createDate: string;

  constructor(
    id: number,
    user_id: number,
    status: string,
    stock: string,
    color: string,
    size: string,
    amount: string,
    name: string,
    createDate: string
  ) {
    this.id = id;
    this.user_id = user_id;
    this.stock = stock;
    this.status = status;
    this.color = color;
    this.size = size;
    this.amount = amount;
    this.name = name;
    this.createDate = createDate;
  }
}
