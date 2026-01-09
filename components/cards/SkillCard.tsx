interface SkillCardProps {
  name: string;
  category?: string;
}

export default function SkillCard({ name, category }: SkillCardProps) {
  return (
    <div className="bg-background-light rounded-3xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        {category && (
          <p className="text-sm text-secondary">{category}</p>
        )}
      </div>
    </div>
  );
}

