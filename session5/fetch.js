// let promise = fetch("https://jsonplaceholder.typicode.com/users/1");
 
// promise.then(response => {
//    console.log("Response received:", response);
//  });

//  fetch("https://jsonplaceholder.typicode.com/users/1")
//    .then(response => response.json()) // parse JSON from response
//    .then(data => {
//      console.log(data.name);
//    });

//    fetch("https://jsonplaceholder.typicode.com/users")
//    .then(res => res.json())
//    .then(users => {
//      users.forEach(user => {
//        console.log(`${user.name} (${user.email})`);
//      });
//    });

//    async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await response.json();
//     console.log(data.title);
//   }
  
//  getData();


//  async function getPost() {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts/1000");
//       if (!res.ok) throw new Error("No such post!.");
//       const data = await res.json();

//       //dom access
//       let title = document.getElementById('title')
//       title.innerHTML = data.title
//       console.log(data);
//     } catch (err) {
//       title.innerHTML = err.message
//       console.error("Error fetching post:", err.message);
//     }
//  }

//  getPost()


//  const API_KEY = "YOUR_API_KEY";
 
 document.getElementById("getPostButton").addEventListener("click", async () => {
   const city = document.getElementById("postIdInput").value;
   const output = document.getElementById("postTitle");
 
   output.textContent = "Loading...";
 
   try {
     const res = await fetch(
       `https://jsonplaceholder.typicode.com/posts/${postId}`
     );
 
     if (!res.ok) throw new Error("City not found");
 
     const data = await res.json();
     const { userid, title, data } = data;
 
     output.innerHTML = `
       <h3>${userid}</h3>
       <p>Temperature: ${title.data}°C</p>
       <p>${data}</p>
     `;
   } catch (err) {
     output.textContent = err.message;
   }
});