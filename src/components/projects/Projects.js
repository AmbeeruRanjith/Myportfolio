import React from 'react';
import './projects.css';
import { Github, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import doc1 from '../../assets/doc1.png';
import doc2 from '../../assets/doc2.png';   
import doc3 from '../../assets/doc3.png';
import doc4 from '../../assets/doc4.png'; 
import foodOrder1 from '../../assets/foodOrder1.png';
import foodOrder2 from '../../assets/foodOrder2.png';
import foodOrder3 from '../../assets/foodOrder3.png';
import foodOrder4 from '../../assets/foodOrder4.png';

const Projects = () => {
  const projects = [
    {
      title: "HarvestHub Android Application",
      tech: "Android SDK, Kotlin, Firebase, Cloudinary",
      date: "March 2025 – April 2025",
      description: [
        "Built a scalable multi-user agricultural marketplace app using Kotlin, supporting role-based access for Farmers, Customers, and Admins, with persistent login and real-time data sync, improving user retention by 60% and increasing app reliability by 95%.",
        "Integrated Firebase Realtime Database for secure authentication and data handling, and utilized Cloudinary API for efficient image upload and management with real-time progress, reducing image handling time by 70%.",
        "Crafted an engaging UI with Fragments, MaterialToolbar, and Navigation Drawer, enabling category-based browsing, Flipkart-style product cards, and search functionality, enhancing user experience by 85% across devices."
      ],
      type: "video",
      media: "https://drive.google.com/file/d/1qP10EgDI4LIDmdCP59C9XmNRmbPAw7v-/preview",
      githubLink: "https://github.com/AmbeeruRanjith/LatestProject"
    },
    {
      title: "Doctor Appointment Website",
      tech: "React, CSS",
      date: "October 2024 – November 2024",
      description: [
        "Developed a responsive and user-centric web application using React, enabling patients to search doctors by specialty, location, and availability, with optimized booking workflows that reduced appointment time by 80% and enhanced user satisfaction across all devices.",
        "Implemented appointment lifecycle management features including scheduling, rescheduling, and cancellations, along with automated reminders through email and SMS, improving appointment adherence and reducing missed visits significantly.",
        "Ensured secure handling of patient data and doctor communication by implementing protected routes, encrypted data flows, and privacy-compliant storage mechanisms, fostering trust and safeguarding medical records."
      ],
      type: "slider",
      images: [doc1, doc2, doc3, doc4],
      githubLink: "https://github.com/AmbeeruRanjith/Winter-pep-project",
      deployLink: "https://doctor-appointment-in-react.netlify.app/"
    },
    {
      title: "Online Food Delivery Website",
      tech: "HTML, CSS, JavaScript",
      date: "April 2024 – May 2024",
      description: [
        "Devised a full-stack online food delivery website using HTML, CSS and JavaScript featuring seamless user experience and efficient backend operations.",
        "Implemented scalable backend services to handle order processing and delivery management, ensuring reliable performance and responsiveness.",
        "Designed a responsive user interface for intuitive food browsing and ordering, enhancing user engagement and accessibility across devices by 85%."
      ],
      type: "slider",
      images: [foodOrder1, foodOrder2, foodOrder3, foodOrder4],
      githubLink: "https://github.com/AmbeeruRanjith/FrontEndFoodDeliveryWebsite",
      deployLink: "https://ambeeranjith.netlify.app/"
    },
    {
      title: "Scientific Calculator Mobile Application",
      tech: "Android SDK, Kotlin",
      date: "January 2025 – February 2025",
      description: [
        "Engineered a high-precision scientific calculator app using Kotlin and Android SDK, implementing robust algorithms for complex mathematical computations.",
        "Engineered a seamless and responsive user interface using XML layouts and View components, ensuring modularity, scalability, and an optimal user experience.",
        "Strengthened expertise in Android app development, UI/UX design, and performance optimization, enhancing problem-solving abilities and software engineering acumen."
      ],
      type: "video",
      media: "https://drive.google.com/file/d/1fMRCQqCGju7-csorGUsOwgAYPYhnL_Vl/preview",
      githubLink: "https://github.com/AmbeeruRanjith/ScientificCalculatorAndroid"
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h2 className="projects-title">PROJECTS</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tech">{project.tech}</div>
              <div className="project-date">{project.date}</div>
              <div className="project-description">
                <ul>
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="project-media">
                {project.type === 'video' ? (
                  <iframe
                    className="project-video"
                    src={project.media}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                  >
                    {project.images.map((image, i) => (
                      <SwiperSlide key={i}>
                        <img src={image} alt={`${project.title} screenshot ${i + 1}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                {project.deployLink && (
                  <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
