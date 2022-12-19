import { BlockChain } from "@/core";
import { Block } from "@/core/blockchain/block";

export type ExamStep = "generate" | "verify" | "success";

export interface IBlockChainContext {
  step: ExamStep;
  newBlock: IBlock | null;
  blockchain: Block[];
  blockchainObj: BlockChain;
  difficulty: number | null;
  nonce: number | null;
  answerHash: string | null;
  verifyHash: string | null;

  onGenerate: (data: string) => void;
  onVerify: (nonce: number) => void;
  onRegist: () => void;
  onChangeDifficulty: (difficulty: number) => void;
  onChangeNonce: (nonce: number) => void;
}
