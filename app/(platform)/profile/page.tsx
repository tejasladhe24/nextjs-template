import { UserProfile } from "@clerk/nextjs";

export default () => {
  return (
    <UserProfile
      appearance={{
        elements: {
          rootBox: {
            boxShadow: "none",
            width: "100%",
          },
          card: {
            borderRadius:4,
            border: "1px solid #e5e5e5",
            boxShadow: "none",
            width: "100%",
          },
        },
      }}
    />
  );
};
