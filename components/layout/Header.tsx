import { HugeiconsIcon } from '@hugeicons/react';
import { Home02Icon, UserIcon, Briefcase02Icon, DiplomaIcon, FileDownloadIcon } from '@hugeicons-pro/core-stroke-standard';
import Button from '@/components/ui/Button';

export default function Header() {
  return (
    <header className="bg-background-light rounded-2xl p-2 shadow-md inline-flex mx-auto">
      <nav className="flex items-center gap-4">
        <Button
          href="/"
          variant="transparent"
          size="sm"
          className="aspect-square !p-2"
          icon={<HugeiconsIcon icon={Home02Icon} className="w-5 h-5" />}
          ariaLabel="Home"
          hoverSlide={true}
        />
        <Button
          href="#about"
          variant="transparent"
          size="sm"
          className="aspect-square !p-2"
          icon={<HugeiconsIcon icon={UserIcon} className="w-5 h-5" />}
          ariaLabel="About"
          hoverSlide={true}
        />
        <Button
          href="#projects"
          variant="transparent"
          size="sm"
          className="aspect-square !p-2"
          icon={<HugeiconsIcon icon={Briefcase02Icon} className="w-5 h-5" />}
          ariaLabel="Projects"
          hoverSlide={true}
        />
        <Button
          href="#education"
          variant="transparent"
          size="sm"
          className="aspect-square !p-2"
          icon={<HugeiconsIcon icon={DiplomaIcon} className="w-5 h-5" />}
          ariaLabel="Education"
          hoverSlide={true}
        />
        <Button
          href="/docs/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          icon={
            <HugeiconsIcon icon={FileDownloadIcon} className="w-5 h-5" />
          }
          iconPosition="left"
          hoverSlide={true}
        >
          CV
        </Button>
      </nav>
    </header>
  );
}
