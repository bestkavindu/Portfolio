import React from 'react'
import DiabetesML  from '../assets/img1.png'
import MarcketingAnalyse from '../assets/Marcketing_analyse.png'

import Cards from './Cards'


const Projects = () => {

    const projectJson = [

      {
        title: 'Marketing Analysis',
        desc: 'Use SQL for data cleaning and Preprocessing, Use python library for natural language processing to custom review data and for data visualization use Power BI',
        image: MarcketingAnalyse,
        github: "https://github.com/bestkavindu/Marketing-Analyze-SQL-Python-Power-BI-"
      },
        {
          title: 'Diabetes Prediction Using Machine Learning',
          desc: 'Using python libraries (Pandas, Numpy, sklearn, etc)predict dieabetc Using LinearRegression',
          image: DiabetesML,
          github: "https://github.com/bestkavindu/diabetes_predict"
        }
      ];

  return (
    <section id='projects' className='relative bg-gray-100 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-gray-700 border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
