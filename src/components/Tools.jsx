import React from 'react'
import {Card, CardBody} from "@nextui-org/react"

const Tools = () => {
  return (
    <div>
      <div className="pr-8 text-primary mb-8 flex items-center">
            <div>
              <h1 className="text-2xl font-semibold mb-2">Tools & Platforms</h1>
            </div>
          </div>
          <div className="text-primary">
            <Card className="my-5 py-5 px-3" isBlurred>
              <CardBody>
                <h1 className="text-xl font-semibold tracking-wide">Languages</h1>
                <p className='text-primary-400'>JavaSript/Node.js, HTML/CSS, Python</p>
              </CardBody>
            </Card>
            <Card className="my-5 py-5 px-3" isBlurred>
              <CardBody>
                <h1 className="text-xl font-semibold tracking-wide">Frameworks</h1>
                <p className='text-primary-400'>React.js, Next.js, Tailwind CSS, NextUI, MUI, Bootstrap</p>
              </CardBody>
            </Card>
            <Card className="my-5 py-5 px-3" isBlurred>
              <CardBody>
                <h1 className="text-xl font-semibold tracking-wide">Tools</h1>
                <p className='text-primary-400'>Visual Studio Code, GitHub, Discord, Git</p>
              </CardBody>
            </Card>
            <Card className="my-5 py-5 px-3" isBlurred>
              <CardBody>
                <h1 className="text-xl font-semibold tracking-wide">Business</h1>
                <p className='text-primary-400'>Microsoft 365, G-Suite</p>
              </CardBody>
            </Card>
          </div>
    </div>
  )
}

export default Tools
