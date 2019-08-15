import { tx, u, wallet } from "@cityofzion/neon-core";
import { Provider } from "../provider/common";

export interface ManagedApiBasicConfig<T extends tx.BaseTransaction> {
  api: Provider;
  url?: string;
  account: wallet.Account;
  fees?: number;
  override?: object;
  signingFunction?: (
    tx: string,
    publicKey: string
  ) => Promise<string | string[]>;
  tx?: T;
  response?: {
    result: boolean;
    txid?: string;
  };
  sendingFromSmartContract?: string;
}

export interface SendAssetConfig
  extends ManagedApiBasicConfig<tx.ContractTransaction> {
  balance?: wallet.Balance;
  intents?: tx.TransactionOutput[];
}

export interface SendAssetConfigWithSubsidy extends SendAssetConfig {
  subsidyAccount: wallet.Account;
  subsidyBalance?: wallet.Balance;
}

export interface ClaimGasConfig
  extends ManagedApiBasicConfig<tx.ClaimTransaction> {
  claims?: wallet.Claims;
}

export interface DoInvokeConfig
  extends ManagedApiBasicConfig<tx.InvocationTransaction> {
  balance?: wallet.Balance;
  intents?: tx.TransactionOutput[];
  gas?: number | u.Fixed8;
  script: any;
}

export interface DoInvokeWithSubsidy extends DoInvokeConfig {
  subsidyAccount: wallet.Account;
  subsidyBalance?: wallet.Balance;
}

export interface SetupVoteConfig
  extends ManagedApiBasicConfig<tx.StateTransaction> {
  candidateKeys: string[];
}
