import React from 'react';
import { Card, Image, Text, Badge, Button, Group, Grid, CardSection } from '@mantine/core';

interface ContactCardProps {
  title: string;
  operationTitle: string;
  operationTime: string;
  imgUrl: string;
}

const contactCards = [
{ imgUrl: '/assets/images/contact_info/Rectangle 1.png',
title: 'Academic Support',
operationTitle: 'Operation Hours:',
operationTime: 'Mon-Fri 08:30 - 17.30',
},
{ imgUrl: '/assets/images/contact_info/Rectangle 1.png',
title: 'Registra',
operationTitle: 'Operation Hours:',
operationTime: 'Mon-Fri 08:30 - 17.30',
},
{ imgUrl: '/assets/images/contact_info/Rectangle 1.png',
title: 'Library',
operationTitle: 'Operation Hours:',
operationTime: 'Mon-Fri 08:30 - 17.30',
},
{ imgUrl: '/assets/images/contact_info/Rectangle 1.png',
title: 'Finance',
operationTitle: 'Operation Hours:',
operationTime: 'Mon-Fri 08:30 - 17.30',
},
{ imgUrl: '/assets/images/contact_info/Rectangle 1.png',
title: 'IT Support',
operationTitle: 'Operation Hours:',
operationTime: 'Mon-Fri 08:30 - 17.30',
},
{ imgUrl: '/assets/images/contact_info/Rectangle 1.png',
title: 'Student Service',
operationTitle: 'Operation Hours:',
operationTime: 'Mon-Fri 08:30 - 17.30',
},

]

const ContactCard = ({ title, operationTime, operationTitle, imgUrl }: ContactCardProps) => (
  <Card withBorder shadow="sm" padding="lg" radius="md"  h={422} w={308} className="flex flex-col justify-between">
    <CardSection >
    <div className="flex items-center justify-center"> <Image
        src="/assets/images/contact_info/Rectangle 1.png"
        alt="Rectangle 1"
        height={160}
        p={25}
        mb=""
      /></div>
    </CardSection>



    <CardSection className="flex flex-col items-center p-4">
{title}
</CardSection>
<CardSection className="flex items-center">{operationTitle}</CardSection>
<CardSection className="flex items-center">{operationTime}</CardSection>
<Button variant="light" color="blue" fullWidth mt="md"  radius="md">
        Book classic tour now
      </Button>
  </Card>
);




// Export
export default function contactInfoPage() {
  return <div className="container mx-auto mt-12">
      {/* Header */}
      <h1>
      <div className="flex flex-col items-center text-center">
        <div className="text-5xl font-bold mb-4" >Contact Information</div>
      </div>
        </h1>

        {/* Header.Description */}
        <Text align="center" className="mb-16">
  Explore the diverse departments below to find the contact information you need. Our dedicated staff is ready to help you on your educational journey. Feel free to reach out, and we'll ensure you get the support and information required to succeed during your time at Stamford
</Text>
<Group  className='grid lg:grid-cols-3 justify-center ml-20'>
				{contactCards.map((card) => (
					<ContactCard key={"contactcard" + card.title} {...card} />
				))}
			</Group>

  </div>}


