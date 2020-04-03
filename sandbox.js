const courseList = document.querySelector("#course-list ul");

// Delete Books
courseList.addEventListener('click',  (e) => {
    if(e.target.className === "delete") {
        const li = e.target.parentNode;
        courseList.removeChild(li);
    }
});

// Add Books
const addCourse = document.forms['add-course'];

addCourse.addEventListener('submit', (e) => {
    e.preventDefault();
    const courseName = addCourse.querySelector('input').value;
    const li = document.createElement('li');
    const name = document.createElement('span');
    const deleteBtn = document.createElement('span');

    name.textContent = courseName;
    deleteBtn.textContent = "Remove";

    name.classList.add('name');
    deleteBtn.classList.add('delete');

    li.appendChild(name);
    li.appendChild(deleteBtn);
    courseList.appendChild(li);
});

// Hide Books
const hideCourse = document.querySelector('#hide');
hideCourse.addEventListener('change', (e) => {
    if(hideCourse.checked) {
        courseList.style.display = "none";
    } else {
        courseList.style.display = "block";
    }
});

// Filter Books
const searchCourse = document.forms['search-courses'].querySelector('input');
searchCourse.addEventListener('keyup', (e) => {
    const searchName = searchCourse.value.toLowerCase();
    const courseName = document.querySelector('#course-list name');
    const li = document.querySelectorAll('#course-list li');
    li.forEach( (course) => {
        const title = course.firstElementChild.textContent;
        if( title.toLowerCase().indexOf( searchName ) > -1 ) {
            course.style.display = "flex";
        } else {
            course.style.display = "none";
        }
    });
})