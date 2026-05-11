"use client"; // if you need client code

import { useParams } from "next/navigation";

export default function AiCoverLetterPage() {
  const params = useParams(); // { id: "ewfawefawf" }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">CoverLetter: {params.id}</h1>
      <p>This page works for any string in the URL!</p>
    </div>
  );
}
