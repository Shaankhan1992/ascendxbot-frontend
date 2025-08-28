import { useState } from "react";
import { supabase } from "./supabaseClient";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");

  const handleRegister = async () => {
    if (!referral) {
      alert("Referral code is required!");
      return;
    }

    // Step 1: Check referral code in Supabase table
    const { data: refData, error: refError } = await supabase
      .from("referrals") // 👈 is table ka naam aapko Supabase me banana hoga
      .select("*")
      .eq("code", referral)
      .single();

    if (refError || !refData) {
      alert("Invalid referral code!");
      return;
    }

    // Step 2: If referral valid, then signUp
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      // Step 3: Save user + referral info in a "users" table
      await supabase.from("users").insert([
        {
          email: email,
          referral_code: referral,
        },
      ]);

      alert("Registered Successfully with Referral!");
      console.log(data);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <input placeholder="Referral Code" onChange={(e) => setReferral(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
