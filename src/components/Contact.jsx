import React from 'react'
import { Button, Input, Textarea, Card, CardBody, Link } from '@nextui-org/react'

const Contact = () => {

  return (
    <div>
        <Card isBlurred>
            <CardBody>
                <div className='flex items-center justify-center py-5'>
                    <Input
                        type="name"
                        label="Name"
                        variant="bordered"
                        placeholder="Your name"
                        className=" px-5"
                    /> 
                    <Input
                        type="email"
                        label="Email"
                        variant="bordered"
                        placeholder="Your email"
                        className=" px-5"
                    /> 
                </div>
                <div className='flex items-center justify-center py-5'>
                    <Textarea 
                        label="Message"
                        placeholder="Your message"
                        className="px-5 w-full"
                        variant='bordered'
                    />
                </div>
                <div className='flex items-center justify-center py-5'>
                    <Link to="/thankyou">
                        <Button color="primary" className="w-full">
                            SUBMIT
                        </Button>
                    </Link>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}

export default Contact
