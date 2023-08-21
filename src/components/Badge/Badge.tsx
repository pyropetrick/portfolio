import { FC } from "react";

type Props = {
  text: string;
}

export const Badge: FC<Props> = ({text}) => {
  return (
    <div className="p-2 border-2 border-primary rounded-full text-sm font-medium dark:border-blue">{text}</div>
  )
}
