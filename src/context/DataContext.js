import React, { createContext, useCallback, useState } from "react";
import fakedata from "../store/dummy_data";

export const dataCtx = createContext({
    data: fakedata,
    handleDelete: () => {},
    getProgressBar: () => {},
    handleView: () => {},
    updateUser: () => {}
});

const Provider = (props) => {
  const { children } = props;

  const [data, setData] = useState(fakedata);

  const handleDelete = id => {
    setData(data.filter((user) => user.id !== id));
  };

  const getProgressBar = useCallback(() => {
    let report = { male: 0, female: 0, total: 0 }
    data.forEach(user => {
        report.total = ++report.total
        if(user.gender === "male"){
            report.male = ++report.male
        } else {
            report.female = ++report.female
        }
    });
    return report
  }, [data])

  const handleView = useCallback(id => {
    return data.find(user => user.id === id)
  }, [data])

  const updateUser = useCallback((id, data) => {
    setData(pre => pre.map(user => user.id === id ? data : user))
  }, [])

  const value = {
    data,
    handleDelete,
    getProgressBar,
    handleView,
    updateUser
  }

  return (
    <dataCtx.Provider value={value}>
      {children}
    </dataCtx.Provider>
  );
};

export default Provider;
