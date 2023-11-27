'use client';

import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Banner,
  Button,
  Card,
  Carousel,
  Checkbox,
  Datepicker,
  Label,
  Modal,
  Progress,
  TextInput
} from "flowbite-react";
import { HiCheck, HiChevronLeft, HiExclamation, HiQuestionMarkCircle, HiX } from 'react-icons/hi';

import { MdAnnouncement } from 'react-icons/md';
import { useState } from "react";

const HomePage = () => {
  const LOGO = 'https://yt3.ggpht.com/ytc/APkrFKbCeq3QFsaH8ggv64lVghz6fnfX1PWPWlxtXrP7=s176-c-k-c0x00ffffff-no-rj';
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <>
      <div className="component">
        <h1>Accordion</h1>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>Item 1</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2">
                This is the text for item 1.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Item 2</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2">
                This is the text for item 2.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>

      <div className="component">
        <h1>Alert</h1>
        <Alert color='info' onDismiss={() => alert('Alert dismissed!')}>
            <span className="font-medium">This is an info alert.</span>
        </Alert>

        <Alert color='warning' onDismiss={() => alert('Alert dismissed!')}>
            <span className="font-medium">This is a warning alert.</span>
        </Alert>

        <Alert color='failure' onDismiss={() => alert('Alert dismissed!')}>
            <span className="font-medium">This is a failure alert.</span>
        </Alert>

        <Alert color='success' onDismiss={() => alert('Alert dismissed!')}>
            <span className="font-medium">This is a success alert.</span>
        </Alert>
      </div>

      <div className="component">
        <h1>Avatar</h1>
        <div className="flex flex-wrap gap-4 bg-gray-600 w-fit p-2">
          <Avatar rounded img={LOGO} />
          <Avatar img={LOGO} />
        </div>

        <div className="component">
          <h1>Badge</h1>
          <div className="flex flex-wrap gap-4">
            <Badge color="info" icon={HiQuestionMarkCircle}>Default</Badge>
            <Badge color="failure" icon={HiX}>Failure</Badge>
            <Badge color="success" icon={HiCheck}>Success</Badge>
            <Badge color="warning" icon={HiExclamation}>Warning</Badge>
            <Badge color="indigo">Indigo</Badge>
          </div>
        </div>

        <div className="component">
          <h1>Banner</h1>
          <Banner>
            <div className="flex w-fit justify-between bg-gray-700 p-4 text-white rounded-sm">
              <div className="mx-auto flex items-center">
                <p className="flex items-center text-sm font-normal text-white">
                  <MdAnnouncement className="mr-4 h-4 w-4" />
                  <span className="[&_p]:inline">
                    This is a notification banner.
                  </span>
                </p>
              </div>
              <Banner.CollapseButton className="text-white">
                <HiX className="h-4 w-4" />
              </Banner.CollapseButton>
            </div>
          </Banner>
        </div>
      </div>

      <div className="component">
        <h1>Button</h1>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => alert('default button')}>Default</Button>
          <Button color="success" onClick={() => alert('success button')}>Success</Button>
          <Button color="failure">Failure</Button>
          <Button pill>Pill</Button>
        </div>
      </div>

      <div className="component">
        <h1>Card with image</h1>
        <Card
          className="max-w-sm"
          imgAlt="logo"
          imgSrc={LOGO}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Learn to code with Coderversity
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Subscribe to our YouTube channel: @coderversity
          </p>
        </Card>
      </div>

      <div className="component">
        <h1>Carousel</h1>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel pauseOnHover>
            <img src={LOGO} />
            <img src={LOGO} />
          </Carousel>
          </div>
      </div>

      <div className="component">
        <h1>Datepicker</h1>
        <div className="w-1/3">
          {/* Flowbite React Datepicker */}
          <Datepicker />
        </div>
      </div>

      <div className="component">
        <h1>Form</h1>
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput id="email" type="email" placeholder="name@example.com" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput id="password" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>

      <div className="component">
        <h1>Modal</h1>
        <Button onClick={() => setOpenModal(true)}>Open modal</Button>
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Modal Heading</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                This is the modal body.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>Confirm</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="component">
        <h1>Progress Bar</h1>
        <Progress progress={50} />
        <p className="text-center pt-2">50% complete</p>
      </div>
    </>
  )
}

export default HomePage