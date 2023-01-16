export async function getAllFoods() {
  const response = await fetch('http://localhost:8080/foods', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    // console.log(response);
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}

export async function addOrder(orderData) {
  console.log(orderData);
  const response = await fetch('http://localhost:8080/tables', {
    method: 'PATCH',
    body: JSON.stringify(orderData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create Order.');
  }
  return data;
}
