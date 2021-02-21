const WrapWithContainer = ({ children, wrapperCmp }) => {
  const WrapperCmp = wrapperCmp;
  return children.map((c) => <WrapperCmp>{c}</WrapperCmp>);
};

export default WrapWithContainer;
