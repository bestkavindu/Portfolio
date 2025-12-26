import React from 'react'
import DiabetesML  from '../assets/img1.png'
import MarcketingAnalyse from '../assets/Marcketing_analyse.png'
import DataWarehouse from '../assets/data-warehouse.png'

import Cards from './Cards'


const Projects = () => {

    const projectJson = [

       {
          title: 'Data Warehouse and Analytics Project',
          desc: 'This Project contains datawarehousing and analytics solution, from building datawarehouse to generating actionable insights.',
          image: DataWarehouse,
          github: "https://github.com/bestkavindu/sql-data-warehouse"
        },
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
    <section id='projects' className='relative py-20 px-4'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center mb-16'>
            <h2 className='text-accent font-medium tracking-wide uppercase text-sm mb-2'>Portfolio</h2>
            <h3 className='text-3xl md:text-4xl font-bold text-primary'>Featured Projects</h3>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projectJson.map((items, index)=> {
                return <Cards key={index} item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
