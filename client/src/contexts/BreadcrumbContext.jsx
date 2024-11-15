import React, { createContext, useState, useContext } from "react";

const BreadcrumbContext = createContext();

export const BreadcrumbProvider = ({ children }) => {
  const [breadcrumb, setBreadcrumb] = useState(['Dashboard']);

  const updateBreadcrumb = (page) => {
    if (page === 'Dashboard') {
      setBreadcrumb(['Dashboard']);
    } else {
      setBreadcrumb([page]);
    }
  };

  const addSubBreadcrumb = (subPage) => {
    setBreadcrumb((prev) => [...prev, subPage]);
  };

  const resetBreadcrumb = () => {
    setBreadcrumb(['Dashboard']); 
  };

  return (
    <BreadcrumbContext.Provider
      value={{ breadcrumb, updateBreadcrumb, addSubBreadcrumb, resetBreadcrumb }}
    >
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumb = () => {
  return useContext(BreadcrumbContext);
};
