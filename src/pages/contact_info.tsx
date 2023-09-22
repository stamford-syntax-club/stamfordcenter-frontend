import React from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';




export default function contactInfoPage() {
  return <div className="container mx-auto mt-12">
    <section className="relative w-full">
      {/* Header */}
      <h1>
      <div className="flex flex-col items-center">
        <div className="text-5xl font-bold mb-4" >Contact Information</div>
      </div>
        </h1>

        {/* Header.Description */}
        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

        {/* Card 1*/}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="/assets/images/contact_info/Rectangle 1.png" alt="Rectangle 1"
          height={160}
          
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Academic Support</Text>
       
      </Group>

      <Text size="sm" c="dimmed">
        Operation Hours:
      </Text>
      
      <Text>Mon-Fri 08:30 - 17.30</Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Email
      </Button>
    </Card>
     {/* Card 2*/}
     <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="/assets/images/contact_info/Rectangle 1.png" alt="Rectangle 1"
          height={160}
          
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Academic Support</Text>
       
      </Group>

      <Text size="sm" c="dimmed">
        Operation Hours:
      </Text>
      
      <Text>Mon-Fri 08:30 - 17.30</Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Email
      </Button>
    </Card>

      {/* Card 3*/}
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="/assets/images/contact_info/Rectangle 1.png" alt="Rectangle 1"
          height={160}
          
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Academic Support</Text>
       
      </Group>

      <Text size="sm" c="dimmed">
        Operation Hours:
      </Text>
      
      <Text>Mon-Fri 08:30 - 17.30</Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Email
      </Button>
    </Card>

       {/* Card 4*/}
       <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="/assets/images/contact_info/Rectangle 1.png" alt="Rectangle 1"
          height={160}
          
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Academic Support</Text>
       
      </Group>

      <Text size="sm" c="dimmed">
        Operation Hours:
      </Text>
      
      <Text>Mon-Fri 08:30 - 17.30</Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Email
      </Button>
    </Card>

        {/* Card 5*/}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="/assets/images/contact_info/Rectangle 1.png" alt="Rectangle 1"
          height={160}
          
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Academic Support</Text>
       
      </Group>

      <Text size="sm" c="dimmed">
        Operation Hours:
      </Text>
      
      <Text>Mon-Fri 08:30 - 17.30</Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Email
      </Button>
    </Card>

    </section>
  </div>}





// Backup

/*
<div className="box" style={whiteBoxStyle}>Registrar<br/>Operational Hours:
  Mon-Fri 8.30 - 17.30</div>
  <div className="box" style={whiteBoxStyle}>Registrar</div>
  <div className="box" style={whiteBoxStyle}>Library</div>

  <div className="box" style={whiteBoxStyle}>Finance</div>
  <div className="box" style={whiteBoxStyle}>IT Support</div>
  <div className="box" style={whiteBoxStyle}>Student Service</div>



function Box({
  children,
  backgroundColor,
  border,
  borderRadius,
  color,
  overflow,
  fontFamily = 'Helvetica',
  fontSize = '1rem',
  fontWeight = 300,
  minHeight,
  margin,
  padding,
  width,
  textAlign,
  style,
  ...props
}) {
  return (
    <div
      {...props}
      style={{
        border,
        backgroundColor,
        borderRadius,
        color,
        fontFamily,
        fontSize,
        fontWeight,
        overflow,
        minHeight,
        margin,
        padding,
        width,
        textAlign,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function Card({ avatar, title, children, ...rootProps }) {
  return (
    <Box
      backgroundColor="#333"
      borderRadius={4}
      color="#eee"
      minHeight={200}
      padding={20}
      width={300}
      {...rootProps}
    >
      {avatar ? (
        <Box
          width={80}
          border="4px solid cyan"
          backgroundColor="#fff"
          borderRadius="50%"
          overflow="hidden"
        >
          {avatar}
        </Box>
      ) : null}
      {title ? (
        <Box fontSize="1.3rem" padding="10px 0">
          {title}
        </Box>
      ) : null}
      {children ? <Box>{children}</Box> : null}
    </Box>
  )
}

const ContactInfoPage: React.FC = () => {
  const h1Style = {
    textAlign: 'center',
    fontWeight: 'bold',
   color: 'white',
   fontFamily: 'Open Sans, sans-serif',
   fontSize: '50px',
  };

  const pStyle = {
    fontStyle: 'light',
    fontSize: '28px',
    fontFamily: 'Open Sans, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  }

  const whiteBoxStyle = { 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '150px',
    height: '150px',
    margin: '10px',
    borderRadius: '10px', // Adding border radius for rounded corners
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Adding a box shadow for depth
    marginLeft: '150px',
    margin: '150px',
  }

  const boxContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
  flexWrap: 'wrap',
    justifyContent: 'center', // Center the boxes horizontally
 
  };

  return (
    <div>
      <h1 style = {h1Style} >Contact Information Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
     
      <Card
      title="Test Box"
    >
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Card>
     
     
    
    </div>

  
    
  );
};

  */