// script.js

// Section Navigation
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
const content = document.querySelector('.content');

// Function to adjust padding and alignment based on active section
function adjustContentLayout(target) {
  if (target === 'personal-details') {
    content.style.paddingTop = '120px';
    content.style.alignItems = 'flex-start';
    content.style.justifyContent = 'center';
  } else if (target === 'thank-you') {
    content.style.paddingTop = '30px';
    content.style.alignItems = 'center';
    content.style.justifyContent = 'center';
  } else {
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
        yearStart: "December, 2022",
        yearEnd: "December, 2023",
        image: "simpli.jpg",
        title: "Simplilearn with Purdue University",
        description:`
        1) I completed my Master’s in Data Engineering from Simplilearn between December 2022 and September 2023. This course provided an in-depth understanding of data science, big data technologies, and advanced analytics techniques. It offered hands-on training on modern tools and platforms, equipping me with the skills needed to manage and analyze large datasets.
        2) Throughout the program, I worked extensively with technologies such as Hadoop, Spark, and cloud platforms. I also learned to utilize programming languages like Python and SQL to build efficient data pipelines and process complex data. This practical exposure allowed me to tackle real-world data challenges and gain a strong command over data engineering concepts.
        3) The Simplilearn course not only enhanced my technical expertise but also improved my problem-solving abilities. It prepared me to design scalable data solutions and automate data processes, bridging the gap between raw data and actionable business insights. This program has been a key contributor to my growth as a Data Analytics & Automation Engineer.
        `
      },
  {
    yearStart: "September,2019",
    yearEnd: "December,2021",
    image: "polimi.jpg",
    title: "Politecnico di Milano",
    description: `
    1) I earned my Master’s in Management Engineering from Politecnico di Milano between September 2019 and December 2021. This program equipped me with a solid foundation in engineering management, combining technical skills with business strategy and decision-making. It provided hands-on experience in using analytical tools and methods to solve real-world operational challenges.
    2) Following that, I completed my Master’s in Data Engineering from Simplilearn, from December 2022 to September 2023. This course focused on data science, big data technologies, and advanced analytics techniques. I learned to work with tools like Hadoop, Spark, and other cloud technologies, which helped me build strong data handling and processing skills.
    3) Together, these master’s programs have given me a balanced blend of management and technical expertise. They prepared me to tackle complex problems in data analytics and automation, and they continue to support my work in developing scalable, efficient solutions for industrial systems.
    `
  },
  {
    yearStart: "June,2013",
    yearEnd: "June,2017",
    image: "lingayasS.jpg",
    title: "Lingayas University",
    description: `
    1) Mechanical engineering is a broad and practical field. It uses principles of physics and math to design and build machines and systems. This field offers many opportunities, from working on robots and vehicles to designing energy systems and more.
    2) During my bachelor's in mechanical engineering, I worked on two important projects that helped me learn practical skills. One project was a tea serving robot, where I designed and built a machine that could serve tea automatically. This project taught me about robotics, automation, and how to combine mechanical parts with control systems.
    3) Another key project was building a racing car for the ISSE India competition. In this project, I helped design a lightweight and fast car that could compete in races. Working on the racing car helped me understand aerodynamics, material choices, and performance optimization. Both projects gave me hands-on experience and a deeper understanding of mechanical engineering.
    `
  }

];

// Experience Slider Data
const expData = [
    {
        yearStart: "June, 2024",
        yearEnd: "Present",
        image: "sorter.jpg",
        title: "Data Analytics & BI Engineer, Alten, Dematic Sorter",
        description: `
    1) During my tenure at Alten for the Dematic client, I developed sophisticated web applications that interfaced with the main sorter control system to create a SCADA-like plant visualization platform. This real-time monitoring solution enabled remote device control, significantly reducing manual intervention and enhancing operational efficiency while laying the groundwork for further automation and data-driven decision-making.
    2) I also led the development of Grafana dashboards driven by complex SQL queries, which were crucial for analyzing post-commissioning performance. These dashboards provided clear, actionable insights that helped quickly identify trends and inefficiencies, ensuring that any issues were addressed promptly and that operational adjustments were data-informed.
    3) In addition, I automated repetitive tasks using Python, including an OCR-based screen capture system for UI interactions, which reduced manual errors and sped up data processing. I also designed efficient data pipelines to collect and process sorter messages, further improving operational transparency and proactive system monitoring.
    `
   },

  {
    yearStart: "April, 2023",
    yearEnd: "April,2024",
    image: "kering.jpg",
    title: "Data Analytics Engineer, Alten, Dematic DIQ (Kering Project)",
    description: `
    1) At Dematic (Client: GXO & Kering), I created a notification system that monitored pipeline alerts in real time using Data Factory. I also built a bot with Python that connected to Oracle databases to answer order inquiries automatically. This work helped reduce manual work and ensured that important alerts were handled quickly.
    2) In my role as an Associate Data Analytics Engineer, I improved daily operations by writing complex Oracle SQL queries, stored procedures, and functions. These solutions made it easier to get and process data, which helped our team work faster and more reliably. This allowed us to solve issues quickly and keep our data accurate.
    3) I also developed performance reporting systems using Excel and PowerBI. These reports turned raw data into clear, easy-to-understand information that helped the team make better decisions. By providing useful insights, I supported efforts to improve system efficiency and drive a data-focused work culture.
    `
  },

  {
    yearStart: "October, 2021 - March, 2023",
    image: "kering1.jpg",
    title: "Data Analytics Engineer, Alten, Dematic DIQ (Aspiag Project)",
    description: `
1) Managed the data pipeline between ASPIAG (Despar) and Dematic using Dematic IQ software and Data Factory on Databricks, ensuring efficient data flow and processing. Implemented ETL workflows with Node-Red and Data Factory, streamlining extraction, transformation, and loading operations. Developed custom Oracle SQL views and procedures while integrating Python and PySpark to enhance data analysis and automation. 
2) Built scalable data models to support real-time reporting, improving accessibility and reducing latency. Created dynamic dashboards using PowerBI and Tableau, providing actionable insights for stakeholders. Optimized data validation and transformation processes to ensure accuracy and reliability. Automated repetitive data-handling tasks, reducing manual intervention and increasing operational efficiency. 
3) Developed event-driven pipelines for near real-time updates, ensuring business processes operate with up-to-date data. Conducted performance tuning for SQL queries to enhance execution speed and resource utilization. Implemented data security measures to comply with industry standards and safeguard sensitive information, ultimately improving decision-making and system performance.
 `
  },

];

