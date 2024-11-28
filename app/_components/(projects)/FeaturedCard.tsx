import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

const FeaturedCard = ({
  children,
  href,
  ...props
}: { children: React.ReactNode; href: Url } & any) => {
  return (
    <Link
      href={href}
      className={`flex h-64 min-h-64 w-96 snap-center flex-col justify-between gap-3 whitespace-nowrap rounded-xs bg-white pb-2 drop-shadow-lg duration-500 hover:scale-105 hover:shadow-lg focus:scale-95 xl:h-80 xl:w-full ${props.className}`}
    >
      {children}
    </Link>
  );
};

FeaturedCard.Title = function FeaturedCardTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h1 className="text-wrap text-left text-base font-bold lg:text-xl">
      {children}
    </h1>
  );
};

FeaturedCard.Desc = function FeaturedCardDesc({
  children,
}: {
  children: string;
}) {
  return <p className="text-left font-light">{children}</p>;
};

export default FeaturedCard;
