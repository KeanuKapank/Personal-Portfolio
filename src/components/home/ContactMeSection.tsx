import { Phone, Mail, MapPin  } from 'lucide-react';
import type { IContactDetail } from '../Reusable/ContactDetail';
import ContactDetail from '../Reusable/ContactDetail';
import Title from '../Reusable/Title';
import FormElement from '../Reusable/FormElement';

const contactDetails: IContactDetail[] = [
    {
      icon: Mail,
      name: 'Email',
      value: 'keanukapank06@gmail.com'
    },
    {
      icon: Phone,
      name: 'Phone',
      value: '+27 74 254 8136'
    },
    {
        icon: MapPin,
        name: 'Location',
        value: 'Cape Town, South Africa'
    }
];

const ContactMeSection = () => {
  return (
    <section className="bg-gray-100 pt-1 pb-6">
      <div className="container mx-auto px-4">
        <Title name="Drop A Note" />
        <div className="container-popout py-12 px-6 sm:flex flex-row gap-4 w-full">
          <div className="hidden sm:block flex-1">
            <h4 className="text-headline-sm text-nowrap">Contact for Collab</h4>
            <p className="text-caption-quote pt-1 text-wrap">
              "Whether you have a project in mind <br></br> or just want to connect,<br></br> feel free to reach out!"
            </p>
            <div className="pt-4 flex flex-col items-start">
                {contactDetails.map((detail, index) => (
                    <ContactDetail
                        key={index} 
                        icon={detail.icon}
                        name={detail.name} 
                        value={detail.value}
                     />
                ))}
            </div>
          </div>
          <div className="vertical-divider rotate-tilt-xsmr hidden sm:block flex-none"></div>
          <div className="sm:flex flex-row gap-8 flex-2">
            <form className="flex flex-col gap-4 w-full">
              <FormElement
                label="Your Name"
                type="text"
                id="name"
                placeholder="John Doe"
                onChange={() => {}}
              />
              <FormElement
                label="Your Email"
                type="email"
                id="email"
                placeholder="your.email@example.com"
                onChange={() => {}}
              />
              <FormElement
                label="Message"
                type="textarea"
                id="message"
                placeholder="Your message here..."
                onChange={() => {}}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMeSection