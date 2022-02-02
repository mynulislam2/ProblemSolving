const names = [
    "raisa",
    "rishad",
    "junaed",
    "evan",
    "jakir",
    "bashar",
    "zahid",
    "zubaer",
    "raisa",
    "rishad",
    "junaed",
    "evan",
    "jakir",
    "bashar",
    "zahid",
    "zubaer"
]
function removeDuplicate(names) {
    const unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }

    return unique
}
const uniqueNames = removeDuplicate(names)
console.log(uniqueNames)