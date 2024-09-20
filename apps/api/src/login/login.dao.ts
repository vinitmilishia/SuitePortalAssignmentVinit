import { Injectable } from '@nestjs/common';
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

export interface AdminDB {
    username: string;
    password: string;
}

export interface AdminLoginData {
  adminCredentials: AdminDB[];
}

const adapter = new FileSync<AdminDB>('./db/login.json')
const db = low(adapter)

db.defaults({ adminCredentials: [] }).write();

@Injectable()
export class LoginDao {

  private get collection(): any {
    return db.get('adminCredentials');
  }

  constructor() {
    //
  }

  async getAdminLogin(username: string): Promise<AdminDB | undefined> {
    return this.collection.find({ username }).value();
  }

  async addAdminLogin(admin: AdminDB): Promise<void> {
    await this.collection.push(admin).write();
  }

}
