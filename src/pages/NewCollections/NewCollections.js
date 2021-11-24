import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/productActions";
import { Pagination } from "../../components/Pagination/Pagination";
import { Container } from "../../Global.styled";
import { usePagination } from "../../hooks/usePagination";

const NewCollections = () => {
  const dispatch = useDispatch();

  const { new_collection } = useSelector((state) => state.productList);
  const { currentItems } = usePagination(new_collection);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Container>
      {currentItems.map((nc) => (
        <h1 key={nc.id}>{nc.title}</h1>
      ))}

      <Pagination data={new_collection} />
    </Container>
  );
};

export default NewCollections;
