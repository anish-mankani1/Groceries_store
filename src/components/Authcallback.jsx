import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://gnpvdaifagpoxbczvohh.supabase.co",
  "sb_publishable_VRZgNmA2vM6Y39SgOYdJtA_zpeZ_B3c"
);
// nkama

export default function Authcallback() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const saveUser = async () => {
      const email = params.get("email");
      const name = params.get("name");
      const avatar = params.get("avatar");
      const provider = params.get("provider");

      const { data, error } = await supabase
  .from("Groceries_oauth")
  .upsert(
    {
      email,
      name,
      avatar_url: avatar,
      provider,
    },
    { onConflict: "email" }
  );

console.log(error);

      navigate("/");
    };
    saveUser();
     localStorage.setItem("freshmart_user", JSON.stringify({ email, name, avatar, provider }));
  }, []);
 

  return <p>Signing you in...</p>;
}