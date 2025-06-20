export async function handleUsernameCheck(username) {
  const res = await fetch("/api/username", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  });

  const data = await res.json();
  return data;
}
