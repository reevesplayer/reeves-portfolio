import React from 'react'
import { Button, Input, Textarea, Card, CardBody, Link } from '@nextui-org/react'

const Contact = () => {

  return (
    <div>
        <Card>
            <CardBody>
                <div className='flex items-center justify-center py-5'>
                    <Input
                        type="name"
                        label="Name"
                        variant="bordered"
                        placeholder="Enter your name"
                        className="max-w-xs px-5"
                    /> 
                    <Input
                        type="name"
                        label="Name"
                        variant="bordered"
                        placeholder="Enter your name"
                        className="max-w-xs px-5"
                    /> 
                </div>
                <div className='flex items-center justify-center py-5'>
                    <Textarea 
                        label="Message"
                        placeholder="Enter your message"
                        className="max-w-xs w-full"
                        variant='bordered'
                    />
                </div>
                <div className='flex items-center justify-center py-5'>
                    <Link href="">
                        <Button color="primary">
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
