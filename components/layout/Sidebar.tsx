import Image from 'next/image';
import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  Github01Icon, 
  Linkedin01Icon, 
  TwitterIcon,
  InstagramIcon,
  DribbbleIcon,
  BehanceIcon,
} from '@hugeicons-pro/core-stroke-standard';
import { personalInfo } from '@/lib/constants';
import Button from '@/components/ui/Button';

// Map social names to icons
const socialIcons: Record<string, any> = {
  GitHub: Github01Icon,
  LinkedIn: Linkedin01Icon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  Dribbble: DribbbleIcon,
  Behance: BehanceIcon,
};

export default function Sidebar() {
  const { name, title, bio, photo, socialLinks } = personalInfo;

  return (
    <aside className="flex flex-col items-center md:items-start gap-6 p-6 md:sticky md:top-6 md:h-fit max-md:w-full w-fit shrink-0 bg-foreground rounded-3xl shadow-md">
      {/* Photo */}
      {photo && (
        <div className="relative w-32 h-32 md:w-auto md:h-64 aspect-[3/4] bg-white rounded-2xl overflow-hidden  -shrink-0">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Name */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-background mb-2">
          {name}
        </h1>
        <p className="text-lg text-secondary">{title}</p>
      </div>

      {/* Description */}
      <p className="text-lg text-background max-w-xs text-center md:text-left leading-relaxed text-medium">
        {bio}
      </p>

      {/* Social Links */}
      {socialLinks && socialLinks.length > 0 && (
        <div className="flex gap-4 mt-2">
          {socialLinks.map((social) => {
            const IconComponent = socialIcons[social.name];
            return (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-background hover:text-accent transition-colors p-2 aspect-square hover:bg-background/10 rounded-full"
              >
                {IconComponent ? (
                  <HugeiconsIcon 
                    icon={IconComponent} 
                    className="w-6 h-6" 
                  />
                ) : (
                  <span className="text-sm">{social.name}</span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </aside>
  );
}

