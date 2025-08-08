import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

interface CompanyInfoCardProps {
  logo?: ReactNode;
  companyName: string;
  address: string;
  phones: string[];
  qrCodeSrc: string;
  googlePlaySrc: string;
  appStoreSrc: string;
  className?: string;
}

export const CompanyInfoCard: FC<CompanyInfoCardProps> = ({
  logo,
  companyName,
  address,
  phones,
  qrCodeSrc,
  googlePlaySrc,
  appStoreSrc,
  className = ''
}) => {
  return (
    <div className={`text-sm text-gray-800 space-y-2 max-w-lg group ${className}`}>
      {logo && <div className="mb-2">{logo}</div>}

      <h2 className="font-semibold uppercase text-gray-700 group-hover:text-indigo-600 text-lg tracking-wide group-hover:text-xl transition-all duration-150">
        {companyName}
      </h2>

      <div className="flex items-start gap-2 text-gray-600">
        <MapPin className="w-4 h-4 mt-1 text-blue-500" />
        <p className="whitespace-pre-line leading-snug">{address}</p>
      </div>

      <div className="flex items-start gap-2 text-gray-600">
        <Phone className="w-4 h-4 mt-1 text-green-600" />
        <div className="flex flex-col gap-0.5">
          {phones.map((phone, idx) => (
            <span key={idx}>{phone}</span>
          ))}
        </div>
      </div>

      <div className="flex items-end gap-4 pt-2">
        <div className="p-2 bg-white">
          <Image
            src={qrCodeSrc}
            alt="QR Code"
            width={8}
            height={8}
            className="w-16 h-16 object-contain rounded-md border"
          />
        </div>
        <div className="flex gap-2">
          <Image src={googlePlaySrc} width={96} height={8} alt="Google Play" className="h-6" />
          <Image src={appStoreSrc} alt="App Store" width={96} height={8} className="h-6" />
        </div>
      </div>
    </div>
  );
};
