interface SkillCardProps {
  name: string;
  category?: string;
}

export default function SkillCard({ name, category }: SkillCardProps) {
  return (
    <div className="px-3 py-1 text-sm bg-background-light text-foreground rounded-lg">
      <div className="flex flex-col gap-2">
        <h3 className="text-foreground">{name}</h3>
        {category && (
          <p className="text-sm text-secondary">{category}</p>
        )}
      </div>
    </div>
  );
}

