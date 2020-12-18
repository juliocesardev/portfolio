const listProjects = document.getElementById("list-projects");
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsuKaiyMYf1Qr0NsUumC4UVzTZpYhId2o",
    authDomain: "portfolio-1e234.firebaseapp.com",
    databaseURL: "https://portfolio-1e234.firebaseio.com",
    projectId: "portfolio-1e234",
    storageBucket: "portfolio-1e234.appspot.com",
    messagingSenderId: "971634103552",
    appId: "1:971634103552:web:81dd4215fa3fc68589cfe5",
    measurementId: "G-NJVKESB048"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Get a reference to the database service
var database = firebase.database();

var ref = database.ref("projects");

ref.on("value", function(snapshot) {
	//console.log(snapshot);
	listProjects.innerHTML = "";

	snapshot.forEach(function(childSnapshot) {
		var childData 	= childSnapshot.val();
		var id			= childData.id;
		//
		console.log(childData);
		//
		createProjectListItem(childData);
	});
});


var createProjectListItem = function(data)
{
	let project = document.createElement("div");
	project.classList.add("project");

	let projectContent = document.createElement("div");
	projectContent.classList.add("project-content");
	projectContent.style.backgroundImage = `url(${data.smallImage})`;

	var title = document.createElement("div");
	title.classList.add("title");
	title.innerHTML = data.title;

	projectContent.appendChild(title);

	project.appendChild(projectContent);

	listProjects.appendChild(project);

}