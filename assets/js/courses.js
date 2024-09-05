// function sortFunction(){
//     let arr=[];
//     let item=document.getElementsByTagName(".rating li");
//     for(let i=0;i<item.length;i++){
//         arr.push(item[i].innerHTML);
//     }

//     arr.sort();
//     for(var i=0;i<arr.length;i++){
//         item[i].innerHTML=arr[i];
//     }
// }

function sortFunction() {
    // Get the list element
    const list = document.getElementById("videolist");

    // Convert the list items into an array
    const items = Array.from(list.getElementsByTagName("li"));

    // Sort the items by the data-rating attribute of their anchor tags
    items.sort((a, b) => 
        parseFloat(b.querySelector("a").getAttribute("data-rating")) - 
        parseFloat(a.querySelector("a").getAttribute("data-rating"))
    );

    // Clear the list
    list.innerHTML = "";

    // Append the sorted items back to the list
    items.forEach(item => list.appendChild(item));
}
sortFunction();