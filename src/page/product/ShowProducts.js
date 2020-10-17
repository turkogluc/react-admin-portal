import React from 'react';
import Header from '../../component/Header';
import useDataTable from '../../component/DataTable';
import * as constants from './Constants';

function ShowProducts() {
  const {
    DataTable,
    hasSelected,
    currentPage,
    pageSize,
    resetPagination,
  } = useDataTable({
    columns: constants.columns,
    dataSource: constants.data,
    updateEntityPath: 'update-product',
  });

  return (
    <>
      <Header addNewPath="add-product" hasSelected={hasSelected} />
      <DataTable />
    </>
  );
}

export default ShowProducts;
