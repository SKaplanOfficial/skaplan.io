import React from 'react'
import './App.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import FlexContainer from './components/FlexContainer/FlexContainer'
import Card from './components/Card/Card'
import Button from './components/Button/Button'
import Divider from './components/Divider/Divider'
import Spacer from './components/Spacer/Spacer'
import TextSection from './components/TextSection/TextSection'
import Footer from './components/Footer/Footer'

const App = (): JSX.Element => {
  library.add(fas, fab)

  return (
    <div className="App">
      {/* <FlexContainer>
        <FlexContainer orientation='vertical'>
            <Card title="Card 1" body="This is some text" backgroundColor="#440088" percentWidth={100} />
            <Card title="Card 2" body="This is more text" backgroundColor="#880000" percentWidth={100} />
            <Card title="Card 3" body="Even more text" backgroundColor="#880044" percentWidth={100} />
        </FlexContainer>
        <FlexContainer orientation='vertical'>
          <Card title="Card 1" body="This is some text" backgroundColor="#440088" percentWidth={100} />
          <Card title="Card 2" body="This is more text" backgroundColor="#880000" percentWidth={100} />
          <Card title="Card 3" body="Even more text" backgroundColor="#880044" percentWidth={100} />
        </FlexContainer>
      </FlexContainer> */}

      <Spacer height='20vh' />

      <header className="page-header"><a href="/">SK</a></header>

      <FlexContainer>
        <Button icon={faGithub} link="https://github.com/SKaplanOfficial" tooltip="GitHub Profile" customStyle={{
          backgroundColor: '#44008888',
          color: 'white',
          width: 'fit-content'
        }} />

        <Button icon={faLinkedin} link="https://www.linkedin.com/in/stephen-kaplan-8168baa2/" tooltip="LinkedIn Profile" customStyle={{
          backgroundColor: '#6666CC88',
          color: 'white',
          width: 'fit-content'
        }} />

        <Button icon={faYoutube} link="https://www.youtube.com/channel/UCvFD3iYysFzkv1IYo1ugFfw" tooltip="YouTube Profile" customStyle={{
          backgroundColor: '#88000088',
          color: 'white',
          width: 'fit-content'
        }} />

        <Button icon={faInstagram} link="https://www.instagram.com/helloimsteven_/" tooltip="Instagram Profile" customStyle={{
          backgroundColor: '#CC550088',
          color: 'white',
          width: 'fit-content'
        }} />
      </FlexContainer>

      {/* <Spacer height='2.5vmin' /> */}

      {/* <FlexContainer floating={true} showBackground={true} backgroundColor="#22113366" width='80%' className='headline'>
        <p>Graduate student with 3 years of software project management experience and an innate interest in software development. Proficiency in a wide variety of programming languages and development tools. Effective team participant who enjoys taking on challenges and learning new things.</p>
      </FlexContainer> */}

      <Spacer height='2.5vh' />

      <FlexContainer width="100%" >
        <Button title="Resume" link="/assets/StephenKaplan_Resume.pdf" tooltip="Resume PDF" customStyle={{
          backgroundColor: '#33111199',
          color: 'white',
          width: 'calc(104px + 2%)',
          backdropFilter: 'blur(20px)'
        }} />

        <Button title="CV" tooltip="Curriculum Vitae PDF" link="./assets/StephenKaplan_CV.pdf" customStyle={{
          backgroundColor: '#22222299',
          color: 'white',
          width: 'calc(104px + 2%)',
          backdropFilter: 'blur(20px)'
        }} />
      </FlexContainer>

      <Spacer height='18vh' />
      <Divider />
      <Spacer height='1vh' />

      <TextSection title="Projects">
        <FlexContainer orientation='horizontal'>
          <Card title="PyXA" body="Python for Automation enables AppleScript/JXA-like control over macOS applications from within Python." backgroundColor="#44008899" percentWidth={25} >
            <Button title="Learn More >" tooltip="Python for Automation Documentation" link="https://skaplanofficial.github.io/PyXA/" customStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              color: 'white',
              fontSize: '15px',
              width: '123px'
            }} />
          </Card>

          <Card title="Aria" body="A context-aware virtual assistant with on-device processing, powered by PyXA." backgroundColor="#88000099" percentWidth={25} >
            <Button title="Learn More >" tooltip="Aria GitHub Repository" link="https://github.com/SKaplanOfficial/Aria" customStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              color: 'white',
              fontSize: '15px',
              width: '123px'
            }} />
          </Card>

          <Card title="File AI" body="An interface between selected files and GPT 3.5 with custom commands and contextual placeholders." backgroundColor="#88004499" percentWidth={25} >
            <Button title="Learn More >" tooltip="File AI GitHub Repository" link="https://github.com/SKaplanOfficial/Raycast-File-AI" customStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              color: 'white',
              fontSize: '15px',
              width: '123px'
            }} />
          </Card>
        </FlexContainer>
      </TextSection>

      <Spacer height='6vh' />
      <Divider />
      <Spacer height='1vh' />

      <TextSection title="Skills">
        <FlexContainer showBackground={true} floating={true} width="80%">
          <h3>Languages</h3>
        </FlexContainer>

        {/* <FlexContainer orientation='vertical' width="80%" gap="3vh">
          <Card title="Languages" body="" backgroundColor="#44008899" percentWidth={100} >
          <p>Python</p>
          <p>Lua</p>
          </Card>

          <Card title="Languages" body="" backgroundColor="#88000099" percentWidth={25} >
            <Button title="Learn More >" tooltip="Aria GitHub Repository" link="https://github.com/SKaplanOfficial/Aria" customStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              color: 'white',
              fontSize: '15px',
              width: '123px'
            }} />
            <p>Python</p>
          </Card>

          <Card title="UMaine Beta" body="A modern website for the Beta Eta chapter of Beta Theta Pi." backgroundColor="#88004499" percentWidth={25} >
            <Button title="Learn More >" tooltip="Aria GitHub Repository" link="https://github.com/SKaplanOfficial/Aria" customStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              color: 'white',
              fontSize: '15px',
              width: '123px'
            }} />
          </Card>
        </FlexContainer> */}
      </TextSection>

      <Spacer height='6vh' />

      <Footer />
    </div>
  )
}

export default App
