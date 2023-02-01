import { type NextPage } from "next";
import Button from "@/features/common/components/Button";
import { api } from "@/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div>
      <Button variant="primary" fullWidth>
        {hello.data?.greeting}
      </Button>
    </div>
  );
};

export default Home;
