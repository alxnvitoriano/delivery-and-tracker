const CartSidebar = () => {
  return;
  <>
    {/* OVERLAY */}
    <div className="fixed inset-0 bg-black/40 z-5 transition-opacity" />

    {/* SIDEBAR */}
    <div
      className="fixed right-0 top-0 h-full w-fll max-w-md bg-white z-50
     shadow-2xl flex flex-col animate-slide-in-right"
    ></div>
  </>;
};

export default CartSidebar;
