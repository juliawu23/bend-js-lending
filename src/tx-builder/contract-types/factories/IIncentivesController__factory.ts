/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';

import type { IIncentivesController } from '../IIncentivesController';

export class IIncentivesController__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IIncentivesController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IIncentivesController;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'RewardsAccrued',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'RewardsClaimed',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'contract IScaledBalanceToken[]',
        name: '_assets',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'claimRewards',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IScaledBalanceToken[]',
        name: '_assets',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '_emissionsPerSecond',
        type: 'uint256[]',
      },
    ],
    name: 'configureAssets',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IScaledBalanceToken[]',
        name: '_assets',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'getRewardsBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'getUserUnclaimedRewards',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_totalSupply',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_userBalance',
        type: 'uint256',
      },
    ],
    name: 'handleAction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
