export const idlFactory = ({ IDL }) => {
  const Product = IDL.Record({
    'id' : IDL.Nat,
    'name' : IDL.Text,
    'price' : IDL.Nat,
  });
  return IDL.Service({
    'addProduct' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Nat], []),
    'getAllProducts' : IDL.Func([], [IDL.Vec(Product)], ['query']),
    'getProduct' : IDL.Func([IDL.Nat], [IDL.Opt(Product)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
