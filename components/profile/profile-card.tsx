import type { ReactNode } from 'react';

type ProfileCardProps = {
  name: string;
  email?: string | null;
  image?: string | null;
  logoutSlot?: ReactNode;
};

export function ProfileCard({ name, email, image, logoutSlot }: ProfileCardProps) {
  return (
    <div className="rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_28px_70px_rgba(68,42,26,0.08)] backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-3xl bg-[#f0dfcf]">
          {image ? <img src={image} alt={name} className="h-full w-full object-cover" /> : null}
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Google profile</div>
          <h1 className="mt-2 text-3xl font-semibold text-[#1f1612]">{name}</h1>
          <p className="mt-1 text-sm text-[#685246]">{email ?? 'No email available'}</p>
        </div>
        </div>

        {logoutSlot ?? null}
      </div>
    </div>
  );
}
