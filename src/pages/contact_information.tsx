import {
  Card,
  Image,
  Text,
  Button,
  Group,
  CardSection,
} from "@mantine/core";

interface ContactCardProps {
  title: string;
  operationTitle: string;
  operationTime: string;
  imgUrl: string;
  email: string;
}

const imageUrl = "/assets/images/logos/registrar.png";

const contactCards = [
	{
		imgUrl: imageUrl,
		title: "Academic Support",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
		email: "ug_academic@stamford.edu",
	},
	{
		imgUrl: imageUrl,
		title: "Registra",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
		email: "registrar.bkk@stamford.edu",
	},
	{
		imgUrl: imageUrl,
		title: "Library",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
		email: "library@stamford.edu",
	},
	{
		imgUrl: imageUrl,
		title: "Finance",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
		email: "cashier_rm9@stamford.edu",
	},
	{
		imgUrl: imageUrl,
		title: "IT Support",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
		email: "support@stamford.edu",
	},
	{
		imgUrl: imageUrl,
		title: "Student Service",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
		email: "international-service@stamford.edu",
	},
];

const ContactCard = ({
  title,
  operationTime,
  operationTitle,
  imgUrl,
  email,
}: ContactCardProps) => (
  <Card className="p-10 md:p-10 lg:p-12 max-w-md md:max-w-lg lg:max-w-xl mx-auto rounded-lg">
    <CardSection className="max-w-xs">
      <Image className="rounded-lg w-full h-full" src={imgUrl} alt="Contact Img" />
    </CardSection>

    <CardSection className="mt-4 md:mt-6 lg:mt-8 flex text-white text-lg font-semibold font-open-sans">
      {title}
    </CardSection>

    <CardSection className="mt-2 md:mt-4 lg:mt-6 flex items-center text-sm md:text-base">
      {operationTitle}
      <br />
      {operationTime}
    </CardSection>

    <Card.Section className="mt-4">
      <div className="w-full">
        <a href={`mailto:${email}`}>
          <Button className="w-full h-10 text-blue-300 bg-slate-800">Email</Button>
        </a>
      </div>
    </Card.Section>
  </Card>
);

const ContactInfoPage = () => (
  <div className="container mx-auto mt-12 justify-center">
    {/* Header */}
    <h1>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-4 text-5xl font-bold text-white">Contact Information</div>
      </div>
    </h1>

    {/* Header.Description */}
    <Text className="text-center">
      Explore the diverse departments below to find the contact information you need. Our dedicated staff is
      ready to help you on your educational journey. Feel free to reach out, and we'll ensure you get the
      support and information required to succeed during your time at Stamford
    </Text>

    <Group className="m-14 grid items-center justify-center gap-14 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {contactCards.map((card) => (
        <ContactCard key={`contactcard-${card.title}`} {...card} />
      ))}
    </Group>
  </div>
);
export default ContactInfoPage;
