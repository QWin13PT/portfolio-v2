import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function Home() {
  return (
    <main className="flex-1 pb-12">
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
    </main>
  );
}
