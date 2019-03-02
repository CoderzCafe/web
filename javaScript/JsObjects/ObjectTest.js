var arr = ['name', 33, true];

var myVideo = {
    tile: 'Introduction to Core java',
    videoLength: 20,
    videoCreator: 'Sudipto Shahin',
    videoDescription: 'this is a video all about core java',

    getVideoCreator: function() {
        return videoCreator;
    },

    getVideoDescription: function() {
        return videoDescription;
    }
};

console.log(myVideo);
console.log('\n\nVideo on '+myVideo.tile+ ' by ' +myVideo.videoCreator);

//  assignment
var course = {
    name: 'CoreJava',
    creator: "akdjaljlkdajsld",
    price: '20$',
    description:"myVideo.getVideoDescription.toString()"
}

var x = new course();

console.log(x);