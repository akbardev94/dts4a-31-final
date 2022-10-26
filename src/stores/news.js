import axios from "axios";
import create from "zustand";

// slice
const sliceNews = (set) => ({
  news: [],

  isLoading: false,
  fetchNews: async () => {
    try {
      set({ isLoading: true });
      const { data } = await axios.get(
        "https://newsapi.org/v2/everything?q=apple&from=2022-10-25&to=2022-10-25&sortBy=popularity&apiKey=68c76db806e249e289cd4e7bf1dd43f8"
      );
      set({ isLoading: false, news: data.data });
    } catch (err) {
      console.log(err.message);
      console.log(err.data);
    }
  },
  fetchSingleNews: async (id) => {
    try {
      set({ isLoading: true });
      const pos = await axios.get(
        `https://newsapi.org/v2/everything/${id}/?q=tesla&from=2022-09-26&sortBy=publishedAt&apiKey=68c76db806e249e289cd4e7bf1dd43f8`
      );
      set({ isLoading: false, news: pos.data });
    } catch (err) {
      console.log(err);
    }
  },
});

// hooks
const useNewsStore = create(sliceNews);

// selector
export const selectNews = (state) => state.news;
export const selectFetchNews = (state) => state.fetchNews;
export const selectLoading = (state) => state.isLoading;
export const selectSingleNews = (state) => state.fetchSingleNews;

// export
export default useNewsStore;
