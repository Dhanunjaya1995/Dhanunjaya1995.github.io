// Section Navigation
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
const content = document.querySelector('.content');

// Function to adjust padding and alignment based on active section
function adjustContentLayout(target) {
    if(target === 'personal-details'){
        content.style.paddingTop = '120px';
        content.style.alignItems = 'flex-start';
        content.style.justifyContent = 'center';
    }
    else if(target === 'thank-you'){
        content.style.paddingTop = '30px';
        content.style.alignItems = 'center';
        content.style.justifyContent = 'center';
    }
    else{
        content.style.paddingTop = '30px';
        content.style.alignItems = 'flex-start';
        content.style.justifyContent = 'center';
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-section');

        // Remove 'active' class from all sections
        sections.forEach(sec => sec.classList.remove('active'));

        // Add 'active' class to the target section
        const activeSection = document.getElementById(target);
        activeSection.classList.add('active');

        // Adjust padding-top and alignment based on the target section
        adjustContentLayout(target);

        // Remove 'active' class from all nav links
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Add 'active' class to the clicked nav link
        link.classList.add('active');
    });
});

// Educational Background Slider Data
const eduData = [
    {
        yearStart: "June,2013",
        yearEnd: "June,2017",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=80&w=400",
        title: "Lingayas University",
        description: "Bachelor of Science in Computer Science. Focused on software development, algorithms, and data structures."
    },
    {
        yearStart: "September,2019",
        yearEnd: "December,2021",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=80&w=400",
        title: "Politecnico di milano",
        description: "Participated in various workshops and seminars on web development and UI/UX design."
    },
    {
        yearStart: "December, 2022",
        yearEnd: "December, 2023",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=80&w=400",
        title: "Simplilearn with Purdue University",
        description: "Completed specialized courses in full-stack development and project management."
    }
];

// Experience Slider Data
const expData = [
    {
        yearStart: "October, 2021",
        yearEnd: "March, 2023",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=80&w=400",
        title: "Data Analytics Engineer, Alten, Dematic DIQ (Aspiag Project)",
        description: "Worked as a Front-End Developer, creating responsive web applications and collaborating with designers to enhance user experience."
    },
    {
        yearStart: "April, 2023",
        yearEnd: "April, 2024",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=80&w=400",
        title: "Data Analytics Engineer, Alten, Dematic DIQ (Kering Project)",
        description: "Led a team of developers in building scalable web services and APIs for enterprise solutions."
    },
    {
        yearStart: "June, 2024",
        yearEnd: "Present",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=80&w=400",
        title: "Data Analytics & BI Engineer, Alten, Dematic Sorter",
        description: "Managed multiple projects, ensuring timely delivery and maintaining high code quality standards."
    }
];

// Current Slide Index
let currentEduIndex = 0;
let currentExpIndex = 0;

// Initialize Sliders
function initSliders() {
    updateEduSlider();
    updateExpSlider();
    // Adjust layout based on the initially active section
    const activeSection = document.querySelector('section.active');
    if(activeSection){
        const target = activeSection.id;
        adjustContentLayout(target);
    }

    // Initialize active navigation link based on the active section
    const activeNavLink = document.querySelector(`nav a[data-section="${activeSection.id}"]`);
    if(activeNavLink){
        activeNavLink.classList.add('active');
    }
}

// Update Educational Background Slider
function updateEduSlider() {
    document.getElementById('edu-image').src = eduData[currentEduIndex].image;
    document.getElementById('edu-description').innerHTML = `
        <h3>${eduData[currentEduIndex].title}</h3>
        <p>${eduData[currentEduIndex].description}</p>
    `;
    updateEduTimeline();
}

// Update Experience Slider
function updateExpSlider() {
    document.getElementById('exp-image').src = expData[currentExpIndex].image;
    document.getElementById('exp-description').innerHTML = `
        <h3>${expData[currentExpIndex].title}</h3>
        <p>${expData[currentExpIndex].description}</p>
    `;
    updateExpTimeline();
}

// Update Educational Timeline
function updateEduTimeline() {
    const timelineItems = document.querySelectorAll('#edu-timeline .timeline-item');
    timelineItems.forEach((item, index) => {
        if(index === currentEduIndex){
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Update Experience Timeline
function updateExpTimeline() {
    const timelineItems = document.querySelectorAll('#exp-timeline .timeline-item');
    timelineItems.forEach((item, index) => {
        if(index === currentExpIndex){
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Slide Functions
function nextSlide(section) {
    if(section === 'edu'){
        currentEduIndex = (currentEduIndex + 1) % eduData.length;
        updateEduSlider();
    } else if(section === 'exp'){
        currentExpIndex = (currentExpIndex + 1) % expData.length;
        updateExpSlider();
    }
}

function prevSlide(section) {
    if(section === 'edu'){
        currentEduIndex = (currentEduIndex - 1 + eduData.length) % eduData.length;
        updateEduSlider();
    } else if(section === 'exp'){
        currentExpIndex = (currentExpIndex - 1 + expData.length) % expData.length;
        updateExpSlider();
    }
}

// Timeline Item Click Events
const eduTimelineItems = document.querySelectorAll('#edu-timeline .timeline-item');
eduTimelineItems.forEach(item => {
    item.addEventListener('click', () => {
        const index = parseInt(item.getAttribute('data-index'));
        currentEduIndex = index;
        updateEduSlider();
    });
});

const expTimelineItems = document.querySelectorAll('#exp-timeline .timeline-item');
expTimelineItems.forEach(item => {
    item.addEventListener('click', () => {
        const index = parseInt(item.getAttribute('data-index'));
        currentExpIndex = index;
        updateExpSlider();
    });
});

// Function to adjust padding and alignment based on active section
function adjustContentLayout(target) {
    if(target === 'personal-details'){
        content.style.paddingTop = '120px';
        content.style.alignItems = 'flex-start';
        content.style.justifyContent = 'center';
    }
    else if(target === 'thank-you'){
        content.style.paddingTop = '30px';
        content.style.alignItems = 'center';
        content.style.justifyContent = 'center';
    }
    else{
        content.style.paddingTop = '30px';
        content.style.alignItems = 'flex-start';
        content.style.justifyContent = 'center';
    }
}

// Initialize on Page Load
window.onload = initSliders;
