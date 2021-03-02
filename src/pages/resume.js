import React from 'react'

// Import component styles
import styles from './resume.module.less'

// Import components
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import PageHeader from '../components/pageHeader/pageHeader'
import SectIntro from '../components/sectIntro/sectIntro'
import SectOrange from '../components/sectOrange/sectOrange'
import SectPreFooter from '../components/sectPreFooter/sectPreFooter'
import Button from '../components/button/button'

const TechSkills = (props) => {
  const skills = [
    { skill: 'HTML', percent: 98, },
    { skill: 'CSS', percent: 98, },
    { skill: 'WordPress', percent: 98, },
    { skill: 'PHP', percent: 95, },
    { skill: 'JavaScript', percent: 60, },
    { skill: 'jQuery', percent: 80, },
    { skill: 'LESS', percent: 95, },
    { skill: 'Umbraco', percent: 75, },
    { skill: 'C#', percent: 50, },
    { skill: 'ASP.NET', percent: 50, },
    { skill: 'Razor syntax', percent: 50, },
    { skill: 'XSLT', percent: 50, },
    { skill: 'JSON', percent: 75, },
    { skill: 'Bootstrap', percent: 85, },
    { skill: 'MySQL', percent: 75, },
    { skill: 'Drupal', percent: 65, },
    { skill: 'Git', percent: 75, },
    { skill: 'Magento', percent: 40, },
    { skill: 'X-Cart', percent: 10, },
    { skill: 'Photoshop', percent: 75, },
    { skill: 'Illustrator', percent: 65, },
    { skill: 'Joomla!', percent: 85, },
    { skill: 'Gatsby', percent: 75, },
    { skill: 'React', percent: 50, },
    { skill: 'GraphQL', percent: 50, },
    { skill: 'Contentful', percent: 50, },
    { skill: 'Figma', percent: 85, },
  ]

  skills.sort((a, b) => (a.percent < b.percent ? 1 : -1))

  console.log(skills)

  return (    
    <section className={styles.techSkills}>
      <h2>{props.title}</h2>

      <div className={styles.content}>

        {/* Loop through array */}
        {skills.map((item) => (
          <div
            key={item.skill}
            className={styles.skill}
          >
            <p>{item.skill}</p>
            <div className={styles.skillBox}>
              <div
                className={styles.skillBoxFill}
                style={{
                  width: item.percent + '%'
                }}
              >
                <p className={styles.percentCopy}>{item.percent}%</p>
              </div>
            </div>
          </div>
        ))}

      </div>

      <div className={`${styles.polygon} ${styles.polygonBottom}`}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="100,100 100,0 60,0"
            opacity="1" />
        </svg>
      </div>
    </section>
  )
}

