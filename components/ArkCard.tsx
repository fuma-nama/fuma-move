import { cn } from "fumadocs-ui/components/api";
import { Card, CardProps, Cards } from "fumadocs-ui/components/card";

const COOL_COLORS = [
  "#ab25e9", // purple
  "#ee5389", // red
  "#eebd53", // orange
  "#84ee53", // green
  "#3347ff", // blue
];

// css scope docs: https://developer.mozilla.org/en-US/docs/Web/CSS/@scope

export const ArkCards: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <style>
        {`
         @scope (.ark-cards) {
           ${COOL_COLORS.map(
             (color, i) =>
               `.ark-card:nth-child(4n + ${i}) > div:first-child {
                 color: white;
                 background-color: ${color}50;
                 border-color: ${color};
                 border-width: 2px;
              }`
           ).join("\n")}
         }
       `}
      </style>
      <Cards className="ark-cards">{children}</Cards>
    </>
  );
};

export const ArkCard: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Card
      {...props}
      className={cn(
        "ark-card", // special class for ArkCards targeting
        "even:translate-y-10 [&>h3]:text-2xl [&>h3]:font-semibold border-ark-purple",
        className
      )}
    >
      {children}
    </Card>
  );
};
