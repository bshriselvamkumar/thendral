// 🔥 PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const container = document.getElementById("posts");

// LOAD POSTS
async function loadPosts() {
  const snapshot = await db.collection("posts").get();

  container.innerHTML = "";

  snapshot.forEach(doc => {
    const post = doc.data();

    container.innerHTML += `
      <div class="post-card" onclick="openPost('${doc.id}')">
        <h3>${post.title}</h3>
        <p>${post.date}</p>
      </div>
    `;
  });
}

loadPosts();

// OPEN POST
function openPost(id) {
  window.location.href = "post.html?id=" + id;
}