const ProExp = (props) => {

  const employment = [
    {
      employer: 'Job Hunter, & Self-Educator',
      positions: [
        {
          title: '',
          startMonth: 'Jul',
          startYear: '2020',
          endMonth: 'Present',
          endYear: '',
          points: [
            { bullet: `Initiated self-education process utilizing online tutorials and Codecademy`},
            { bullet: `Touched up on technologies already in use while dipping toes in new languages / libraries`},
          ],
          stacks: [
            { spec: 'React', },
            { spec: 'JavaScript', },
            { spec: 'PHP', },
            { spec: 'Golang', },
            { spec: 'Git', },
            { spec: 'CLI', },
            { spec: 'Figma', },
            { spec: 'Contentful', },
          ],
        },
      ],
    },
    {
      employer: 'Freelancer',
      positions: [
        {
          title: '',
          startMonth: 'Sep',
          startYear: '2020',
          endMonth: 'Jan',
          endYear: '2021',
          points: [
            { bullet: `Picked up various freelance projects within the WordPress realm` },
            { bullet: `Full WordPress site build utilizing Figma mock-ups`},
          ],
          stacks: [
            { spec: 'WordPress', },
            { spec: 'PHP', },
            { spec: 'JavaScript', },
            { spec: 'jQuery', },
            { spec: 'CSS', },
            { spec: 'LESS', },
            { spec: 'Figma', },
          ],
        },
      ],
    },
    {
      employer: 'Connections Marketing',
      positions: [
        {
          title: 'Lead Front End Developer',
          startMonth: 'Feb',
          startYear: '2014',
          endMonth: 'Jul',
          endYear: '2020',
          points: [
            { bullet: `Led development of numerous projects while determining code base language and CMS (Content Management System) best suited for clients' needs` },
            { bullet: `Closely worked with internal designers and project managers to fully understand scope of creative assets to produce applications that match client requirements` },
            { bullet: `Ensured ease-of-use for clients within various CMS back-ends while maintaining professional, best practice code to ensure all developers could understand structure` },
            { bullet: `Built custom, responsive web applications for clients to ensure user retention` },
            { bullet: `Use of frameworks and libraries to boost trafﬁc to client sites while maintaining a small footprint` },
            { bullet: `Co-creation of company-wide client acquisition and development process with a focus on gathering all necessary requirements for project while planning for out-of-scope items` },
          ],
          stacks: [
            { spec: 'WordPress', },
            { spec: 'PHP', },
            { spec: 'JavaScript', },
            { spec: 'jQuery', },
            { spec: 'CSS', },
            { spec: 'LESS', },
            { spec: 'Umbraco', },
            { spec: 'C#', },
            { spec: 'ASP.NET', },
            { spec: 'Razor syntax', },
            { spec: 'XSLT', },
            { spec: 'JSON', },
            { spec: 'Boostrap', },
            { spec: 'UI/UX', },
            { spec: 'MySQL', },
            { spec: 'Responsive Development', },
            { spec: 'Client Communications', },
          ],
        },
        {
          title: 'Contract Programmer / Developer',
          startMonth: 'Dec',
          startYear: '2013',
          endMonth: 'Feb',
          endYear: '2014',
          points: [
            { bullet: `Co-creation of company-wide client acquisition and development process with a focus on gathering all necessary requirements for project while planning for out-of-scope items` },
          ],
          stacks: [
            { spec: 'WordPress', },
            { spec: 'PHP', },
            { spec: 'JavaScript', },
            { spec: 'jQuery', },
            { spec: 'CSS', },
            { spec: 'Umbraco', },
            { spec: 'C#', },
            { spec: 'ASP.NET', },
            { spec: 'Razor syntax', },
            { spec: 'XSLT', },
            { spec: 'UI/UX', },
            { spec: 'Responsive Development', },
          ],
        },
      ],
    },
    {
      employer: 'HY Connect',
      positions: [
        {
          title: 'Contract Web Developer',
          startMonth: 'Oct',
          startYear: '2013',
          endMonth: 'Nov',
          endYear: '2013',
          points: [
            { bullet: `Member of development team working on a project for a well-known, international company. Responsible for desktop, tablet and mobile styling in Drupal framework, as well as template file adjustments.` },
          ],
          stacks: [
            { spec: 'Drupal', },
            { spec: 'PHP', },
            { spec: 'JavaScript', },
            { spec: 'jQuery', },
            { spec: 'CSS', },
            { spec: 'Responsive Development', },
            { spec: 'Git', },
          ],
        },
      ],
    },
    {
      employer: 'SEM Visibility',
      positions: [
        {
          title: 'Sr. Web Developer',
          startMonth: 'Jun',
          startYear: '2011',
          endMonth: 'Sep',
          endYear: '2013',
          points: [
            { bullet: `Key role in implementing responsive design and development to applications with ﬁxed-widths and tabled formats` },
            { bullet: `Client communication and understanding of technical requirements led to retention and production of new custom website built within WordPress` },
            { bullet: `Successfully integrated payment gateways and a knowledge of ecommerce platforms as sole developer during transition period` },
            { bullet: `Full-time remote working led to self-starting meetings with superiors as well as colleagues within other departments to gain knowledge and cohesion for projects and deadlines` },
          ],
          stacks: [
            { spec: 'Magento', },
            { spec: 'PHP', },
            { spec: 'JavaScript', },
            { spec: 'CSS', },
            { spec: 'X-Cart', },
            { spec: 'Responsive Development', },
            { spec: 'Client Communications', },
          ],
        },
      ],
    },
    {
      employer: 'Dealer HD',
      positions: [
        {
          title: 'Web Designer',
          startMonth: 'Jun',
          startYear: '2010',
          endMonth: 'Jun',
          endYear: '2011',
          points: [
            { bullet: `Created stylized mock-ups for car dealership websites based on a pre-themed structure of template ﬁles` },
            { bullet: `Incorporated jQuery for DOM manipulation into web applications to alter layouts` },
            { bullet: `Spearheaded project for WordPress based company podcast; design-to-launch lead for all aspects of application` },
          ],
          stacks: [
            { spec: 'Photoshop', },
            { spec: 'Illustrator', },
            { spec: 'WordPress', },
            { spec: 'PHP', },
            { spec: 'JavaScript', },
            { spec: 'jQuery', },
            { spec: 'CSS', },
          ],
        },
      ],
    },
    {
      employer: 'Envisionit Agency',
      positions: [
        {
          title: 'Web Developer',
          startMonth: 'Mar',
          startYear: '2008',
          endMonth: 'Jun',
          endYear: '2010',
          points: [
            { bullet: `Key role in revamping structure of websites from table-based to div-based` },
            { bullet: `Integral part of development team working as liaison with design department` },
            { bullet: `Filled in as designer on numerous projects due to background in graphics` },
            { bullet: `Maintained email marketing design and builds for clients` },
          ],
          stacks: [
            { spec: 'Joomla!', },
            { spec: 'PHP', },
            { spec: 'JavaScript', },
            { spec: 'jQuery', },
            { spec: 'CSS', },
            { spec: 'Flash', },
            { spec: 'ActionScript', },
            { spec: 'Photoshop', },
          ],
        },
      ],
    },
    {
      employer: 'Takeda Pharmaceuticals',
      positions: [
        {
          title: 'Medical Graphics Technologist',
          startMonth: 'Jan',
          startYear: '2005',
          endMonth: 'Mar',
          endYear: '2008',
          points: [
            { bullet: `Worked with all senior members of MSA (Medical & Scientific Affairs) department to accomplish interconnected SMART program of audio/video recordings of expert clinician presentations; distributed through SMART intranet` },
            { bullet: `Oversaw all web activity for MSA department` },
            { bullet: `Captained design, planning, and development plan of a Flash-based, ActionScript driven website for MSA and RMSA (Regional Medical & Scientific Affairs) interactive biography site for each team member` },
          ],
          stacks: [
            { spec: 'Flash', },
            { spec: 'ActionScript', },
            { spec: 'Photoshop', },
            { spec: 'HTML', },
            { spec: 'CSS', },
          ],
        },
      ],
    },
  ]

  return (
    <section className={styles.proExp}>
      <h2>{props.title}</h2>

      <div className={styles.content}>

        {employment.map((item, i) => (
          <div
            key={i}
            className={styles.item}>

            <h3>{item.employer}</h3>

            {item.positions.map((position, i) => (
              <div
                key={i}
                className={styles.position}>

                <h4>{position.title}</h4>
                <div className={styles.positionContent}>
                  <div className={styles.col}>
                    <p className={styles.dates}>
                      <span className={styles.endDate}>
                        {position.endYear} {position.endMonth}
                      </span>                      
                      <svg
                        width="59"
                        height="59"
                        viewBox="0 0 59 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.0831 4.98644C7.4046 8.7969 3.12319 14.5282 1.16913 21.25L29.3175 21.25L13.0831 4.98644ZM0.897522 36.75C2.64099 43.6496 6.81538 49.5815 12.4562 53.5811L29.3175 36.75L0.897522 36.75ZM29.0041 58.9959C29.1691 58.9986 29.3344 59 29.5 59C45.7924 59 59 45.7924 59 29.5C59 29.3344 58.9987 29.1691 58.9959 29.0041L29.0041 58.9959ZM58.9958 28.9958L30.0042 0.0042194C45.8963 0.270562 58.7295 13.1037 58.9958 28.9958Z"
                          fill='#FF5C00' />
                      </svg>
                      <span className={styles.startDate}>
                        {position.startYear} {position.startMonth}
                      </span>
                    </p>
                  </div>

                  <div className={styles.col}>
                    <ul className={styles.positionPoints}>
                      {position.points.map((point, i) => (
                        <li key={i}>{point.bullet}</li>
                      ))}
                    </ul>

                    <p className={styles.stacksTitle}>Key Stacks</p>
                    <ul className={styles.stacks}>
                      {position.stacks.map((stack, i) => (
                        <li key={i}>{stack.spec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

          </div>
        ))}

      </div>

      <div className={`${styles.polygon} ${styles.polygonBottom}`}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="0,100 100,0 0,0"
            opacity="1"
            fill='#ffffff' />
        </svg>
      </div>
    </section>
  )
}

const Education = (props) => {

  const education = [
    {
      institution: 'Purdue University - West Lafayette',
      positions: [
        {
          major: 'Computer Graphics Technology',
          startMonth: 'Aug',
          startYear: '1999',
          endMonth: 'May',
          endYear: '2004',
          points: [
            { bullet: `Bachelor of Science` },
            { bullet: `Interactive Multimedia and Design specialty` },
          ],
        },
      ],
    },
  ]

  return (
    <section className={styles.education}>
      <h2>{props.title}</h2>

      <div className={styles.content}>

        {education.map((item, i) => (
          <div
            key={i}
            className={styles.item}>

            <h3>{item.institution}</h3>

            {item.positions.map((position, i) => (
              <div
                key={i}
                className={styles.position}>

                <h4>{position.major}</h4>
                <div className={styles.positionContent}>
                  <div className={styles.col}>
                    <p className={styles.dates}>
                      <span className={styles.endDate}>
                        {position.endYear} {position.endMonth}<br />
                      </span>                      
                      <svg
                        width="59"
                        height="59"
                        viewBox="0 0 59 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.0831 4.98644C7.4046 8.7969 3.12319 14.5282 1.16913 21.25L29.3175 21.25L13.0831 4.98644ZM0.897522 36.75C2.64099 43.6496 6.81538 49.5815 12.4562 53.5811L29.3175 36.75L0.897522 36.75ZM29.0041 58.9959C29.1691 58.9986 29.3344 59 29.5 59C45.7924 59 59 45.7924 59 29.5C59 29.3344 58.9987 29.1691 58.9959 29.0041L29.0041 58.9959ZM58.9958 28.9958L30.0042 0.0042194C45.8963 0.270562 58.7295 13.1037 58.9958 28.9958Z"
                          fill='rgba(255,255,255,0.65)' />
                      </svg>
                      <span className={styles.startDate}>
                        {position.startYear} {position.startMonth}
                      </span>
                    </p>
                  </div>

                  <div className={styles.col}>
                    <ul className={styles.positionPoints}>
                      {position.points.map((point, i) => (
                        <li key={i}>{point.bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

          </div>
        ))}

      </div>
    </section>
  )
}


const Resume = () => (

  <Layout>
    <SEO
      title='Ryan J Peterson, Front End Developer' />

    <PageHeader>
      Me,<br />
      but in bullet points.
    </PageHeader>    

    <SectIntro
      bgColor='#000000'
      top={true}
      bottom={true}
    >
      <h2>Ryan J Peterson</h2>
      <h4>CHICAGO IL USA</h4>
    </SectIntro>

    <SectOrange title='Front End Dev'>
      <p>A front end developer with 15+ years of experience designing, developing, and implementing web applications through logical, clean code. Provides years of expertise in responsive design and development across browsers and devices. Possesses the ability to understand client expectations and requirements while collaborating with them on a personal level. Vast experience within design realm, coupled with expertise in development creates a unique eye for continuity and best practices throughout projects. In-depth maintenance of code as well as testing thoroughly throughout. Leader among team collaborations.</p>
    </SectOrange>

    <TechSkills title='Technical Skills' />

    <ProExp title='Professional Experience' />

    <Education title='Education' />
    
    <SectPreFooter title='Professional and Bullet-Pointed'>
      <p>I get it. No one really wants to read everything I have to say. I don't agree with it, but I understand. So, for those that don't care about anything other than my professional life in bullet points, click the button and head to my online resume. Short and sweet.</p>
        
      <Button
        color='black'
        copy='Resume'
        href='resume' />
    </SectPreFooter>
  </Layout>
)

export default Resume
