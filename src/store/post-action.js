import { itemsAction } from "./item-slice";

export const fetchItemsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }
      const data = await response.json();
      return data;
    };

    try {
        const data = await fetchData();
        dispatch(
            itemsAction.addItem({
                items: data || []
            })
        )
    } catch (error) {
        console.error("something went wrong");
    }
  };
};
