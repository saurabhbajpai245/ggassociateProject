
import { useEffect, useState } from "react";

export default function SanityTest() {
  const [result, setResult] = useState("Loading...");
  const [error, setError] = useState("");

  useEffect(() => {
    const url =
      "https://pd1iznq3.api.sanity.io/v2026-10-25/data/query/production?query=%2A%5B0...1%5D%7B_id%2Ctitle%7D";

    fetch(url)
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            `HTTP ${response.status}: ${JSON.stringify(data)}`
          );
        }

        setResult(JSON.stringify(data.result, null, 2));
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main className="m-8">
      <h1 className="mb-4 text-xl font-bold">
        Sanity Connection Test
      </h1>

      {error ? (
        <pre className="whitespace-pre-wrap text-red-600">
          {error}
        </pre>
      ) : (
        <pre className="whitespace-pre-wrap">{result}</pre>
      )}
    </main>
  );
}
