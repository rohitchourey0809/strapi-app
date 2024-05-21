import React, { useEffect } from "react";
import { fetchProducts } from "../Reduxcomp/api";
import { useDispatch, useSelector } from "react-redux";

const AllProduct = () => {
  const dispatch = useDispatch();
  const fetchdata = useSelector((state) => {
    console.log("state", state);
    return state.products.items.products;
  });

  let status = useSelector((state) => {
    return state.products.status;
  });
  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [dispatch, status]);

  return (
    <>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : (
        fetchdata?.map((ele, index) => {
          return (
            <div key={ele.id}>
              <center>
                <div className="flex flex-col items-center gap-4 mb-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src={ele.thumbnail}
                    alt={ele.title}
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {ele.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {ele.description}.
                    </p>
                  </div>
                </div>
              </center>
            </div>
          );
        })
      )}
    </>
  );
};

export default AllProduct;
