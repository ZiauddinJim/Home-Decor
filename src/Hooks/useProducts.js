import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("../furnitureData.json")
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  // return { products, loading, error }; // Why: ati name same takte hobe
  return [products, loading, error]; // Why: index same takbe & name change possible
};
export default useProducts;
