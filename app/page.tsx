'use client';

import {
  Accordion,
  Alert,
  Avatar,
  Badge
} from "flowbite-react";

import { HiCheck } from 'react-icons/hi';

const HomePage = () => {
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
          <Avatar rounded img='https://yt3.ggpht.com/ytc/APkrFKbCeq3QFsaH8ggv64lVghz6fnfX1PWPWlxtXrP7=s176-c-k-c0x00ffffff-no-rj' />
          <Avatar img='https://yt3.ggpht.com/ytc/APkrFKbCeq3QFsaH8ggv64lVghz6fnfX1PWPWlxtXrP7=s176-c-k-c0x00ffffff-no-rj' />
        </div>

        <div className="compone">
          <h1>Badge</h1>
          <div className="flex flex-wrap gap-2">
            <Badge icon={HiCheck} />
            <Badge color="gray" icon={HiCheck} />
            <Badge size="sm" icon={HiCheck} />
            <Badge color="gray" size="sm" icon={HiCheck} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage