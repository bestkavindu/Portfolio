import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Person1 from '../assets/Roland.jpg'
import Person2 from '../assets/Jaco.jpg'
import Person3 from '../assets/Person3.jpg'
import { Quote } from 'lucide-react'

const reviews = [
  {
    name: "Roland Klopper",
    role: "Clindata Deputy Director: Analysis Operations",
    image: Person1,
    text: "I am writing to provide a reference for Mr Sachin Rajapaksha, who has been a valued member of our team in Clindata the past 2 years. Mr Sachin Rajapaksha is known for his thorough and diligent approach to work, always willing assist others. I am confident that Mr Sachin Rajapaksha will continue to excel in his future endeavors."
  },
  {
    name: "Jaco Kasselman",
    role: "Vice President: Data Management and Biostatistics at Clindata",
    image: Person2,
    text: "During his time at Clindata, Sachin built a remarkable reputation within the Statistics team and across the organization. He consistently demonstrated strong problem-solving skills. Sachin's potential is undeniable, and I have no doubt he has a bright future ahead."
  },
  {
    name: "Masha Abeyrathne",
    role: "Senior Statistical Programmer at Clindata",
    image: Person3,
    text: "I had the pleasure of working with Sachin in the same team for two years, and I can confidently say he is an outstanding professional. Sachin has an impressive ability to learn new things quickly by investigating them on his own. He is also a skilled database reviewer, ensuring accuracy and reliability in his work."
  }
]

const ReviewCard = ({ review }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-lg transition-all duration-300">
    <Quote className="absolute top-8 right-8 text-accent/20" size={40} />
    <p className="text-text-muted leading-relaxed mb-6 italic relative z-10">"{review.text}"</p>
    <div className="flex items-center gap-4">
      <img
        src={review.image}
        alt={review.name}
        className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/20"
      />
      <div>
        <h3 className="font-bold text-primary">{review.name}</h3>
        <p className="text-xs text-text-muted font-medium uppercase tracking-wide">{review.role}</p>
      </div>
    </div>
  </div>
)

const Review = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-accent font-medium tracking-wide uppercase text-sm mb-2">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary">What People Say</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Review
