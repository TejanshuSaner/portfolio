import React from 'react'
import '../css/Skils.css';

const Skills = () => {
    return (
        <div >
            <div className="services-container">
                <div>
                    <h3 className='text-3xl pt-6'> Skills </h3>

                </div>

                <div className='flex flex-col md:gap-10'>

                    <div className={` html-conatainer text-center shadow-lg p-10 rounded-xl my-10 align-center justify-center `}>
                        <img src="/html.png" className='m-auto' alt="" width={100} height={100} />
                        <h3 className={`text-lg font-medium pt-8 pb-2 `}>HTML</h3>
                        <div className="container">
                            <div className="skill-box">

                                <div className="skill-bar">
                                    <span className="skill-per html">
                                        <span className="tooltip">95%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`css-container text-center shadow-lg p-10 rounded-xl my-10 align-center justify-center `}>
                        <img src="/css.png" className='m-auto' alt="" width={100} height={100} />
                        <h3 className={`text-lg font-medium pt-8 pb-2 `}>CSS</h3>
                        <div className="container">
                            <div className="skill-box">

            
                                <div className="skill-bar">

                                    <span className="skill-per css">
                                        <span className="tooltip">80%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={` js-container text-center shadow-lg p-10 rounded-xl my-10 align-center justify-center `}>
                        <img src="/js.png" className='m-auto' alt="" width={100} height={100} />
                        <h3 className={`text-lg font-medium pt-8 pb-2 `}>JavaScript</h3>
                        <div className="container">
                            <div className="skill-box">

                            
                            <div className="skill-bar">
                                <span className="skill-per javascript">
                                    <span className="tooltip">70%</span>
                                </span>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <div className={` text-center shadow-lg p-10 rounded-xl my-10 align-center justify-center `}>
                        <img src="/react.png" className='m-auto' alt="" width={100} height={100} />
                        <h3 className={`text-lg font-medium pt-8 pb-2 `}>REACT</h3>
                        <div className="container pt-2">
                            <div className="skill-box">

                    
                            <div className="skill-bar">
                                <span className="skill-per react">
                                    <span className="tooltip">60%</span>
                                </span>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <div className={`text-center shadow-lg p-10 rounded-xl my-10 align-center justify-center `}>
                        <img src="/tailwind.png" className='m-auto' alt="" width={100} height={100} />
                        <h3 className={`text-lg font-medium pt-6 pb-4 `}>TAILWIND CSS</h3>
                        <div className=" dark:text-gray-200 ">
                            <div className="skill-box">

                   
                                <div className="skill-bar">

                                    <span className="skill-per css">
                                        <span className="tooltip">80%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={` text-center shadow-lg p-10 rounded-xl my-10 align-center justify-center `}>
                        <img src="/jquery.png" className='m-auto' alt="" width={100} height={100} />
                        <h3 className={`text-lg font-medium pt-8 pb-2  `}>JQuery</h3>
                        <div className="container jquery">
                            <div className="skill-box">

                                <span className="jquery dark:text-gray-200">JQuery</span>
                                <div className="skill-bar">

                                    <span className="skill-per jquery">
                                        <span className="tooltip">75%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                  





                </div>
            </div>

        </div>
    )
}

export default Skills
