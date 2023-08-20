import { ContainedButton, OutlinedButton } from "@/components/Button/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1></h1>
      <ContainedButton bgColor="primary" textColor="white">
        push me
      </ContainedButton>
      <ContainedButton bgColor="grey" textColor="primary">
        push me
      </ContainedButton>
      <OutlinedButton > fix me</OutlinedButton>
    </main>
  );
}
