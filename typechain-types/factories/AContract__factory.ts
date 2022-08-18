/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AContract, AContractInterface } from "../AContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "changeCaller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "presentCaller",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506104a4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063b6cf67881461003b578063fc82c78714610057575b600080fd5b6100556004803603810190610050919061031a565b610075565b005b61005f61008f565b60405161006c91906103eb565b60405180910390f35b806000908051906020019061008b92919061011d565b5050565b6000805461009c9061043c565b80601f01602080910402602001604051908101604052809291908181526020018280546100c89061043c565b80156101155780601f106100ea57610100808354040283529160200191610115565b820191906000526020600020905b8154815290600101906020018083116100f857829003601f168201915b505050505081565b8280546101299061043c565b90600052602060002090601f01602090048101928261014b5760008555610192565b82601f1061016457805160ff1916838001178555610192565b82800160010185558215610192579182015b82811115610191578251825591602001919060010190610176565b5b50905061019f91906101a3565b5090565b5b808211156101bc5760008160009055506001016101a4565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610227826101de565b810181811067ffffffffffffffff82111715610246576102456101ef565b5b80604052505050565b60006102596101c0565b9050610265828261021e565b919050565b600067ffffffffffffffff821115610285576102846101ef565b5b61028e826101de565b9050602081019050919050565b82818337600083830152505050565b60006102bd6102b88461026a565b61024f565b9050828152602081018484840111156102d9576102d86101d9565b5b6102e484828561029b565b509392505050565b600082601f830112610301576103006101d4565b5b81356103118482602086016102aa565b91505092915050565b6000602082840312156103305761032f6101ca565b5b600082013567ffffffffffffffff81111561034e5761034d6101cf565b5b61035a848285016102ec565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561039d578082015181840152602081019050610382565b838111156103ac576000848401525b50505050565b60006103bd82610363565b6103c7818561036e565b93506103d781856020860161037f565b6103e0816101de565b840191505092915050565b6000602082019050818103600083015261040581846103b2565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061045457607f821691505b602082108114156104685761046761040d565b5b5091905056fea264697066735822122062c24121fb05d20c555abaea397d6193b77547f071bd82a39cdbf24ae18c949564736f6c63430008090033";

type AContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AContract__factory extends ContractFactory {
  constructor(...args: AContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AContract> {
    return super.deploy(overrides || {}) as Promise<AContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AContract {
    return super.attach(address) as AContract;
  }
  override connect(signer: Signer): AContract__factory {
    return super.connect(signer) as AContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AContractInterface {
    return new utils.Interface(_abi) as AContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AContract {
    return new Contract(address, _abi, signerOrProvider) as AContract;
  }
}