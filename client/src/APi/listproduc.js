// import React,{useState, useEffect} from "react";

// import Connect from "../../../APi/connect";
// const Listproduct = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     Connect.get(`/`).then((res) => {
//       console.log("DATA",res.data)
//       setProducts(res.data.products);
//     });
//   });
  
//   return (
//     <div>
//       <Listproduct products={products}></Listproduct>
//     </div>
//   );
// };
// export default Listproduct;