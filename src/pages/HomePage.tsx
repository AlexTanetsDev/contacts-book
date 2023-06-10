import { GreetingBox } from "../components/greetingBox/GreetingBox";
import { HomeView } from "../components/homeView/HomeView";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <>{!isLoggedIn ? <GreetingBox /> : <HomeView />}</>;
}
