import { Phone, Mail, MapPin  } from 'lucide-react';
import type { IContactDetail } from '../Reusable/ContactDetail';
import ContactDetail from '../Reusable/ContactDetail';
import Title from '../Reusable/Title';

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
        <div className="container-popout py-12 px-6 sm:flex flex-row gap-4">
          <div className="rotate-tilt-xsmr hidden sm:block">
            <h4 className="text-headline-sm text-nowrap">Contact for Collab</h4>
            <p className="text-caption-quote pt-1">
              "Whether you have a project in mind or just want to connect, feel free to reach out!"
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
          <div className="sm:flex flex-row gap-8">
            <div>
              <p className="text-body-sm mb-4">
                Todo
              </p>
              <p className="text-body-sm">
                Kota the Friend
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMeSection