const logger = require('../logger');
const {Bank, Transaction} = require('../modules/bank/model');
const {
 HTTP_CREATED,
 HTTP_OK,
 HTTP_INTERNAL_SERVER_ERROR,
 HTTP_NOT_FOUND
} = require('../utils/http.response.code');
const {
 BANK_CREATED,
 Transaction_CREATED,
 BANK_RETRIEVED,
 SOMETHING_WENT_WRONG,
 BANK_NOT_FOUND,
 INTERNAL_SERVER_ERROR,
 BANK_CREATED_FAILED,
 BANK_UPDATED,
 WITHDRAWAL_CREATED
} = require("../utils/http.response.message"), {
 gen
} = require("../utils/http.response");

class BankService extends Bank {
 static async open(id) {
  try{
  const res = await this.create({
   user: id
  });
  if(!res) throw gen(HTTP_INTERNAL_SERVER_ERROR, BANK_CREATED_FAILED)
  return gen(HTTP_CREATED, BANK_CREATED, res)
 }catch(e){
  logger.error(e)
  if (e.code) throw e
   else {
    throw gen(HTTP_INTERNAL_SERVER_ERROR, SOMETHING_WENT_WRONG, e)
   }
  }
 }

 static async topUp (id, data, status, isWithdrawal) {
  
  const bank = await this.findOne({user:id})
  if(data.amount && !isWithdrawal) {
   bank._doc.balance += Number(data.amount)
   bank._doc.invested += Number(data.amount)
  }else bank._doc.balance -= Number(data.amount)

  if(data.profit) {
   bank._doc.profits = (parseFloat(data.profit)+parseFloat(bank.profits)).toFixed(2)
  }

  delete bank._id
  delete bank.user;

  let result;
  if(status == 1) result = await this.findOneAndUpdate({user: id}, {$set: bank}) 
  else result = {};
  console.log(result)
  return gen(HTTP_CREATED, BANK_UPDATED, result)
 }

 static async retrieve(user) {
  try {
   const res = await this.findOne({
    user
   });

   if(!res) throw gen(HTTP_NOT_FOUND, BANK_NOT_FOUND);

   return gen(HTTP_OK, BANK_RETRIEVED, res);
  } catch (e) {
   logger.error(e)
   if (e.code) throw e
   else {
    throw gen(HTTP_INTERNAL_SERVER_ERROR, SOMETHING_WENT_WRONG, e)
   }
  }
 }

 static async createTransaction(data) {
  try{
   let percentage;
   const {user, plan} = data;
   console.log(data);
   switch(plan?.toLowerCase()){
    case "bronze plan": percentage = 18;
    break;
    case "silver plan": percentage = 21;
    break;
    case "diamond plan": percentage = 30;
    break;
    case "golden plan": percentage = 42;
    break;
    default: percentage = 18;
   }

  const done = await Transaction.create(data);
  if(plan) await this.findOneAndUpdate({user}, {plan: {name: plan, percentage}})
  
  if(done) {
   return gen(HTTP_CREATED, plan ? Transaction_CREATED : WITHDRAWAL_CREATED, done)
  }else{
   throw gen(HTTP_INTERNAL_SERVER_ERROR, SOMETHING_WENT_WRONG)
  }
 }catch(e){
  logger.error(e)
  if (e.code) throw e
   else {
    throw gen(HTTP_INTERNAL_SERVER_ERROR, SOMETHING_WENT_WRONG, e)
   }
  }
 }

 static async getTotalInvested() {
  const transactions = await Transaction.find();
   const data = transactions.map(transaction => transaction.amount).reduce((a, b) => a + b)
  return data
 }

 static async getBalance() {
  const bank = await this.find();
   const data = bank.map(balance => balance.invested).reduce((a, b) => a + b)
  return gen(HTTP_OK, 'Balance retrieved successfully', data)
 }

 static async deleteByOwner(id) {
  await this.findOneAndRemove({
   user: id
  })
  const res = await Transaction.deleteMany({
   user: id
  }) 
  return {
   name: "Bank",
   acknowledged: true,
   deletedCount: 1,
   transactions: res
  }
 }
}

module.exports = BankService;