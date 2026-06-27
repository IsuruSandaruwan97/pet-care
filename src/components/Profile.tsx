import { Button } from "./Button";

type ProfileProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export function Profile({ name, role, bio, image }: ProfileProps) {
  return (
    <div className="flip-card h-[450px] w-full">
      <div className="flip-card-inner relative h-full w-full rounded-2xl shadow-xl">
        <div className="flip-card-front absolute h-full w-full overflow-hidden rounded-2xl bg-mist">
          <img alt={name} className="h-full w-full object-cover" src={image} />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h4 className="font-headline-md">{name}</h4>
            <p className="text-label-sm text-secondary-container">{role}</p>
          </div>
        </div>
        <div className="flip-card-back absolute flex h-full w-full flex-col items-center justify-center rounded-2xl bg-surface p-xl text-center">
          <h4 className="mb-4 font-headline-md text-primary">{name}</h4>
          <p className="mb-6 text-on-surface-variant">{bio}</p>
          <Button variant="ghost" className="rounded-none border-b border-primary px-0 py-1 font-bold">
            Full Bio
          </Button>
        </div>
      </div>
    </div>
  );
}
