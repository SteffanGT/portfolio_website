import React, { useState } from 'react';
import { Instagram, Linkedin, Mail, Facebook, User, Code, Briefcase, School, Globe, Languages } from 'lucide-react';

const translations = {
  en: {
    name: "Steffan Thomas",
    role: "Computer Science Student",
    aboutMe: {
      title: "About Me",
      description: "Passionate about creating elegant solutions to complex problems"
    },
    skills: {
      title: "Skills",
      description: "Python, HTML, CSS, Java"
    },
    experience: {
      title: "Experience",
      description: "Summer Placement at TechnoCamps Swansea"
    },
    background: {
      title: "Background",
      origin: {
        title: "Origin",
        location: "Born and raised in Swansea, Wales",
        description: "Currently living in Cardiff during University term time."
      },
      languages: {
        title: "Languages",
        subtitle: "Multilingual Professional",
        welsh: "Welsh",
        english: "English",
        level: "Native"
      }
    },
    education: {
      title: "Education",
      university: {
        degree: "Currently studying Computer Science",
        school: "Cardiff University",
        period: "2023 - Current",
        description: "Specialized in Artificial Intelligence and Machine Learning",
        tags: ["Computational Thinking", "Problem Solving for python", "Web applications"]
      },
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "Portfolio Website",
          description: "A personal website showcasing my skills, education, and projects.",
          status: "Done",
        },
        {
          name: "AI Football News",
          description: "An automatic system that summarizes the latest in daily football news.",
          status: "Done",
        },
        {
          name: "Weather App",
          description: "A web application that provides real-time weather updates using an external API.",
          status: "Planning",
        },
      ],
    },
    footer: {
      rights: "© 2024 Steffan Thomas. All rights reserved.",
    },
    languageButton: "Cymraeg"
  },
  cy: {
    name: "Steffan Thomas",
    role: "Myfyriwr Cyfrifiadureg",
    aboutMe: {
      title: "Amdanaf",
      description: "Angerddol am greu atebion syml i broblemau cymhleth"
    },
    skills: {
      title: "Sgiliau",
      description: "Python, HTML, CSS, Java"
    },
    experience: {
      title: "Profiad",
      description: "Profiad gwaith yn TechnoCamps Abertawe"
    },
    background: {
      title: "Cefndir",
      origin: {
        title: "Lleoliad",
        location: "Wedi'i eni a'i fagu yn Abertawe, Cymru",
        description: "Yn byw yng Nghaerdydd yn ystod tymor y Brifysgol."
      },
      languages: {
        title: "Ieithoedd",
        subtitle: "Proffesiynol Amlieithog",
        welsh: "Cymraeg",
        english: "Saesneg",
        level: "Iaith Gyntaf"
      }
    },
    education: {
      title: "Addysg",
      university: {
        degree: "Yn astudio Gwyddoniaeth Cyfrifiadur",
        school: "Prifysgol Caerdydd",
        period: "2023 - Presennol",
        description: "Yn arbenigo mewn Deallusrwydd Artiffisial a Dysgu Peirianyddol",
        tags: ["Meddwl yn cyfrfianellol", "Datrys problemau gyda Python", "Cymwysiadau gwe"]
      }
    },
    
    projects: {
      title: "Prosiectau",
      items: [
        {
          name: "Gwefan Portffolio",
          description: "Gwefan personol sy'n arddangos fy sgiliau, dysgu a phrosiectau.",
          status: "Wedi cwblhau",
        },
        {
          name: "Newyddion Pêl-droed AI",
          description: "System awtomatig sy'n crynhoi'r newyddion dyddiol yn y byd pêl-droed.",
          status: "Wedi cwblhau",
        },
        {
          name: "App Tywydd",
          description: "Cymhwysiad gwe sy'n darparu diweddariadau tywydd amser real gan ddefnyddio API allanol.",
          status: "Cynllunio",
        },
      ],
    },
    footer: {
      rights: "© 2024 Steffan Thomas. Cedwir pob hawl.",
    },
    languageButton: "English",
  },
};

function App() {
  const [language, setLanguage] = useState<'en' | 'cy'>('cy');
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'cy' : 'en');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Language Toggle Button */}
      <button
        onClick={toggleLanguage}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-white/90 hover:bg-white text-blue-600 rounded-full shadow-lg transition-all duration-300 font-medium"
      >
        {t.languageButton}
      </button>

      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <div className="flex flex-col items-center text-center text-white">
            <img
              src=".\Profile_pic.png"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-xl mb-8 object-cover"
            />
            <h1 className="text-5xl font-bold mb-4">{t.name}</h1>
            <p className="text-xl mb-8">{t.role}</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/steffant_13/" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/steffan.thomas.39566" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="mailto:Sgt.8@outlook.com" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <User className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{t.aboutMe.title}</h3>
                <p className="text-gray-600">{t.aboutMe.description}</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Code className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{t.skills.title}</h3>
                <p className="text-gray-600">{t.skills.description}</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Briefcase className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{t.experience.title}</h3>
                <p className="text-gray-600">{t.experience.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{t.background.title}</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold">{t.background.origin.title}</h3>
                  <p className="text-gray-600">{t.background.origin.location}</p>
                </div>
              </div>
              <p className="text-gray-700">
                {t.background.origin.description}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Languages className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold">{t.background.languages.title}</h3>
                  <p className="text-gray-600">{t.background.languages.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-24">{t.background.languages.welsh}</span>
                  <span className="text-blue-600">{t.background.languages.level}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-24">{t.background.languages.english}</span>
                  <span className="text-blue-600">{t.background.languages.level}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">{t.education.title}</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <School className="w-8 h-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{t.education.university.degree}</h3>
                <p className="text-gray-600">{t.education.university.school} • {t.education.university.period}</p>
                <p className="mt-2 text-gray-700">{t.education.university.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.education.university.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Projects Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">{t.projects.title}</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {t.projects.items.map((project, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <span
                className={`inline-block mt-4 px-3 py-1 text-sm font-medium rounded-full ${
                  project.status.toLowerCase() === "done" || project.status.toLowerCase() === "wedi cwblhau"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;