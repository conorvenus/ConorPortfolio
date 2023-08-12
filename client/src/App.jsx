import { useState, useEffect } from "react"
import BackgroundCircles from "./components/BackgroundCircles"
import Modal from "./components/Modal"
import Navbar from "./components/Navbar"
import HeroSection from "./components/sections/HeroSection"
import EducationSection from "./components/sections/EducationSection"
import ExperienceSection from "./components/sections/ExperienceSection"
import ProjectsSection from "./components/sections/ProjectsSection"

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => setIsModalOpen(currentState => !currentState)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault()
        toggleModal()
      }};

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Background Content */}
      <BackgroundCircles />
      <Modal visible={isModalOpen} toggleModal={toggleModal}  />

      {/* Primary Content */}
      <Navbar toggleModal={toggleModal} />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  )
}