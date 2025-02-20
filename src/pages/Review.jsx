import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Person1 from '../assets/Roland.jpg'
import Person2 from '../assets/Jaco.jpg'
import Person3 from '../assets/Person3.jpg'

const Review = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-7xl mx-auto mt-20  hover:shadow-2xl">
        <p className="text-gray-800 text-md mb-4">
          I am writing to provide a reference for Mr Sachin Rajapaksha, who has been a valued member of our team in Clindata 
          the past 2 years. Mr Sachin Rajapaksha, was employed as Associate Statistical Programmer. <br></br><br></br>
          Throughout his time with us, Mr Sachin Rajapaksha has demonstrated a high level of expertise and dedication. <br></br><br></br>
          Mr Sachin Rajapaksha is known for his thorough and diligent approach to work, always willing assist others. <br></br><br></br>
          I am confident that Mr Sachin Rajapaksha will continue to excel in his future endeavors. His skills and experience make him
           a strong candidate for any position in the field of programming/ statistical programming. <br></br><br></br>
           I recommend Mr Sachin Rajapaksha for any opportunity that aligns with his expertise. He will be an asset to any organization.
        </p>
        <div className="flex justify-center text-center">
          <img
            src={Person1} // Replace with the actual image path or URL
            alt="Roland Klopper"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="text-gray-900 font-semibold text-lg">Roland Klopper</h3>
            <p className="text-gray-600 text-sm">
            Clindata Deputy Director: Analysis Operations
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-7xl mx-auto mt-20">
        <p className="text-gray-800 text-md mb-4">
        During his time at Clindata, Sachin built a remarkable reputation within the Statistics team and across the organization.
         He consistently demonstrated strong problem-solving skills, making a tangible difference in the efficiency and effectiveness 
         of his colleagues' work. Both peers and management frequently acknowledged his contributions and his unwavering commitment to quality shone through in every task he undertook.<br></br><br></br>
         Sachin's potential is undeniable, and I have no doubt he has a bright future ahead, wherever his journey may take him. His impact during his nearly two years with us will not be forgotten.<br></br><br></br>
         I wish Sachin every success in his career and am confident that any organization would be fortunate to have him on their team.
        </p>
        <div className="flex justify-center text-center">
          <img
            src={Person2} // Replace with the actual image path or URL
            alt="Jaco Kasselman"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="text-gray-900 font-semibold text-lg">Jaco Kasselman</h3>
            <p className="text-gray-600 text-sm">
            Vice President: Data Management and Biostatistics at Clindata
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-7xl mx-auto mt-20">
        <p className="text-gray-800 text-md mb-4">
        I had the pleasure of working with Sachin in the same team for two years, and I can confidently say he is an outstanding professional. Sachin has an impressive ability to learn new things quickly by investigating them on his own, which makes him a valuable asset to any team.
         <br></br><br></br>

         Sachin's potential is undeniable, and I have no doubt he has a bright future ahead, wherever his journey may take him. His impact during his nearly two years with us will not be forgotten.
         
         <br></br><br></br>
         He is always ready to support his team members whenever he is available, demonstrating his commitment to teamwork. If Sachin encounters any doubts or issues, he promptly addresses them by asking questions and solving problems efficiently.
         <br></br><br></br>
         Sachin is also a skilled database reviewer, ensuring accuracy and reliability in his work. He willingly takes on tasks and communicates his availability clearly, making collaboration seamless. His accountability for his studies and his ability to manage multiple studies simultaneously are truly commendable.
         <br></br><br></br>
         Additionally, Sachin is a proficient SAS and R programmer, bringing technical expertise and a proactive attitude to every project. I highly recommend Sachin for any role that requires quick learning, teamwork, and strong programming skills
        </p>
        <div className="flex justify-center text-center">
          <img
            src= {Person3} // Replace with the actual image path or URL
            alt="Masha Abeyrathne"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="text-gray-900 font-semibold text-lg">Masha Abeyrathne</h3>
            <p className="text-gray-600 text-sm">
            Senior Statistical Programmer at Clindata
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Review
