import axios from "axios";
const BigUrl="https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12"
const BaseUrl="https://pixabay.com/api/"
const myKey="36658158-346947d8111be045c507b32da"
const perPage="12"

const fetchArticlesWithQuery = async (searchQuery,page) => {
  const response = axios.get(BaseUrl+`?q=${searchQuery}&page=${page}&key=${myKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`);
  return response;
};

export default {
  fetchArticlesWithQuery,
};