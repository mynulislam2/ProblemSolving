function bestFriend(Myfriends) {
    let bigName=[]
    for (let i = 0; i < Myfriends.length; i++) {
        let element = Myfriends[i];
if (element.length>bigName.length) {
    bigName=element
}
    }
    return bigName
}
const friends=["mynul","aslam","ridooy","risahd","mrinaLinaDevi"]
const result= bestFriend(friends)
console.log(result)