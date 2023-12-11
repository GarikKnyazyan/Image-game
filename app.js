let arr = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pw45OsWLaJQndblkJT48Z-bsJv6nl-YlnOwosTbdWviq3wacWBrq6ApP4hAC7hx7bGU&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pw45OsWLaJQndblkJT48Z-bsJv6nl-YlnOwosTbdWviq3wacWBrq6ApP4hAC7hx7bGU&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9MyjbV-HRx3ig0_27JnNJ43wZ-I6TjlPbeQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9MyjbV-HRx3ig0_27JnNJ43wZ-I6TjlPbeQ&usqp=CAU",
    "https://www.thedrive.com/uploads/2023/03/21/fezhypercar.jpg?auto=webp&crop=16%3A9&auto=webp&optimize=high&quality=70&width=1440",
    "https://www.thedrive.com/uploads/2023/03/21/fezhypercar.jpg?auto=webp&crop=16%3A9&auto=webp&optimize=high&quality=70&width=1440"
];


let x = document.querySelectorAll(".photo");
arr=arr.sort((a,b)=> 0.5 - Math.random())
let n = 0
let newArr = []
x.forEach((item) => {
    item.addEventListener("click", function (){
        n++;
        let id = +this.id
        this.src = arr[id]
        newArr.push(id)
        if(n == 2) {
            if(arr[newArr[0]] !== arr[newArr[1]]) {
                document.getElementById(newArr[0]).src=
                    "./image/pic.jpg"
                document.getElementById(newArr[1]).src=
                    "./image/pic.jpg"
            }
            newArr = [];
            n = 0;  
        }
    });
});