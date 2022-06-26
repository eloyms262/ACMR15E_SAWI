import Link from "next/link";
import { useRouter } from "next/router";
import { Text } from "@chakra-ui/react";

export default function NavLink(props) {
  const router = useRouter();
  return (
    <div>
      <Link href={props.link}>
        <Text
          fontSize="xl"
          className={
            (router.pathname == props.link
              ? "text-green-700  font-bold"
              : "border-transparent") + " p-2"
          }
        >
          {props.navName}
        </Text>
      </Link>
    </div>
  );
}
