// export const getColumsFromData = (data, types) => data && data.length ? Object.keys(data[0]).reduce((acc, key, index, list) => {
//   if (types.includes[key]) {
//     return [ ...acc, {
//       key,
//       title: "asdf",
//       dataIndex: key
//     } ];
//   } else {
//     return acc;
//   }
// }, []) : null;