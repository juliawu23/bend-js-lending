/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers';
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface IIncentivesControllerInterface extends ethers.utils.Interface {
  functions: {
    'claimRewards(address[],uint256)': FunctionFragment;
    'configureAssets(address[],uint256[])': FunctionFragment;
    'getRewardsBalance(address[],address)': FunctionFragment;
    'getUserUnclaimedRewards(address)': FunctionFragment;
    'handleAction(address,uint256,uint256)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'claimRewards',
    values: [string[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'configureAssets',
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'getRewardsBalance',
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: 'getUserUnclaimedRewards',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'handleAction',
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: 'claimRewards',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'configureAssets',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getRewardsBalance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getUserUnclaimedRewards',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'handleAction',
    data: BytesLike
  ): Result;

  events: {
    'RewardsAccrued(address,uint256)': EventFragment;
    'RewardsClaimed(address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'RewardsAccrued'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardsClaimed'): EventFragment;
}

export class IIncentivesController extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IIncentivesControllerInterface;

  functions: {
    claimRewards(
      _assets: string[],
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'claimRewards(address[],uint256)'(
      _assets: string[],
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    configureAssets(
      _assets: string[],
      _emissionsPerSecond: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'configureAssets(address[],uint256[])'(
      _assets: string[],
      _emissionsPerSecond: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getRewardsBalance(
      _assets: string[],
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'getRewardsBalance(address[],address)'(
      _assets: string[],
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getUserUnclaimedRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'getUserUnclaimedRewards(address)'(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    handleAction(
      _user: string,
      _totalSupply: BigNumberish,
      _userBalance: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'handleAction(address,uint256,uint256)'(
      _user: string,
      _totalSupply: BigNumberish,
      _userBalance: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  claimRewards(
    _assets: string[],
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'claimRewards(address[],uint256)'(
    _assets: string[],
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  configureAssets(
    _assets: string[],
    _emissionsPerSecond: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'configureAssets(address[],uint256[])'(
    _assets: string[],
    _emissionsPerSecond: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getRewardsBalance(
    _assets: string[],
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  'getRewardsBalance(address[],address)'(
    _assets: string[],
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserUnclaimedRewards(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  'getUserUnclaimedRewards(address)'(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  handleAction(
    _user: string,
    _totalSupply: BigNumberish,
    _userBalance: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'handleAction(address,uint256,uint256)'(
    _user: string,
    _totalSupply: BigNumberish,
    _userBalance: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    claimRewards(
      _assets: string[],
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'claimRewards(address[],uint256)'(
      _assets: string[],
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    configureAssets(
      _assets: string[],
      _emissionsPerSecond: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    'configureAssets(address[],uint256[])'(
      _assets: string[],
      _emissionsPerSecond: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    getRewardsBalance(
      _assets: string[],
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'getRewardsBalance(address[],address)'(
      _assets: string[],
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserUnclaimedRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'getUserUnclaimedRewards(address)'(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleAction(
      _user: string,
      _totalSupply: BigNumberish,
      _userBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    'handleAction(address,uint256,uint256)'(
      _user: string,
      _totalSupply: BigNumberish,
      _userBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    RewardsAccrued(_user: string | null, _amount: null): EventFilter;

    RewardsClaimed(_user: string | null, _amount: null): EventFilter;
  };

  estimateGas: {
    claimRewards(
      _assets: string[],
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'claimRewards(address[],uint256)'(
      _assets: string[],
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    configureAssets(
      _assets: string[],
      _emissionsPerSecond: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    'configureAssets(address[],uint256[])'(
      _assets: string[],
      _emissionsPerSecond: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    getRewardsBalance(
      _assets: string[],
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'getRewardsBalance(address[],address)'(
      _assets: string[],
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserUnclaimedRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'getUserUnclaimedRewards(address)'(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleAction(
      _user: string,
      _totalSupply: BigNumberish,
      _userBalance: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'handleAction(address,uint256,uint256)'(
      _user: string,
      _totalSupply: BigNumberish,
      _userBalance: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimRewards(
      _assets: string[],
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'claimRewards(address[],uint256)'(
      _assets: string[],
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    configureAssets(
      _assets: string[],
      _emissionsPerSecond: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'configureAssets(address[],uint256[])'(
      _assets: string[],
      _emissionsPerSecond: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getRewardsBalance(
      _assets: string[],
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'getRewardsBalance(address[],address)'(
      _assets: string[],
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserUnclaimedRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'getUserUnclaimedRewards(address)'(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    handleAction(
      _user: string,
      _totalSupply: BigNumberish,
      _userBalance: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'handleAction(address,uint256,uint256)'(
      _user: string,
      _totalSupply: BigNumberish,
      _userBalance: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
