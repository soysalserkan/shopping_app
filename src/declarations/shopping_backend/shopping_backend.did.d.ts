import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Product { 'id' : bigint, 'name' : string, 'price' : bigint }
export interface _SERVICE {
  'addProduct' : ActorMethod<[string, bigint], bigint>,
  'getAllProducts' : ActorMethod<[], Array<Product>>,
  'getProduct' : ActorMethod<[bigint], [] | [Product]>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
