import type { LucideIcon } from 'lucide-react';

export interface IContactDetail {
    icon: LucideIcon;
    name: string;
    value: string;
}

const ContactDetail = ({ icon: Icon, name, value }: IContactDetail) => {
  return (
    <div className="flex items-start mb-4 h-12">
      {
        Icon && <Icon className="container-icon border-charcoal-slim" />
      }
      <div className="ml-2">
        <h4 className="text-label-caps">{name}</h4>
        <p className="text-caption text-nowrap">{value}</p>
      </div>
    </div>
  )
}

export default ContactDetail