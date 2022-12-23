export const searchFilter = (data, searchText) => {
    return data.filter((x) =>
      x?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
  };