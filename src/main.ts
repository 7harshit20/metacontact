import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// const Moralis = require('moralis').default;

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333);

//   await Moralis.start({
//   apiKey: process.env.MORALIS_KEY,
// });
//  const abi = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_phone",
// 				"type": "string"
// 			}
// 		],
// 		"name": "addContact",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "phone",
// 				"type": "string"
// 			}
// 		],
// 		"name": "ContactAdded",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "contacts",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "phone",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "index",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getContact",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getContactCount",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]
//   const topic = 'ContactAdded(string,string)';
//   let response = await Moralis.Streams.add({
//     webhookUrl: process.env.MORALIS_WEBHOOK, // replace with your own webhook URL
//     description: 'Stream to listen to solidity event',
//     tag: 'metacontact',
//     chains: ['0xaa36a7'],
//     abi: abi,
//     topic0: [topic],
//     includeNativeTxs: true,
//     includeContractLogs: true,
//     includeInternalTxs: true,
//   });
//   const _id = response.toJSON().id;

//   // const _id = process.env.MORALIS_STREAM;

//   const list = [process.env.CONTACT_ADDRESS];
//   response = await Moralis.Streams.addAddress({
//     id: _id, // stream ID from the Moralis,
//     address: list,
//   });

//   console.log(response.toJSON());
  
}
bootstrap();
