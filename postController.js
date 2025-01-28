const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
];

//export const getPosts = () => posts; //1 way of exporting modules

const getPost = () => posts;

//export { getPosts }; //same concept with the first way

export const getPostsLength = () => posts.length;

export default getPost; //works without curly braces
