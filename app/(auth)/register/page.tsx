import AuthForm from "@/components/Authform";

export default function Register() {
  return (
    <div className="container">
      <h2>Register</h2>
      <AuthForm mode="register" />
    </div>
  );
}
