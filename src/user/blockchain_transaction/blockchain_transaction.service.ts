import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Network, NetworkDocument } from './network.model';
import { Model } from 'mongoose';
import { Transaction, TransactionDocument } from './transaction.model';

@Injectable()
export class BlockchainTransactionService {

  constructor(
    @InjectModel(Network.name) private networkModel : Model<NetworkDocument>,
    @InjectModel(Transaction.name) private transactionModel : Model<TransactionDocument>,
  ){}

  save(data) {
    return new this.networkModel(data).save();
  }

  find(data){
    return this.networkModel.find(data)
  }

   findOneAndUpdate(key, data) {
    return this.networkModel.findOneAndUpdate(key, data, { new: true });
  }

  saveTransaction(data) {
    return new this.transactionModel(data).save();
  }

  findTransaction(data){
    return this.transactionModel.find(data)
  }

}
