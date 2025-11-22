//Create Element using JS 

//This is basic for creating the element using the JS 
const heading = document.createElement("h1");
heading.textContent= "Javascript heading"
heading.className ="header1"

document.getElementById("root").append(heading)
console.log("javascript element ", heading);
//when we create element through js and console log it that time whatever element creates in DOM, that element output we can see in console.
//but in case of react this is different.


//AS we have used CDN links for react, we can use react using those CDN links, no need to create project using vite or npm 
//Create Element using React

const ReactHeading = React.createElement("h2", {className: "header", id:"firstEle", children:"First heading"});
// here in ele - first argument is the which element we want to create 
// second argument is object in which children tells - content for the element which will be created, classname for class as we have in normal html.

console.log(ReactHeading) // when we log it, like normal js we dont get the DOM element, instead of that we get the object in that object we get props in which attributes which we have passsed like ele and context for that ele

//Render using ReatDOM
ReactDOM.createRoot(document.getElementById("root")).render(ReactHeading);

//Question - for same div (if= root) i have created two ele using js and react what which ele will render on browser ?
//Ans - so here see for one div=root only we have created ele using js and react, but on browser will see the ele which is created by react only, what will first happen in DOM first by js ele will create but as soon as reactDOM line hit whatever in the DOm 
// allready created will gone and it will render the content which is created using react-ele only. so if we want render both the content on the screen then in html file need to different div and here need to create ele in differ differ div.
