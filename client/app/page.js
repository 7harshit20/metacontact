async function getData() {
  const res = await fetch(' https://afe5-14-139-241-220.ngrok.io/contact/', {
    cache: 'no-store',
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  // console.log(res.json());
  return res.json();
}

export default async function Page() {
  const data = await getData();
  // console.log(data);
  return (
    <main>
      <h1>Contacts</h1>
      <br />
      <ul>
        {data.data.map((item) => (
          <li key={item._id}>
            <p>Name: {item.name}</p>
            <p>Phone: {item.phone}</p>
            <br />
          </li>
        ))}
      </ul>
    </main>
  );
}
