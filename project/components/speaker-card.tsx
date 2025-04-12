import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface SpeakerCardProps {
  name: string;
  affiliation: string;
  avatarInitial?: string;
  badgeText?: string;
}

const SpeakerCard = ({
  name,
  affiliation,
  avatarInitial,
  badgeText,
}: SpeakerCardProps) => {
  // Get the initials from the name if not provided
  const initial = avatarInitial || name.charAt(0);

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Avatar className="h-16 w-16 border-2 border-conference-primary">
            <AvatarFallback className="bg-conference-primary text-white text-xl">
              {initial}
            </AvatarFallback>
          </Avatar>
          {badgeText && (
            <Badge variant="primary" className="ml-2">
              {badgeText}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl mb-2">{name}</CardTitle>
        <p className="text-sm text-gray-600">{affiliation}</p>
      </CardContent>
    </Card>
  );
};

export default SpeakerCard;
