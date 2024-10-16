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
      className={`flex min-w-[1000px] snap-center flex-col justify-between gap-3 whitespace-nowrap rounded-2xl bg-white p-3 duration-500 hover:scale-105 hover:shadow-lg ${props.className}`}
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
  return <h1 className="text-center text-xl font-bold">{children}</h1>;
};

FeaturedCard.Desc = function FeaturedCardDesc({
  children,
}: {
  children: string;
}) {
  return <p className="text-center font-light">{children}</p>;
};

export default FeaturedCard;
