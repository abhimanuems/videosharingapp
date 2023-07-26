const youtubeAPIKEY = "AIzaSyDKZKihAKJRofK5wW3rNK9uRmIIfDQG0mE";
const youtubeAPI=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=${youtubeAPIKEY}`;

export default youtubeAPI;


const youtubeVideoById = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyDKZKihAKJRofK5wW3rNK9uRmIIfDQG0mE}
`;

export const  {API} = youtubeAPI;