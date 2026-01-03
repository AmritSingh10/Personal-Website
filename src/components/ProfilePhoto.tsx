import { User } from "lucide-react";

interface ProfilePhotoProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-24 h-24",
  md: "w-32 h-32 md:w-40 md:h-40",
  lg: "w-40 h-40 md:w-52 md:h-52",
};

const ProfilePhoto = ({ src, alt = "Profile photo", size = "lg" }: ProfilePhotoProps) => {
  return (
    <div className={`photo-frame ${sizeClasses[size]} flex items-center justify-center bg-secondary`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <User className="w-1/3 h-1/3 text-muted-foreground" />
      )}
    </div>
  );
};

export default ProfilePhoto;
