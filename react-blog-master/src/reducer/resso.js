import resso from "resso";

const store = resso({
  siderHide: true,
  headerOtherHide: true,
  setSiderHide: (value) => {
    store.siderHide = value;
    if (value) {
      document.body.style.position = "";
      document.body.style.overflow = "";
    } else {
      document.body.style.position = "fixed";
      document.body.style.overflow = "hidden";
    }
  },
  setHeaderOtherHide: () => {
    store.headerOtherHide = !store.headerOtherHide;
  },
  refresh: true,
  setRefresh: () => {
    store.refresh = !store.refresh;
  },
});
export default store;
