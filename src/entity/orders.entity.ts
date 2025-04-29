import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Orders { 
    @PrimaryGeneratedColumn({type: "int"})
    id : number;

    @Column({ type: "int", nullable: true })
    user_id: number;

    @Column({ type: "int", nullable: true })
    seller_id: number;

    @Column({ type: "int", nullable: true })
    product_id: number;

    @Column({ type: "int", nullable: true })
    amount: number;

    @Column({ type: "varchar" })
    merchantUip: string;

    @Column({ type: "varchar" })
    status: string;

    @Column({ type: "varchar" })
    fail_reason: string;

    @Column({ type: "varchar" })
    modified: string;

    @Column({ type: "varchar" })
    create_date: string;
  

constructor(
    id: number,
    user_id: number,
    seller_id: number,
    product_id: number,
    amount: number,
    merchantUip: string,
    status: string,
    fail_reason: string,
    modified: string,
    create_date: string

){
    this.id = id;
    this.user_id = user_id;
    this.seller_id = seller_id;
    this.product_id = product_id;
    this.amount = amount;
    this.merchantUip = merchantUip;
    this.status = status;
    this.fail_reason = fail_reason;
    this.modified = modified;
    this.create_date = create_date;
}

}