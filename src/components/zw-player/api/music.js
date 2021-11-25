import axios from "axios";
//获取歌词
export const getWords = id => {
  return axios.get(`https://n.xlz122.cn/api/lyric?id=${id}`,{
    "Remote Address": "182.61.139.248:443"
  });
};
//获取歌曲详情
export const getMusicInfo = id => {
  return axios.get(`https://n.xlz122.cn/api/song/detail?ids=${id}`,{
    "Remote Address": "182.61.139.248:443"
  });
};
//获取歌曲url
export const getMusicUrl = id => {
  return axios.get(`https://n.xlz122.cn/api/song/url?id=${id}`,{
    "Remote Address": "182.61.139.248:443"
  });
};
//获取热门歌曲
export const getHotMusic = id => {
  return axios.get(`https://n.xlz122.cn/api/playlist/detail?id=${id}`,{
    "Remote Address": "182.61.139.248:443"
  });
};
//获取搜索建议
export const getSearchSuggest = key => {
  return axios.get(`https://n.xlz122.cn/api/search/suggest?keywords=${key}`,{
    "Remote Address": "182.61.139.248:443"
  });
};
//获取歌曲热门评论
export const getHotTalk = id => {
  return axios.get(`https://n.xlz122.cn/api/comment/music?id=${id}&limit=3`,{
    "Remote Address": "182.61.139.248:443"
  });
};
