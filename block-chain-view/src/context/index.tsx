import { BlockChain } from "@/core";
import { Block } from "@/core/blockchain/block";
import React from "react";
import { ExamStep, IBlockChainContext } from "./types";
import hexToBinary from "hex-to-binary";

export const BlockChainContext = React.createContext<IBlockChainContext>({
  step: "generate",
  newBlock: null,
  blockchain: [],
  blockchainObj: new BlockChain(),
  difficulty: null,
  nonce: null,
  answerHash: null,
  verifyHash: null,

  onGenerate: (data: string) => {},
  onVerify: (nonce: number) => {},
  onRegist: () => {},
  onChangeDifficulty: (difficulty: number) => {},
  onChangeNonce: (nonce: number) => {},
});

export function BlockChainProvider({ children }: React.PropsWithChildren<{}>) {
  const [step, setStep] = React.useState<ExamStep>("generate");
  const [difficulty, setDifficulty] = React.useState<number | null>(null);
  const [nonce, setNonce] = React.useState<number | null>(null);
  const [newBlock, setNewBlock] = React.useState<IBlock | null>(null);
  const answerHash = React.useMemo(() => {
    if (newBlock && difficulty) {
      const hash = hexToBinary(newBlock.hash).substring(difficulty);

      return "0".repeat(difficulty) + hash;
    }
    return null;
  }, [newBlock, difficulty]);
  const verifyHash = React.useMemo(() => {
    if (newBlock && (nonce || nonce === 0)) {
      const verify = {
        ...newBlock,
        nonce,
      };
      const newHash = Block.createBlockHash(verify);

      return newHash;
    }
    return null;
  }, [newBlock, nonce]);

  const blockchainObj = React.useRef<BlockChain>(new BlockChain());

  const [blockchain, setBlockChain] = React.useState<Block[]>(
    blockchainObj.current.chain.chain
  );

  const onGenerate = React.useCallback((data: string) => {
    if (blockchainObj.current) {
      const result = blockchainObj.current.chain.addBlock([data]);
      if (!result.isError) {
        setNewBlock(result.value);
        setStep("verify");
        setNonce(0);
        setDifficulty(1);
      }
    }
  }, []);

  const onVerify = React.useCallback((nonce: number) => {}, []);

  const onRegist = React.useCallback(() => {}, []);

  const onChangeDifficulty = React.useCallback((difficulty: number) => {
    setDifficulty(difficulty);
  }, []);

  React.useEffect(() => {
    if (
      difficulty &&
      verifyHash &&
      verifyHash?.startsWith("0".repeat(difficulty!))
    )
      setStep("success");
  }, [difficulty, verifyHash]);

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
        difficulty,
        nonce,
        onChangeDifficulty,
        onChangeNonce: setNonce,
        answerHash,
        verifyHash,
      }}>
      {children}
    </BlockChainContext.Provider>
  );
}
