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
      id: data[key].id,
      price: Number(data[key].price),
      name: data[key].name,
      amount: Number(data[key].amount),
      descreption: data[key].descreption,
      image: data[key].image,
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}

export async function addOrder(orderData) {
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

export async function getTables(orderData) {
  const response = await fetch('http://localhost:8080/tables');
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create Order.');
  }
  return data;
}