// Current Slide Index
let currentEduIndex = 0;
let currentExpIndex = 0;

// Helper function to format descriptions into multiple paragraphs
function formatDescription(text) {
  return text
    .split(/\r?\n/)
    .filter(line => line.trim() !== '')
    .map(line => `<p>${line.trim()}</p>`)
    .join('');
}

// Initialize Sliders
function initSliders() {
  updateEduSlider();
  updateExpSlider();
  // Adjust layout based on the initially active section
  const activeSection = document.querySelector('section.active');
  if (activeSection) {
    const target = activeSection.id;
    adjustContentLayout(target);
  }

  // Initialize active navigation link based on the active section
  const activeNavLink = document.querySelector(`nav a[data-section="${activeSection.id}"]`);
  if (activeNavLink) {
    activeNavLink.classList.add('active');
  }

  // Initialize Project Sliders
  initProjectSliders();
}

// Update Educational Background Slider
function updateEduSlider() {
  document.getElementById('edu-image').src = eduData[currentEduIndex].image;
  document.getElementById('edu-description').innerHTML = `
    <h3>${eduData[currentEduIndex].title}</h3>
    ${formatDescription(eduData[currentEduIndex].description)}
  `;
  updateEduTimeline();
}

// Update Experience Slider
function updateExpSlider() {
  document.getElementById('exp-image').src = expData[currentExpIndex].image;
  document.getElementById('exp-description').innerHTML = `
    <h3>${expData[currentExpIndex].title}</h3>
    ${formatDescription(expData[currentExpIndex].description)}
  `;
  updateExpTimeline();
}

// Update Educational Timeline
function updateEduTimeline() {
  const timelineItems = document.querySelectorAll('#edu-timeline .timeline-item');
  timelineItems.forEach((item, index) => {
    if (index === currentEduIndex) {
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
    if (index === currentExpIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Slide Functions
function nextSlide(section) {
  if (section === 'edu') {
    currentEduIndex = (currentEduIndex + 1) % eduData.length;
    updateEduSlider();
  } else if (section === 'exp') {
    currentExpIndex = (currentExpIndex + 1) % expData.length;
    updateExpSlider();
  }
}

function prevSlide(section) {
  if (section === 'edu') {
    currentEduIndex = (currentEduIndex - 1 + eduData.length) % eduData.length;
    updateEduSlider();
  } else if (section === 'exp') {
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

// Initialize Project Sliders
function initProjectSliders() {
  const projectSliders = document.querySelectorAll('.project-slider');

  projectSliders.forEach(slider => {
    // If the slider is inside the "company-projects" section, do not start auto-sliding.
    if (slider.closest('#company-projects')) {
      // Ensure only the first image is visible.
      const images = slider.querySelectorAll('img');
      images.forEach((img, index) => {
        if (index === 0) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
      return; // Skip setting up the slider interval.
    }

    // For freelance projects, set up the auto slider.
    const images = slider.querySelectorAll('img');
    let currentIndex = 0;

    // Function to show the next image.
    const showNextImage = () => {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    };

    // Initialize the first image as active.
    images.forEach((img, index) => {
      if (index !== 0) {
        img.classList.remove('active');
      } else {
        img.classList.add('active');
      }
    });

    // Set interval to change images every 4 seconds (4000ms).
    setInterval(showNextImage, 4000);
  });
}

// Initialize on Page Load
window.onload = initSliders;
