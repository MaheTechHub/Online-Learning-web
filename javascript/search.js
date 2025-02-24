document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = searchForm.querySelector('input');
    const courseList = document.querySelector('.course-list');
    const courses = document.querySelectorAll('.course-item');

    function filterCourses() {
        const searchTerm = searchInput.value.toLowerCase();
        let found = false;

        courses.forEach(course => {
            const title = course.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                course.style.display = 'block';
                found = true;
            } else {
                course.style.display = 'none';
            }
        });

        const existingNoResults = document.querySelector('.no-results');
        if (!found) {
            if (!existingNoResults) {
                const noResults = document.createElement('div');
                noResults.className = 'no-results';
                noResults.innerHTML = '<p>No courses found</p>';
                courseList.appendChild(noResults);
            }
        } else {
            if (existingNoResults) {
                existingNoResults.remove();
            }
        }
    }

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        filterCourses();
    });

    searchInput.addEventListener('input', function() {
        filterCourses();
    });
});
