import { BlockChain } from "@/core";
import { Block } from "@/core/blockchain/block";
import React from "react";
import { ExamStep, IBlockChainContext } from "./types";

export const BlockChainContext = React.createContext<IBlockChainContext>({
  step: "generate",
  newBlock: null,
  blockchain: [],
  blockchainObj: new BlockChain(),

  onGenerate: (data: string) => {},
  onVerify: (nonce: number) => {},
  onRegist: () => {},
});

export function BlockChainProvider({ children }: React.PropsWithChildren<{}>) {
  const [step, setStep] = React.useState<ExamStep>("generate");
  const [newBlock, setNewBlock] = React.useState<Block | null>(null);
  const blockchainObj = React.useRef<BlockChain>(new BlockChain());

  const [blockchain, setBlockChain] = React.useState<Block[]>(
    blockchainObj.current.chain.chain
  );

  const onGenerate = React.useCallback((data: string) => {}, []);

  const onVerify = React.useCallback((nonce: number) => {}, []);

  const onRegist = React.useCallback(() => {}, []);

  return (
    <BlockChainContext.Provider
      value={{
        blockchainObj: blockchainObj.current,
        step,
        newBlock,
        blockchain,
        onGenerate,
        onVerify,
        onRegist,
      }}>
      {children}
    </BlockChainContext.Provider>
  );
}
