import { BlockChain } from "@/core";
import { Block } from "@/core/blockchain/block";

export type ExamStep = "generate" | "verify" | "success";

export interface IBlockChainContext {
  step: ExamStep;
  newBlock: Block | null;
  blockchain: Block[];
  blockchainObj: BlockChain;

  onGenerate: (data: string) => void;
  onVerify: (nonce: number) => void;
  onRegist: () => void;
}
