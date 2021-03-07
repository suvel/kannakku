export const initializer = {
  productList: [],
  memberList: [],
};

export const kannakkuActions = {
  ADD_PRODUCTS: "add_products",
  ADD_MEMBERS: "add_members",
};

const reducer = (state = initializer, action) => {
  switch (action.type) {
    case kannakkuActions.ADD_PRODUCTS: {
      let nxtId = 1;
      if (state.productList.length > 0) {
        const productList = state.productList;
        const lastIndex = productList.length - 1;
        nxtId = productList.sort((a, b) => a.id - b.id)[lastIndex].id;
      }
      const prd = [...state.productList, { id: nxtId, ...action.payload }];
      return { ...state, productList: prd };
    }
    case kannakkuActions.ADD_MEMBERS: {
      return { ...state, members: action.payload };
    }
    default:
      throw "action do not match";
  }
};

export default reducer;
